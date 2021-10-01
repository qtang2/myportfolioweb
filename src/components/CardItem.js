import React from "react";

import "./Cards.css";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item_link" href={props.path?props.path:"javascript:;"} target={props.path?'_blank':""} rel="noopener noreferrer">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
