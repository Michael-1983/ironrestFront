import React from "react";
import "../assets/styles/home.css";
import LoginVitma from "./auth/LoginVitma";
import LoginFamily from "./auth/LoginFamily";
import PostList from "./Posts/PostList"


function Home() {
  return (
    <>
    <div>
      <PostList/>
      
      </div> 
       <LoginVitma /> 
 

      <LoginFamily />
    </>
  );
}

export default Home;
