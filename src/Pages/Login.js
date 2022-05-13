import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../Context/Game/GameContext";

const Login = () => {
  const Navigate = useNavigate();
  const { Player, setPlayer, setDefault } = useContext(GameContext);

  useEffect(() => {
    setDefault()
  }, []);


  const handleOnChange = (e) => {
    setPlayer({ ...Player, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    Navigate("/play-two");
  };

  return (
    <div className="login-page H100 W100">
      <form
        className="login-form center"
        method="POST"
        onSubmit={handleOnSubmit}
      >
        <input
          name="name"
          type="text"
          value={Player.name}
          onChange={handleOnChange}
          required="True"
          className="input"
          autoComplete="name"
          placeholder="Name"
        />
        <input
          name="room_code"
          type="number"
          value={Player.room_code}
          onChange={handleOnChange}
          required="True"
          className="input"
          autoComplete="room code"
          min="100"
          max="999"
          placeholder="Unique Code"
        />
        <button type="submit" className="input">
          Start
        </button>
      </form>
    </div>
  );
};

export default Login;
