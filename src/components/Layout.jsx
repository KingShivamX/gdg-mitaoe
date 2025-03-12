import React, { useState } from "react"
import { Link } from "react-router-dom"

const Layout = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header with Google-themed colors */}
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo.svg"
                            alt="GDG MIT-AOE Logo"
                            className="h-5 md:h-6"
                        />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-600 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex gap-6">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-blue-500 transition-colors text-lg font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/leaderboard"
                            className="text-gray-600 hover:text-blue-500 transition-colors text-lg font-medium"
                        >
                            Leaderboard
                        </Link>
                    </nav>
                </div>

                {/* Mobile navigation */}
                {menuOpen && (
                    <div className="md:hidden mt-2 px-4 py-2 bg-white border-t">
                        <Link
                            to="/"
                            className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/leaderboard"
                            className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            Leaderboard
                        </Link>
                    </div>
                )}
            </header>

            {/* Main content */}
            <main className="flex-grow container mx-auto px-4 py-4 md:py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 py-4 mt-auto">
                <div className="container mx-auto px-4 text-center text-gray-600 text-sm md:text-base">
                    <p>© 2025 Google Developer Group MIT-AOE</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
