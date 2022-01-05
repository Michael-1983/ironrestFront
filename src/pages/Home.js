import React from "react";
import "../assets/styles/home.css";
import Navbar from "../components/Navbar";
import LoginVitma from "./auth/LoginVitma";
import LoginFamily from "./auth/LoginFamily";
import PostList from "./Posts/PostList";
import HomeChat from "../chat/HomeChat";

function Home() {
  return (
    <div className="backgroundHome">
      <Navbar />
      <div className="textos">
        <h1 className="title1">“A vida começa, quando a violência acaba!”</h1>
        <h3 className="title2">(Maria da Penha)</h3>

        <h2 className="title3">
          Veja abaixo relatos anônimos de mulheres que foram ou ainda são
          vítimas de violência doméstica! <p> </p>Não se cale, a sua história
          pode salvar vidas!
        </h2>
      </div>
      <div className="homedivs">
        <div className="logins">
          <LoginVitma />

          <LoginFamily />
        </div>

        <PostList />
      </div>
      <HomeChat />
    </div>
  );
}

export default Home;
