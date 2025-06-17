import React from "react";
import Link from "next/link";

export default function LandingPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-900">
                    Welcome to Activity Tracking SaaS
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                    Effortlessly track, analyze, and optimize your team's activities. Boost productivity with real-time insights and easy-to-use dashboards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/signup" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                        Get Started
                    </Link>
                    <Link href="/login" className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
                        Log In
                    </Link>
                </div>
            </div>
        </main>
    );
}