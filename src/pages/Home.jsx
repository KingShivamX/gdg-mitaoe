import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center py-6 md:py-12 px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 text-center">
                Welcome to GDG MIT-AOE Tech Quiz
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 text-center max-w-2xl">
                Test your knowledge with quotes from famous tech personalities
                and other tech-related questions!
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-md">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
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
