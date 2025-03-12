import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <h1 className="text-4xl font-bold mb-2 text-gray-800">
                Welcome to GDG Tech Quiz
            </h1>
            <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
                Test your knowledge with quotes from famous tech personalities
                and other tech-related questions!
            </p>

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    How to Play
                </h2>
                <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                    <li>You'll get 10 random questions from our collection</li>
                    <li>For each question, you have 20 seconds to answer</li>
                    <li>
                        Your final score and completion time will be recorded
                    </li>
                    <li>
                        Check the leaderboard to see how you rank against others
                    </li>
                </ul>

                <Link
                    to="/game"
                    className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                >
                    Start Game
                </Link>
            </div>
        </div>
    )
}

export default Home
