import React, { useContext } from "react";
import GameContext from "../Context/Game/GameContext";

const Alert = () => {
  const { Alert } = useContext(GameContext);

  return (
    <div className="alert_box W100">
      <p id="alert_type">{Alert.type}</p>
      <p id="alert_msg">{Alert.msg}</p>
      {Alert.msg && (
        <div className="progress_bar W100">
          <div id="progress"></div>
        </div>
      )}
    </div>
  );
};

export default Alert;
