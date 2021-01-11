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
            <h3 style={{ textAlign: "center" }}>MOBILE</h3>
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
            <h3 style={{ textAlign: "center" }}>Web</h3>
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
              path="https://codepen.io/qtang2/full/JjXwPwd"
            />
          </ul>
          <div>
            <h3 style={{ textAlign: "center" }}>Web--React</h3>
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
            <ul className="cards__items">
            <CardItem
              src="images/random-quote-machine.png"
              text="A website that display a random quote in random colors "
              path="https://qiantangreactrandomquotemachine.netlify.app/"
            />

            <CardItem
              src="images/markdown-previewer.png"
              text="This is a editor previewer website where the pinputed text is rendered as HTML in the previewer window"
              path="https://qiantangreactmarkdownpreviewer.netlify.app/"
            />   

            <CardItem
              src="images/drum-machine.png"
              text="This is a drum machine website where you can click button to hit the clip or press related key to play the clip"
              path="https://qiantangreactdrummachine.netlify.app/"
            />   
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/calculator.png"
              text="An immediate execution calculator website that allow users to have fun"
              path="https://qiantangreactrandomquotemachine.netlify.app/"
            />

            <CardItem
              src="images/clock.png"
              text="This is pomodoro clock website where users can start timing"
              path="https://qiantangreactpomodoroclock.netlify.app/"
            />   

            
          </ul>
          </div>

          <div>
            <h3 style={{ textAlign: "center" }}>Data Visualization--D3.js</h3>
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
            <ul className="cards__items">
            <CardItem
              src="images/bar-chart.png"
              text="A bar chart built by D3.js which shows the USA GDP from 1947-2015  "
              path="https://codepen.io/qtang2/full/gOMmWxL"
            />

            <CardItem
              src="images/scatterplot-graph.png"
              text="A scatterplot graph built by D3.js which shows the data about doping in Professional Bicycle Racing USA GDP from 1947-2015"
              path="https://codepen.io/qtang2/full/rNLmjYN"
            />   

            <CardItem
              src="images/heat-map.png"
              text="A heat map built with D3.js which gives information about monthly global Land-Surface temperature"
              path="https://codepen.io/qtang2/full/MWeOYOx"
            />   
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/choropleth-map.png"
              text="A choropleth map built with D3.js which shows the prcentage of adults age 25 and older with a bachelor's degree or higher (2010-2014) in USA"
              path="https://codepen.io/qtang2/full/MWeXYyy"
            />

            <CardItem
              src="images/treemap-diagram.png"
              text="A treemap built with D3.js which shows the Highest crossiong movies"
              path="https://codepen.io/qtang2/full/LYZrpNN"
            />   
          </ul>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Cards;
