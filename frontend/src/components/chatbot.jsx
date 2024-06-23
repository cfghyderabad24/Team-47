import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('/api/chatbot', {
        message: input.trim(),
        history: messages,
      });
      const botMessage = { role: 'bot', content: response.data.text };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      const errorMessage = { role: 'bot', content: 'Oops! Something went wrong. Please try again.' };
      setMessages([...messages, userMessage, errorMessage]);
    }
  };

  return (
    <div className="chatbot">
      <header>
        <h2>Chatbot</h2>
        <button onClick={() => document.body.classList.remove('show-chatbot')}>Close</button>
      </header>
      <ul className="chatbox">
        {messages.map((msg, index) => (
          <li key={index} className={msg.role === 'user' ? 'outgoing' : 'incoming'}>
            {msg.role === 'bot' && <span>🤖</span>}
            <p>{msg.content}</p>
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <textarea
          placeholder="Enter a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        ></textarea>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
