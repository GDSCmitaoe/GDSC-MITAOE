import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Leaderboard from './pages/Leaderboard';
import Navbar from './layouts/Navbar';
import Cursor from "./components/Cursor";
import PastTeam from "./components/Landing/PastTeam";
import Footer from "./layouts/Footer";

function App() {
    return (
        <div className="App font-sans">
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route exact path="/leaderboard" element={<Leaderboard />} />
                    <Route exact path="/pastteam" element={<PastTeam />} />
                </Routes>
            </Router>

        </div>
    );
}

export default App;