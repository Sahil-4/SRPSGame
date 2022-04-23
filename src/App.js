import React from "react";
import './App.css';
import Home from './Pages/Home';
import Help from './Pages/Help';
import About from './Pages/About';
import Login from "./Pages/Login";
import Multiplayer from "./Pages/GameMultiplayer";
import Singleplayer from "./Pages/GameSingleplayer";
import PageNotFound from "./Pages/PageNotFound";
import Test from "./Pages/Test";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/join" element={<Login />} />
          <Route exact path="/play" element={<Singleplayer />} />
          <Route exact path="/play-two" element={<Multiplayer />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/test" element={<Test />} />
          {/* <Route exact path="/test" element={<Test />} /> */}
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
