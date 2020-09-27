import React from "react";
import "./ResumeCards.css";

function ResumeCardItem(props) {
  return (
    <>
      <li className="resume-cards-item">
        <div className="r-title">
          <label>{props.part}</label>
        </div>
        <div className="edu-info">
          <div className="school-info">
            <div className="study-info">
              <label className="school-name">{props.schoolName}</label>
              <label className="major">{props.major}</label>
            </div>
            <div className="img-container">
              <img src={props.src} className="school-img" alt="" />
            </div>
          </div>

          <div className="subjects-info">
            <label>{props.content} </label>
            {props.subjects.map(function (sub) {
              return <li key={sub}>{sub}</li>;
            })}
          </div>
        </div>
      </li>
    </>
  );
}

export default ResumeCardItem;
