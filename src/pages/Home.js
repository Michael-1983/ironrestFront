import React from "react";
import "../assets/styles/home.css";
import Navbar from "../components/Navbar";
import LoginVitma from "./auth/LoginVitma";
import LoginFamily from "./auth/LoginFamily";



function Home() {
  return (
    <>
      <Navbar />

      <LoginVitma />
    
      <LoginFamily />
    </>
  );
}

export default Home;
