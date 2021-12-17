import React from "react";
import "../assets/styles/home.css";
import Navbar from "../components/Navbar";
import LoginVitma from "./auth/LoginVitma";
import LoginFamily from "./auth/LoginFamily";
import PostList from "./Posts/PostList";

function Home() {
  return (
    <>
      <Navbar />

      <div className="homedivs">
        <div>
          <LoginVitma />

          <LoginFamily />
        </div>
        <PostList />
      </div>
    </>
  );
}

export default Home;
