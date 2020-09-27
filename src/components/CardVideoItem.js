import React from "react";
import ReactPlayer from "react-player";
import "./Cards.css";
// import videoURL from "../../videos/onlineorder-app.mp4";

export default function CardVideoItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="player-wrapper">
          <ReactPlayer
            url={props.videoURL}
            controls={true}
            width="400px"
            height="200px"
          />
        </div>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </li>
    </>
  );
}
