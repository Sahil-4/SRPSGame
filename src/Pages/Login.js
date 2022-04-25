import React from "react";

const Login = () => {
  return (
    <div className="login-page H100 W100">
      <form className="login-form center" method="POST">
        <input name="name" type="text" required="True" className="input" autoComplete="name" placeholder="Name" />
        <input name="room_code" type="number" required="True" className="input" autoComplete="room code" min="100" max="999" placeholder="Unique Code" />
        <button type="submit" className="btn">
          Start
        </button>
      </form>
    </div>
  );
};

export default Login;
