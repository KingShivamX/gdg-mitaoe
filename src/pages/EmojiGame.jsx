import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { emojiCombos } from "../data/emojiCombos"
import Timer from "../components/Timer"

const EmojiGame = () => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [randomCombos, setRandomCombos] = useState([])
    const [showAnswer, setShowAnswer] = useState(false)
    const [score, setScore] = useState(0)
    const [gameStartTime, setGameStartTime] = useState(null)

    // Get 10 random emoji combos on component mount
    useEffect(() => {
        const getRandomCombos = () => {
            const shuffled = [...emojiCombos].sort(() => 0.5 - Math.random())
            return shuffled.slice(0, 10)
        }

        setRandomCombos(getRandomCombos())
        setGameStartTime(Date.now())
    }, [])

    const currentCombo = randomCombos[currentIndex]

    const handleTimeUp = () => {
        if (!showAnswer) {
            // Time's up, show the answer
            setShowAnswer(true)
        } else {
            // Already showing answer, move to next
            moveToNextOrFinish()
        }
    }

    const moveToNextOrFinish = () => {
        if (currentIndex < randomCombos.length - 1) {
            setCurrentIndex(currentIndex + 1)
            setShowAnswer(false)
        } else {
            // Game over, navigate to results
            const completionTime = (Date.now() - gameStartTime) / 1000

            navigate("/emoji-results", {
                state: {
                    score: 0, // No scoring in this version
                    totalCombos: randomCombos.length,
                    completionTime,
                },
            })
        }
    }

    if (!currentCombo) {
        return <div className="text-center py-10">Loading emoji combos...</div>
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                <div className="text-lg font-medium">
                    Emoji {currentIndex + 1} of {randomCombos.length}
                </div>
                <Timer
                    duration={10}
                    onTimeUp={handleTimeUp}
                    key={`${currentIndex}-${showAnswer}`}
                />
            </div>

            <div className="mb-8 text-center">
                <div className="text-6xl md:text-7xl font-bold mb-8 py-6">
                    {currentCombo.combo}
                </div>

                {showAnswer ? (
                    <div className="mb-6">
                        <div className="text-2xl font-bold mb-4 text-blue-600">
                            The answer is:
                        </div>
                        <div className="text-3xl font-bold mb-6">
                            {currentCombo.answer}
                        </div>
                        <button
                            onClick={moveToNextOrFinish}
                            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                        >
                            {currentIndex < randomCombos.length - 1
                                ? "Next Emoji"
                                : "Finish"}
                        </button>
                    </div>
                ) : (
                    <div className="text-xl text-gray-600 mb-6">
                        Think about what this emoji combination represents...
                    </div>
                )}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div className="text-sm text-gray-500">
                    {showAnswer
                        ? "Next in 10 seconds..."
                        : "Answer will appear in 10 seconds"}
                </div>
                <div className="text-sm text-gray-500">
                    Progress: {currentIndex + 1} / {randomCombos.length}
                </div>
            </div>
        </div>
    )
}

export default EmojiGame
