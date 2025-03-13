import React from "react"
import { useLocation, Link } from "react-router-dom"

const EmojiResults = () => {
    const location = useLocation()

    const { totalCombos, completionTime } = location.state || {
        totalCombos: 0,
        completionTime: 0,
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
                Emoji Game Complete!
            </h1>

            <div className="bg-blue-50 rounded-lg p-4 md:p-6 mb-6 md:mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    Great Job!
                </h2>
                <p className="text-gray-700">
                    You completed {totalCombos} emoji combinations in{" "}
                    {completionTime.toFixed(1)} seconds
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <Link
                    to="/"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                >
                    Back to Home
                </Link>
                <Link
                    to="/emoji-game"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center"
                >
                    Play Again
                </Link>
            </div>
        </div>
    )
}

export default EmojiResults
