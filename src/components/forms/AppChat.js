<<<<<<< HEAD
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import NavbarPaginas from "../NavbarPaginas";
import { useContext } from "react";

import { AuthContext } from "../../contexts/authContext";
=======
import React, { useRef, useState } from "react";
import "../../assets/styles/appChat.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import NavbarPaginas from "../NavbarPaginas";
>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445

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
<<<<<<< HEAD
const auth = firebase.auth();
const firestore = firebase.firestore();
function AppChat() {
  const [_id] = useAuthState(auth);
=======

const auth = firebase.auth();
const firestore = firebase.firestore();

function AppChat() {
  const [_id] = useAuthState(auth);

>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
  return (
    <>
      <NavbarPaginas />
      <div>
        <div className="AppChat">
          <header>
            <h1>Chat</h1>
          </header>
<<<<<<< HEAD
=======

>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
          <section>{_id ? <ChatRoom /> : null}</section>
        </div>
      </div>
    </>
  );
}
<<<<<<< HEAD
=======

>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
<<<<<<< HEAD
  const [messages] = useCollectionData(query, { _id: "id" });
  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;
=======

  const [messages] = useCollectionData(query, { _id: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    });
<<<<<<< HEAD
    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };
=======

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
<<<<<<< HEAD
        <span ref={dummy}></span>
      </main>
=======

        <span ref={dummy}></span>
      </main>

>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
      <form className="formulario" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />
<<<<<<< HEAD
=======

>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}
<<<<<<< HEAD
function ChatMessage(props) {
  const { text, uid } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
=======

function ChatMessage(props) {
  const { text, uid } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
  return (
    <>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>
  );
}
<<<<<<< HEAD
=======

>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
export default AppChat;
