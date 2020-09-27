import React from "react";
import "./SkillItem.css";

function ProgressBar(props) {
  return (
    <div className="progress">
      <div
        className="progress-done"
        data-done={props.dataDone}
        style={{ width: props.width }}
      >
        {props.dataDone}%
      </div>
    </div>
  );
}

export default ProgressBar;
