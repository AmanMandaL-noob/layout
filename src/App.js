/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from 'styled-components';
import image from "./image/image.jpg"
import "./App.css";

import Star from "./Star";

function App() {
  return (
    <div>
    <h1 className="head">
      Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More
    </h1>
    <div className="inner">
     
    </div>
    <p className="multi"> Multi-Day Course</p>
    <img src={image} align="right" className="logo"/>
    <p className="para">In this 5 day we will explore artists Monet, Matisse, Van Gogh, among others and then recreate painting using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</p>
    <p className="Kim"> Kimberly R Moseler</p>
      
    <Star />
      <p>467 total reviews for this teacher</p>
    
    <Star/>
      <p >5 reviews for this class</p>
      <p>Completed by 21 learners</p>
    <Button>See Class Schedule</Button>
    </div>

  );
}
const Button = styled.button`
  background-color: #601FFB;
  color: white;
  font-size: 20px;
  padding: 10px 40px;
  border-radius: 10rem;
  margin: 10px 0px;
`;

export default App;
