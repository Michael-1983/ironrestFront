import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/home.chat.css";
import { AuthContext } from "../../src/contexts/authContext";
import { useContext } from "react";

function Home(props) {
  const { loggedInUser } = useContext(AuthContext);
  return (
    <div>
      {loggedInUser.user._id ? (
        <Link to={`/chat-room`} className="buttonChat">
          Bate Papo
        </Link>
      ) : null}
    </div>
  );
}

export default Home;
