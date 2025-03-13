import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center py-6 md:py-12 px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 text-center">
                Welcome to GDG MIT-AOE Tech Quiz
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 text-center max-w-2xl">
                Test your knowledge with our tech quizzes!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                        Tech Quotes Quiz
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Test your knowledge of famous tech quotes and other
                        tech-related questions!
                    </p>
                    <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                        <li>10 random questions</li>
                        <li>15 seconds per question</li>
                        <li>Multiple choice answers</li>
                    </ul>

                    <Link
                        to="/game"
                        className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                        Start Tech Quiz
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                        Emoji Tech Game
                    </h2>
                    <p className="mb-6 text-gray-700">
                        Test your knowledge of tech terms with emoji
                        combinations!
                    </p>
                    <ul className="list-disc pl-5 mb-6 text-gray-700 space-y-2">
                        <li>10 random emoji combos</li>
                        <li>Think about what each emoji combo represents</li>
                        <li>The answer appears after 10 seconds</li>
                    </ul>

                    <Link
                        to="/emoji-game"
                        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                    >
                        Start Emoji Game
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
