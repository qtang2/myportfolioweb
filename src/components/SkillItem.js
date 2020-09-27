import React from "react";
import ProgressBar from "./ProgressBar";
import "./SkillItem.css";

function SkillItem(props) {
  return (
    <>
      <div class="skill-item">
        <div className="skill-name">
          <label>{props.skillName}</label>
        </div>
        <ProgressBar dataDone={props.dataDone} width={props.width} />
      </div>
    </>
  );
}

export default SkillItem;
