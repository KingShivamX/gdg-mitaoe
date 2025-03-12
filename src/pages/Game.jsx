import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Timer from "../components/Timer"
import { questions } from "../data/questions"

const Game = () => {
    const navigate = useNavigate()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const [randomQuestions, setRandomQuestions] = useState([])
    const [gameStartTime, setGameStartTime] = useState(null)

    // Get 10 random questions on component mount
    useEffect(() => {
        const getRandomQuestions = () => {
            const shuffled = [...questions].sort(() => 0.5 - Math.random())
            return shuffled.slice(0, 10)
        }

        setRandomQuestions(getRandomQuestions())
        setGameStartTime(Date.now())
    }, [])

    const currentQuestion = randomQuestions[currentQuestionIndex]

    const handleAnswerSelect = (answerId) => {
        const newAnswers = [...selectedAnswers]
        newAnswers[currentQuestionIndex] = answerId
        setSelectedAnswers(newAnswers)

        // Move to next question or results if done
        if (currentQuestionIndex < randomQuestions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1)
            }, 500)
        } else {
            // Calculate score and time
            const score = calculateScore(randomQuestions, selectedAnswers)
            const completionTime = (Date.now() - gameStartTime) / 1000 // in seconds

            navigate("/results", {
                state: {
                    score,
                    totalQuestions: randomQuestions.length,
                    completionTime,
                    answers: selectedAnswers,
                    questions: randomQuestions,
                },
            })
        }
    }

    const calculateScore = (questions, answers) => {
        return answers.reduce((score, answer, index) => {
            if (answer === questions[index].correctAnswer) {
                return score + 1
            }
            return score
        }, 0)
    }

    // Handle time up
    const handleTimeUp = () => {
        if (currentQuestionIndex < randomQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            const score = calculateScore(randomQuestions, selectedAnswers)
            const completionTime = (Date.now() - gameStartTime) / 1000

            navigate("/results", {
                state: {
                    score,
                    totalQuestions: randomQuestions.length,
                    completionTime,
                    answers: selectedAnswers,
                    questions: randomQuestions,
                },
            })
        }
    }

    if (!currentQuestion)
        return <div className="text-center py-10">Loading questions...</div>

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                <div className="text-lg font-medium">
                    Question {currentQuestionIndex + 1} of{" "}
                    {randomQuestions.length}
                </div>
                <Timer
                    duration={20}
                    onTimeUp={handleTimeUp}
                    key={currentQuestionIndex}
                />
            </div>

            <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                    {currentQuestion.text}
                </h2>
                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            className={`w-full text-left p-3 md:p-4 rounded-lg border transition-colors ${
                                selectedAnswers[currentQuestionIndex] === index
                                    ? "bg-blue-100 border-blue-500"
                                    : "bg-white border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="text-sm text-gray-500">
                    Time remaining:{" "}
                    <span className="font-medium">20 seconds</span>
                </div>
                <div className="text-sm text-gray-500">
                    Progress:{" "}
                    {Math.round(
                        ((currentQuestionIndex + 1) / randomQuestions.length) *
                            100
                    )}
                    %
                </div>
            </div>
        </div>
    )
}

export default Game
