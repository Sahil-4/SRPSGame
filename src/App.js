import React from "react";
import './App.css';
import Home from './Components/Home';
import Help from './Components/Help';
import About from './Components/About';
import Game from "./Components/Game";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PlayerDataState from "./Context/PlayerData/PlayerDataState";

function App() {
  return (
    <>
      <PlayerDataState>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/start" element={<Game />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </PlayerDataState>
    </>
  );
}

export default App;
