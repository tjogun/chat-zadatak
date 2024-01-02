import { useState } from "react";
import Message from "../Message/Message";
import "./Chat.scss";

function Chat() {
  const [inpMessage, setInpMessage] = useState("");
  const [messages, setMessages] = useState([]);
  //   const [botMessage, setBotMessage] = useState("");
  //   const [botMessages, setBotMessages] = useState([]);

  function sendMessage() {
    // let replyMessage = Math.round(Math.random());
    if (!inpMessage) return;
    setMessages([...messages, inpMessage]);
    // botReply();
  }

  function setMessage(e) {
    setInpMessage(e.target.value);
  }

  return (
    <div>
      <div>
        {messages.length === 0 ? (
          <p>No messages.</p>
        ) : (
          messages.map((m) => <Message content={m} classname="sent" />)
        )}
      </div>
      <input
        type="text"
        onChange={(e) => {
          setMessage(e);
        }}
      ></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
