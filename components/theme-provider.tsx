"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState, useCallback } from "react"

type Theme = "light" | "dark" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  systemTheme: "light" | "dark"
  resolvedTheme: "light" | "dark"
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  toggleTheme: () => null,
  systemTheme: "light",
  resolvedTheme: "light",
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "activity-tracking-theme",
  enableSystem = true,
  disableTransitionOnChange = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  // Get resolved theme (actual theme being used)
  const resolvedTheme = theme === "system" ? systemTheme : theme

  // Handle system theme changes
  const handleSystemThemeChange = useCallback((e: MediaQueryListEvent) => {
    setSystemTheme(e.matches ? "dark" : "light")
  }, [])

  // Apply theme to document
  const applyTheme = useCallback(
    (newTheme: "light" | "dark") => {
      const root = window.document.documentElement

      // Disable transitions temporarily if requested
      if (disableTransitionOnChange) {
        const css = document.createElement("style")
        css.appendChild(
          document.createTextNode(
            `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`,
          ),
        )
        document.head.appendChild(css)

        // Re-enable transitions after a brief delay
        setTimeout(() => {
          document.head.removeChild(css)
        }, 1)
      }

      // Remove previous theme classes
      root.classList.remove("light-theme", "dark-theme")

      // Add new theme class
      root.classList.add(`${newTheme}-theme`)

      // Set data attributes for CSS selectors
      root.setAttribute("data-theme", newTheme)
      root.style.colorScheme = newTheme
    },
    [disableTransitionOnChange],
  )

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true)

    // Check for saved theme
    const savedTheme = localStorage.getItem(storageKey) as Theme | null

    // Detect system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setSystemTheme(mediaQuery.matches ? "dark" : "light")

    // Set initial theme
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark" || (enableSystem && savedTheme === "system"))) {
      setTheme(savedTheme)
    } else {
      // Default to system if no saved theme
      setTheme(enableSystem ? "system" : defaultTheme)
    }

    // Listen for system theme changes
    mediaQuery.addEventListener("change", handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange)
    }
  }, [storageKey, defaultTheme, enableSystem, handleSystemThemeChange])

  // Apply theme when resolved theme changes
  useEffect(() => {
    if (mounted) {
      applyTheme(resolvedTheme)
    }
  }, [resolvedTheme, mounted, applyTheme])

  // Save theme preference
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(storageKey, theme)
    }
  }, [theme, storageKey, mounted])

  const handleSetTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    if (theme === "system") {
      setTheme(systemTheme === "dark" ? "light" : "dark")
    } else {
      setTheme(theme === "light" ? "dark" : "light")
    }
  }, [theme, systemTheme])

  const value = {
    theme,
    setTheme: handleSetTheme,
    toggleTheme,
    systemTheme,
    resolvedTheme,
  }

  // Prevent flash of incorrect theme
  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
