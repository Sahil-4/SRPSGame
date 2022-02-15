import React, { useContext, useEffect } from "react";
import GameContext from "../Context/Game/GameContext";

const Alert = () => {
  const { Alert, setAlert } = useContext(GameContext);

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
    <div className="alert-box W100">
      <p id="alert-type">{Alert.type}</p>
      <p id="alert-msg">{Alert.msg}</p>
      {Alert.msg && (
        <div className="progress-bar W100">
          <div id="progress"></div>
        </div>
      )}
    </div>
  );
};

export default Alert;
