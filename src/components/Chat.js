import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'other', text: 'Hello! How can I help you today?' }]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim() !== '') {
      const newMessages = [...messages, { sender: 'user', text: input }];
      setMessages(newMessages);
      setInput('');
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { sender: 'other', text: 'Thanks for your message!' }]);
      }, 500);
    }
  };

  return (
    <div className="chat-container">
      <button className="chat-button" onClick={toggleChat}>
        💬
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat</h3>
            <button onClick={toggleChat} className="close-chat">✖</button>
          </div>
          <div className="chat-body">
            {messages.map((message, index) => (
              <p key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                {message.text}
              </p>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
