"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ThemeToggleProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  showTooltip?: boolean
  showDropdown?: boolean
  align?: "start" | "center" | "end"
}

export function ThemeToggle({
  variant = "outline",
  size = "icon",
  showTooltip = true,
  showDropdown = true,
  align = "end",
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const getThemeIcon = () => {
    if (theme === "system") {
      return <Monitor className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
    }
    return resolvedTheme === "light" ? (
      <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
    ) : (
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
    )
  }

  const getTooltipText = () => {
    switch (theme) {
      case "light":
        return "Switch to dark mode"
      case "dark":
        return "Switch to system theme"
      case "system":
        return "Switch to light mode"
      default:
        return "Toggle theme"
    }
  }

  if (!showDropdown) {
    const toggleTheme = () => {
      if (theme === "light") {
        setTheme("dark")
      } else if (theme === "dark") {
        setTheme("system")
      } else {
        setTheme("light")
      }
    }

    if (!showTooltip) {
      return (
        <Button
          variant={variant}
          size={size}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="transition-all duration-200 hover:scale-105 active:scale-95"
        >
          {getThemeIcon()}
        </Button>
      )
    }

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={variant}
              size={size}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="transition-all duration-200 hover:scale-105 active:scale-95"
            >
              {getThemeIcon()}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{getTooltipText()}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  // Dropdown version with all theme options
  const button = (
    <Button
      variant={variant}
      size={size}
      aria-label="Toggle theme"
      className="transition-all duration-200 hover:scale-105 active:scale-95"
    >
      {getThemeIcon()}
    </Button>
  )

  if (!showTooltip) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{button}</DropdownMenuTrigger>
        <DropdownMenuContent align={align} className="min-w-[8rem]">
          <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer transition-colors duration-150">
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
            {theme === "light" && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer transition-colors duration-150">
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
            {theme === "dark" && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className="cursor-pointer transition-colors duration-150"
          >
            <Monitor className="mr-2 h-4 w-4" />
            <span>System</span>
            {theme === "system" && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <DropdownMenu>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>{button}</DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Choose theme</p>
          </TooltipContent>
          <DropdownMenuContent align={align} className="min-w-[8rem]">
            <DropdownMenuItem
              onClick={() => setTheme("light")}
              className="cursor-pointer transition-colors duration-150"
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
              {theme === "light" && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("dark")}
              className="cursor-pointer transition-colors duration-150"
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
              {theme === "dark" && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTheme("system")}
              className="cursor-pointer transition-colors duration-150"
            >
              <Monitor className="mr-2 h-4 w-4" />
              <span>System</span>
              {theme === "system" && <span className="ml-auto">✓</span>}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Tooltip>
    </TooltipProvider>
  )
}
