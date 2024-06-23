import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    if (message.trim()) {
      setMessages([...messages, { sender: 'user', text: message }]);
      event.target.message.value = '';

      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'This is a bot response.' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container">
      <button
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg"
        onClick={toggleChatbot}
      >
        {isOpen ? 'Close Chat' : 'Chat with us'}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-4 bg-white border border-gray-300 rounded-lg shadow-lg w-80"
        >
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Chatbot</h3>
          </div>
          <div className="p-4 max-h-60 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded ${
                  msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
            <input
              type="text"
              name="message"
              placeholder="Type your message"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
