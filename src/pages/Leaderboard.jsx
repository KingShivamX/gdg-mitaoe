import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("quizLeaderboard") || "[]")
        setLeaderboardData(data)
    }, [])

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Leaderboard</h1>

            {leaderboardData.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">
                        No scores have been submitted yet.
                    </p>
                    <p className="text-gray-500">
                        Be the first to play and submit your score!
                    </p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border-b p-4 text-left">Rank</th>
                                <th className="border-b p-4 text-left">Name</th>
                                <th className="border-b p-4 text-left">
                                    Score
                                </th>
                                <th className="border-b p-4 text-left">
                                    Time (sec)
                                </th>
                                <th className="border-b p-4 text-left">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((entry, index) => (
                                <tr
                                    key={index}
                                    className={
                                        index % 2 === 0
                                            ? "bg-white"
                                            : "bg-gray-50"
                                    }
                                >
                                    <td className="border-b p-4">
                                        {index === 0
                                            ? "🥇"
                                            : index === 1
                                            ? "🥈"
                                            : index === 2
                                            ? "🥉"
                                            : index + 1}
                                    </td>
                                    <td className="border-b p-4">
                                        {entry.name}
                                    </td>
                                    <td className="border-b p-4">
                                        {entry.score}
                                    </td>
                                    <td className="border-b p-4">
                                        {entry.completionTime.toFixed(1)}
                                    </td>
                                    <td className="border-b p-4">
                                        {new Date(
                                            entry.timestamp
                                        ).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="mt-8 text-center">
                <Link
                    to="/"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    Play Again
                </Link>
            </div>
        </div>
    )
}

export default Leaderboard
