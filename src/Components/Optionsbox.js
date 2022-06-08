import React from "react";
import rockImage from "./Assets/rock.png";
import paperImage from "./Assets/paper.png";
import scissorImage from "./Assets/scissor.png";

const Optionsbox = (props) => {
  return (
    <div className="choices W100">
      <img
        src={rockImage}
        alt="Option Rock"
        className="choice-image"
        onClick={() => props.onClickFunction(0)}
      />
      <img
        src={paperImage}
        alt="Option Paper"
        className="choice-image"
        onClick={() => props.onClickFunction(1)}
      />
      <img
        src={scissorImage}
        alt="Option Scissor"
        className="choice-image"
        onClick={() => props.onClickFunction(2)}
      />
    </div>
  );
};

export default Optionsbox;
