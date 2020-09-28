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
        <SkillItem skillName="HTML" dataDone="75" width="75%" />
        <SkillItem skillName="CSS" dataDone="60" width="60%" />
        <SkillItem skillName="Java" dataDone="80" width="80%" />
        <SkillItem skillName="Python" dataDone="70" width="70%" />
        <SkillItem skillName="MySQL" dataDone="60" width="60%" />
      </li>
    </>
  );
}

export default SkillCard;
