import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
