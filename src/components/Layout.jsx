import React from "react"
import { Link } from "react-router-dom"

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header with Google-themed colors */}
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo.svg"
                            alt="GDG MIT-AOE Logo"
                            className="h-10"
                        />
                    </Link>
                    <nav className="flex gap-6">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/leaderboard"
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                        >
                            Leaderboard
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 py-4 mt-auto">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>© 2023 Google Developer Group MIT-AOE</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
