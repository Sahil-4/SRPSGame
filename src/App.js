import React from "react";
import './App.css';
import Home from './Components/Home';
import Help from './Components/Help';
import About from './Components/About';
import Alert from "./Components/Alert";
import Singleplayer from "./Components/Singleplayer";
import Login from "./Components/Login";
import Multiplayer from "./Components/Multiplayer";
import Test from "./Components/Test";
import PageNotFound from "./Components/PageNotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import GameState from "./Context/Game/GameState";


function App() {
  return (
    <>
      <GameState>
        <Alert />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/join" element={<Login />} />
            <Route exact path="/play" element={<Singleplayer />} />
            <Route exact path="/play-two" element={<Multiplayer />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/test" element={<Test />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </GameState>
    </>
  );
}

export default App;
