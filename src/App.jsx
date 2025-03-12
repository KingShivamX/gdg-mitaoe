import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game"
import Results from "./pages/Results"
import Leaderboard from "./pages/Leaderboard"
import Layout from "./components/Layout"

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
