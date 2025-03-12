import React, { useState, useEffect } from "react"

const Timer = ({ duration, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(duration)

    useEffect(() => {
        if (timeLeft <= 0) {
            onTimeUp()
            return
        }

        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)

        return () => clearTimeout(timer)
    }, [timeLeft, onTimeUp])

    // Calculate percentage for progress bar
    const percentage = (timeLeft / duration) * 100

    return (
        <div className="w-32">
            <div className="mb-1 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                    Time left
                </span>
                <span className="text-sm font-medium text-gray-700">
                    {timeLeft}s
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className={`h-2.5 rounded-full ${
                        timeLeft > 10
                            ? "bg-green-500"
                            : timeLeft > 5
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    }`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    )
}

export default Timer
