import React, { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"

const Results = () => {
    const location = useLocation()
    const [playerName, setPlayerName] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { score, totalQuestions, completionTime, answers, questions } =
        location.state || {
            score: 0,
            totalQuestions: 0,
            completionTime: 0,
            answers: [],
            questions: [],
        }

    const handleSubmitScore = (e) => {
        e.preventDefault()
        if (!playerName.trim()) return

        // Get existing leaderboard or initialize empty array
        const leaderboard = JSON.parse(
            localStorage.getItem("quizLeaderboard") || "[]"
        )

        // Add new score
        leaderboard.push({
            name: playerName,
            score,
            completionTime,
            timestamp: Date.now(),
        })

        // Sort by score (descending) and then by completion time (ascending)
        leaderboard.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score
            return a.completionTime - b.completionTime
        })

        // Save to localStorage
        localStorage.setItem("quizLeaderboard", JSON.stringify(leaderboard))
        setIsSubmitted(true)
    }

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-6">
                Your Results
            </h1>

            <div className="bg-blue-50 rounded-lg p-6 mb-8 text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-2">
                    {score} / {totalQuestions}
                </h2>
                <p className="text-gray-700">
                    Completed in {completionTime.toFixed(1)} seconds
                </p>
            </div>

            {!isSubmitted ? (
                <form onSubmit={handleSubmitScore} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">
                        Save your score to the leaderboard
                    </h3>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            placeholder="Enter your name"
                            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            ) : (
                <div className="text-center mb-8">
                    <p className="text-green-600 font-medium mb-4">
                        Your score has been added to the leaderboard!
                    </p>
                </div>
            )}

            <div className="flex justify-center gap-4">
                <Link
                    to="/"
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                    Back to Home
                </Link>
                <Link
                    to="/leaderboard"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    View Leaderboard
                </Link>
            </div>
        </div>
    )
}

export default Results
