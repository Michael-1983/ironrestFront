import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../assets/styles/home.css";
import Navbar from "../components/Navbar";
import Login from "./auth/Login";
import LoginFamily from "./auth/LoginFamily";

function Home() {
  return (
    <>
      <Navbar />

      <Login />

      <LoginFamily />
    </>
  );
}

export default Home;
