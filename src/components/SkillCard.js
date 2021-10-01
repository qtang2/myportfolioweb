import React from "react";
import SkillItem from "./SkillItem";

function SkillCard() {
  return (
    <>
      <li className="resume-cards-item">
        <div className="r-title">
          <label>SKILLS</label>
        </div>
        <SkillItem skillName="JavaScript" dataDone="80" width="80%" />
        <SkillItem skillName="HTML" dataDone="80" width="80%" />
        <SkillItem skillName="CSS" dataDone="80" width="800%" />
        <SkillItem skillName="Vue" dataDone="70" width="70%" />
        <SkillItem skillName="React" dataDone="60" width="60%" />
        <SkillItem skillName="Vuex" dataDone="70" width="70%" />
        <SkillItem skillName="Redux" dataDone="60" width="60%" />
        <SkillItem skillName="Java" dataDone="80" width="80%" />
        <SkillItem skillName="Python" dataDone="70" width="70%" />
        <SkillItem skillName="MySQL" dataDone="60" width="60%" />
      </li>
    </>
  );
}

export default SkillCard;
