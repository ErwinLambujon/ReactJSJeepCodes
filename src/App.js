import React, { useState } from "react";
import { checkInput, findCommonPlaces } from "./CommonPlaces";
import { assignColors } from "./ColorAssignment";
import { formatOutput } from "./OutputDisplay";
import "./App.css";

const routes = {
  "01A": ["Alpha", "Bravo", "Charlie", "Echo", "Golf"],
  "02B": ["Alpha", "Delta", "Echo", "Foxtrot", "Golf"],
  "03C": ["Charlie", "Delta", "Foxtrot", "Hotel", "India"],
  "04A": ["Charlie", "Delta", "Echo", "Foxtrot", "Golf"],
  "04D": ["Charlie", "Echo", "Foxtrot", "Golf", "India"],
  "06B": ["Delta", "Hotel", "Juliet", "Kilo", "Lima"],
  "06D": ["Delta", "Foxtrot", "Golf", "India", "Kilo"],
  "10C": ["Foxtrot", "Golf", "Hotel", "India", "Juliet"],
  "10H": ["Foxtrot", "Hotel", "Juliet", "Lima", "November"],
  "11A": ["Foxtrot", "Golf", "Kilo", "Mike", "November"],
  "11B": ["Foxtrot", "Golf", "Lima", "Oscar", "Papa"],
  "20A": ["India", "Juliet", "November", "Papa", "Romeo"],
  "20C": ["India", "Kilo", "Lima", "Mike", "Romeo"],
  "42C": ["Juliet", "Kilo", "Lima", "Mike", "Oscar"],
  "42D": ["Juliet", "November", "Oscar", "Quebec", "Romeo"],
};

const JeepRoute = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (checkInput(inputValue)) {
      const codes = inputValue.split(",");
      const commonPlaces = findCommonPlaces(codes, routes);
      const colors = assignColors(commonPlaces);
      const result = formatOutput(codes, routes, commonPlaces, colors);
      setOutput(result);
    } else {
      setOutput("Invalid input format.");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="jeepCodes">
          Enter Jeep Code(s) separated by comma:{" "}
        </label>
        <input
          type="text"
          id="jeepCodes"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div dangerouslySetInnerHTML={{ __html: output }}></div>
    </div>
  );
};

export default JeepRoute;
