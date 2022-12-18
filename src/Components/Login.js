import React from "react";

const Login = () => {
  return (
    <div className="center start login">
      <p>Login</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="username" id="uname" placeholder="Your Name" />
        <input
          type="number"
          name="roomcode"
          id="rcode"
          placeholder="Room Code"
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
};

export default Login;
