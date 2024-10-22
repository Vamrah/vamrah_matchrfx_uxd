import React, { useState } from 'react';

const users = {
    "JD": "John Doe",
    "JS": "Jane Smith",
    "BJ": "Bob Johnson",
    "AP": "Alison Parker"
};

const hashStringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Generating darker colors for better contrast with white text
    const color = `hsla(${hash % 360}, 50%, 30%, 0.5)`;
    return color;
};

const Messages = ({ messages, onAddMessage }) => {
     const [newMessage, setNewMessage] = useState('');
    
     const handleSendMessage = () => {
      const message = {
       user: 'JD', // Example user, you might want to use a dynamic user
       text: newMessage,
       timestamp: new Date().toISOString()
      };
      console.log('Sending message:', message);
      onAddMessage(message);
      setNewMessage('');
     };
    
     console.log('Messages received:', messages);
    
     return (
      <div className="chat-container-wrapper">
       <div className="chat-container">
        <div className="chat-container-inner">
         <div className="cci-log scrollbar-thin" style={{ maxHeight: '400px' }}>
          {messages.length > 0 ? (
           messages.map((msg, index) => (
            <div key={index} className="message">
             <div className="user-bubble" style={{ backgroundColor: hashStringToColor(msg.user) }}>
              {msg.user}
             </div>
             <div className="message-text">
              <strong>{users[msg.user]}:</strong> {msg.text}
             </div>
             <div className="timestamp">{new Date(msg.timestamp).toLocaleString()}</div>
            </div>
           ))
          ) : (
           <div className="no-messages">No messages yet</div>
          )}
         </div>
         <div className="cci-input">
          <div className="ccii-wrapper">
           <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Enter your message"
           />
          </div>
          <div className="ccii-action">
           <button onClick={handleSendMessage} disabled={!newMessage.trim()}>Send</button>
          </div>
         </div>
        </div>
       </div>
      </div>
     );
    };
    

export default Messages;
