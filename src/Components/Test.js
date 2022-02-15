import React, { useContext, useEffect } from "react";
import GameContext from "../Context/Game/GameContext";

const Test = () => {
  const { Alert, setAlert } = useContext(GameContext);

  const showALert = () => {
    // show alert
    if (Alert.type === "") {
      setAlert({ type: "New Alert", msg: "Message" });
    }
  };

  const hideALert = () => {
    // hide alert after 3s
    setTimeout(() => {
      setAlert({ type: "", msg: "" });
    }, 3000);
  };

  useEffect(() => {
    if (Alert.type !== "") {
      hideALert();
    }
  }, [Alert]);

  return (
    <div className="W100">
      <button
        className="btn"
        onClick={() => {
          showALert();
        }}
      >
        Click
      </button>
    </div>
  );
};

export default Test;
