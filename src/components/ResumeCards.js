import React, { Component } from "react";

import ResumeCardItem from "./ResumeCardItem";
import SkillCard from "./SkillCard";

class ResumeCards extends Component {
  render() {
    return (
      <div>
        <h1 id="resume_start"> </h1>
        <ul>
          <ResumeCardItem
            part="EDUCATION"
            src="images/melbourne-uni-logo.jpg"
            schoolName="The University of Melbourne"
            major="Master of IT(Computing)  2017-2019"
            content="Related Subjects"
            subjects={[
              "Programming and Software Development",
              "Database System & Information Modelling",
              "Mobile Computing Systems Programming",
              "Distributed Systems",
              "Declarative Programming",
            ]}
          />
          <ResumeCardItem
            src="images/BIT-logo.jpg"
            schoolName="Beijing Institute of Technology"
            major="Bachelor of Management Information System  2012-2016"
            content="Related Subjects"
            subjects={[
              "Object-Oriented Technology",
              "Computer Network & Application",
              "Database System Application",
              "C Language Programming",
              "Operating System",
            ]}
          />
          <ResumeCardItem
            part="EXPERIENCE"
            src="images/ecot-logo.png"
            schoolName=" Online Order App(React Native) "
            major="An internship at ECOT as Programmer Assistant "
            content="Major responsibility"
            subjects={[
              "Define the basic requirements by analyzing the web-application. ",
              "Implement all of the user interfaces(from web-based to mobile-based)",
              "Implement basic functions: login and register, order placement, product list display, customize product information, add new payment or statement ",
              "Design and implement a could non-relational database by using Firebase",
              "Connect API during the testing stage",
            ]}
          />
          <ResumeCardItem
            src="images/freeCodeCamp-logo.png"
            schoolName=" Website Projects "
            major="Responsive Web Projects "
            content="Major projects"
            subjects={[
              "Different web pages patterns, including a product landing page which display key component of a product, a tribute page introduces Winnie the Pooh, a Technical Documentation web page about JS, and a survey web page which collects people's opinions",
              "A random quote machine website which can display random quote fetched from Internet and user can click the button to update the quote and the UI",
              "A markdown previewer website that can render user’s inputted text in the editor window as HTML and display it in the preview window",
              "A drum machine website where user can play different clips by click relative button or press relative keyboard",
              "A calculator website which allow users to calculate, and I designed it as a immediate execution calculator",
              "A pomodoro clock website where user can do timing within 60 minutes" 
            ]}
          />
          <ResumeCardItem
            src="images/freeCodeCamp-logo.png"
            schoolName="Full stack Web Projects"
            major="Express+Node.js+MongoDB+Mongoose"
            content="Major projects"
            subjects={[
              "Issue Tracker: This project allows a user to create a new issue by specifying mandatory/optional information. And a user can see all issues of a project, update an issue, or delete an issue",
              "Personal Library: It allows a user to add a book as well as add comments to a book. A user can also read all comments of a book and delete a book/books",
              "American/British Translator: This translator can translate American English to British English or vice versa, including time, special language usage",
              "Sudoku Solver: This solver allows a user to input a sudoku string, where '.' stands for the empty grid, and give a solution to the puzzle",
              "Metric/Imperial Converter: This Metric/Imperial Converter allows a user to convert between Metric and Imperial unit"
            ]}
          />
          <ResumeCardItem
            src="images/android-logo.jpg"
            schoolName=" Game of Emotion App(Android) "
            major="Graduation Project "
            content="Major responsibility"
            subjects={[
              "Design and implement login, register pages.",
              "Implement two emotional model pages, including all figure posture functions and data extraction ",
              "Implement vedio play page and the function",
              "Using MySQL to design and implement database,including design database structure, data type and database service.",
            ]}
          />
          <ResumeCardItem
            src="images/ios-logo.jpg"
            schoolName=" Photo Sharing App(IOS) "
            major="School Project "
            content="Major responsibility"
            subjects={[
              "Implement the basic login, log out and register function",
              "Design and implement a non-relational database with other team members",
              "Implement server side services, like authentication, data recieve and send",
            ]}
          />
          
          <SkillCard />
        </ul>
      </div>
    );
  }
}

export default ResumeCards;
