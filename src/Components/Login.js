import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import GameContext from "../Context/Game/GameContext";

const Login = () => {
  const navigate = useNavigate();
  const { playerData, setPlayerData, setDefault, connectToServer } =
    useContext(GameContext);

  const { name, room_code } = playerData;

  useEffect(() => {
    setDefault();
  }, []);

  const handleOnChange = (e) => {
    setPlayerData({ ...playerData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    connectToServer();
    navigate("/play-two");
    // navigate("/test");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleOnSubmit}>
        <input
          name="name"
          type="text"
          required="True"
          className="input"
          value={name}
          onChange={handleOnChange}
        />
        <input
          name="room_code"
          type="number"
          required="True"
          className="input"
          min="100"
          max="999"
          value={room_code}
          onChange={handleOnChange}
        />
        <button type="submit" className="btn">
          Start
        </button>
      </form>
    </div>
  );
};

export default Login;
