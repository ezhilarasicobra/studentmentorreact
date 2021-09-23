import React from "react";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <h1>WELCOME TO STUDENT MENTOR APP</h1>
      <Link to="/student">GO TO STUDENT PAGE</Link>
      <br/>
      <Link to="/mentor">GO TO MENTOR PAGE</Link>
    </div>
  );
};

export default Welcome;
