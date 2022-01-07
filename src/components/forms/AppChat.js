import React, { useRef, useState } from "react";
import "../../assets/styles/appChat.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import NavbarPaginas from "../NavbarPaginas";
import { useContext } from "react";

import { AuthContext } from "../../contexts/authContext";

firebase.initializeApp({
  apiKey: "AIzaSyC53r7q03D-Tp7c32cx5WtfZgg36MG0SV4",
  authDomain: "chat-268e8.firebaseapp.com",
  databaseURL: "https//chat-268e8.firebaseio.com",
  projectId: "chat-268e8",
  storageBucket: "chat-268e8.appspot.com",
  messagingSenderId: "452297139536",
  appId: "1:452297139536:web:54d20d47a737e34f81f855",
  measurementId: "G-5L5N4ZWJ6D",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function AppChat() {
  const [_id] = useAuthState(auth);

  return (
    <>
      <NavbarPaginas />
      <div>
        <div className="AppChat">
          <header>
            <h1>Chat</h1>
          </header>

          <section>{_id ? <ChatRoom /> : null}</section>
        </div>
      </div>
    </>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { _id: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form className="formulario" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  );
}

export default AppChat;
