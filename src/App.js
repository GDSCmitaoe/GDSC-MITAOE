import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from './pages/Landing';
import Leaderboard from './pages/Leaderboard';
import PastTeam from "./components/Landing/PastTeam";
import {Signup} from "./pages/Signup";
import Login from "./pages/Login";

function App() {
    return (
        <div className="App font-sans">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/leaderboard" element={<Leaderboard />} />
                    <Route exact path="/pastteam" element={<PastTeam />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;