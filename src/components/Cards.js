import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import CardVideoItem from "./CardVideoItem";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <h1> Those are my portfolio</h1>
        <div className="cards__wrapper">
          <div>
            <h3 style={{ marginLeft: "20px" }}>MOBILE</h3>
            <hr
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                height: 0.5,
                borderColor: "#000000",
                margin: 20,
                marginTop: 5,
              }}
            />
          </div>
          <ul className="cards__items">
            <CardVideoItem
              videoURL="https://youtu.be/XaytC8AXymM"
              text="An online order app(React native) that can be used for 
              placing orders, checking statements and payments, 
              add items to my personal account, and customize the items."
            />
            <CardVideoItem
              videoURL="https://youtu.be/IG9bsLMmQ_Q"
              text="An sharing app(IOS) which allow users to share 
               a nicely edited post with others, follow other users, 
               search other users, and check other user's activity"
            />
            <CardVideoItem
              videoURL="https://youtu.be/Ax2H6Iy0gak"
              text="An emotion game app(Android) which is used to 
              record user's emotion under different models, 
              play special videos, and store users data for analyzing."
            />
          </ul>
          <div>
            <h3 style={{ marginLeft: "20px" }}>Web</h3>
            <hr
              style={{
                color: "#000000",
                backgroundColor: "#000000",
                height: 0.5,
                borderColor: "#000000",
                margin: 20,
                marginTop: 5,
              }}
            />
          </div>

          <ul className="cards__items">
            <CardItem
              src="images/product-landing.png"
              text="A product landing page which display key component of a product"
              path="https://codepen.io/qtang2/full/rNeoYZx"
            />
            <CardItem
              src="images/tribute.png"
              text="This tribute page introduces Winnie the Pooh"
              path="https://codepen.io/qtang2/full/rRYdXW"
            />
            <CardItem
              src="images/technical-documentation.png"
              text="A Technical Documentation web page about JS"
              path="https://codepen.io/qtang2/full/zYqyLVo"
            />
            <CardItem
              src="images/survey-form.png"
              text="This is a survey web page which collects people's opinions"
              path="https://codepen.io/qtang2/full/rNeoYZx"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
