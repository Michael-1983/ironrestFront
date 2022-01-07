import React, { useRef, useState } from "react";
import "../../assets/styles/appChat.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import NavbarPaginas from "../NavbarPaginas";

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
  const [userData] = useAuthState(auth);

  return (
    <>
      <NavbarPaginas />
      <div>
        <div className="AppChat">
          <header>
            <h1>⚛️🔥💬</h1>
            <SignOut />
          </header>

          <section>{userData ? <ChatRoom /> : <SignIn />}</section>
        </div>
      </div>
    </>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p className="messageP">
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
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
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          id="imageChat"
        />
        <p>{text}</p>
      </div>
    </>
  );
}

export default AppChat;
