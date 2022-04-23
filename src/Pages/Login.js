import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      <form method="POST">
        <input
          name="name"
          type="text"
          required="True"
          className="input"
          autoComplete="name"
        />
        <input
          name="room_code"
          type="number"
          required="True"
          className="input"
          autoComplete="room code"
          min="100"
          max="999"
        />
        <button type="submit" className="btn">
          Start
        </button>
      </form>
    </div>
  );
};

export default Login;
