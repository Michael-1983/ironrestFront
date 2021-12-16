import React from "react";
import "../assets/styles/home.css";
import LoginVitma from "./auth/LoginVitma";
import LoginFamily from "./auth/LoginFamily";

function Home() {
  return (
    <>
     
       <LoginVitma /> 
 

      <LoginFamily />
    </>
  );
}

export default Home;
