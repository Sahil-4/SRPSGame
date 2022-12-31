import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import GameContext from "../Context/Game/GameContext";

const Login = () => {
  const { profile, setProfile, setDefault } = useContext(GameContext);
  const Navigate = useNavigate();

  const handleOnchange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Navigate("/game/duo");
  };

  useEffect(() => {
    setDefault();
    return () => {};
  }, []);

  return (
    <div className="center start login">
      <p>Login</p>
      <form method="POST" onSubmit={(e) => handleLogin(e)}>
        <input
          type="text"
          name="name_self"
          placeholder="Your Name"
          required="True"
          onChange={(e) => handleOnchange(e)}
        />
        <input
          type="number"
          name="room_code"
          placeholder="Room Code"
          required="True"
          min={100}
          max={999}
          onChange={(e) => handleOnchange(e)}
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
