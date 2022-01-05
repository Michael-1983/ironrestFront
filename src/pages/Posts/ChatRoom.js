import React from "react";
import useChat from "../../chat/useChat";
import "../../assets/styles/chat.css";
import NavbarPaginas from "../../components/NavbarPaginas";

function ChatRoom(props) {
  const { roomId } = { props }; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = React.useState(""); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="backgroundChat">
      <NavbarPaginas />
      <h1 className="room-name">Room: {roomId}</h1>

      <ol className="messages">
        {messages.map((message, i) => (
          <li
            key={i}
            className={`message-item ${
              message.ownedByCurrentUser ? "my-message" : "received-message"
            }`}
          >
            {message.body}
          </li>
        ))}
      </ol>

      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
}

export default ChatRoom;
