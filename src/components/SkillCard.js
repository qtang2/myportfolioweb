import React from "react";
import SkillItem from "./SkillItem";

function SkillCard() {
  return (
    <>
      <li className="resume-cards-item">
        <div className="r-title">
          <label>SKILLS</label>
        </div>
        <SkillItem skillName="React" dataDone="70" width="70%" />
        <SkillItem skillName="Java" dataDone="80" width="80%" />
        <SkillItem skillName="JQuery" dataDone="40" width="40%" />
        <SkillItem skillName="Node.js" dataDone="30" width="30%" />
      </li>
    </>
  );
}

export default SkillCard;
