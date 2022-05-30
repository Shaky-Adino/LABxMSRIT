import React from "react";
import Question from "../components/Question/Question";
import Prerequisite from "../components/Prerequisite/Prerequisite";
import Objectives from "../components/Objectives/Objectives";
import InputOutput from "../components/InputOutput/InputOutput";
import Anime from "../anime";

function SecondPage(){
    return (
        <>
          <Question 
          id="1" 
          question="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <Prerequisite />
        <Objectives />
        <Anime />
        <InputOutput />
        </>
    );
}

export default SecondPage;