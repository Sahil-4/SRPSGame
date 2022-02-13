import React from "react";

const Login = () => {
  const handleOnChange = (e) => {
    console.log("Under Development");
    // setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    //   logic to join room
    console.log("Under Development");
  };

  return (
    <div className="login-page">
      <form onSubmit={handleOnSubmit}>
        <input
          name="name"
          type="text"
          //   value={data.name}
          onChange={handleOnChange}
        />
        <input
          name="friend_name"
          type="text"
          //   value={data.friend_name}
          onChange={handleOnChange}
        />
        <input
          name="room_code"
          type="number"
          //   value={data.room_code}
          onChange={handleOnChange}
        />
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default Login;
