import React from "react";
import rockImage from "./Assets/rock.png";
import paperImage from "./Assets/paper.png";
import scissorImage from "./Assets/scissor.png";

const Optionsbox = (props) => {
  return (
    <div className="options W100">
      <img
        src={rockImage}
        title="rock"
        alt="Option Rock"
        onClick={() => {
          console.log(1);
        }}
      />
      <img
        src={paperImage}
        title="paper"
        alt="Option Paper"
        onClick={() => {
          console.log(2);
        }}
      />
      <img
        src={scissorImage}
        title="scissor"
        alt="Option Scissor"
        onClick={() => {
          console.log(3);
        }}
      />
    </div>
  );
};

export default Optionsbox;
