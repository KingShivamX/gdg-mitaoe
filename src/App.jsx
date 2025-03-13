import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Game from "./pages/Game"
import Results from "./pages/Results"
import EmojiGame from "./pages/EmojiGame"
import EmojiResults from "./pages/EmojiResults"
import Layout from "./components/Layout"

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game" element={<Game />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/emoji-game" element={<EmojiGame />} />
                    <Route path="/emoji-results" element={<EmojiResults />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
