import React from 'react';

const users = {
    "John Doe": "JD",
    "Jane Smith": "JS",
    "Bob Johnson": "BJ"
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

const messages = [
    { user: "John Doe", text: "What is the status of the RFP?" },
    { user: "Jane Smith", text: "I need more information on the new insurance policies." },
    { user: "Bob Johnson", text: "I'll provide the details by EOD." },
    { user: "John Doe", text: "Please make sure to highlight the key points." },
    { user: "Jane Smith", text: "Will do!" }
];

const MessagingComponent = () => {
    return (
        <div className="chat-container-wrapper">
            <div className="chat-container">
                <div className="chat-container-inner">
                    <div className="cci-log scrollbar-thin" style={{ maxHeight: '400px' }}>
                        {messages.map((msg, index) => (
                            <div key={index} className="message">
                                <div className="user-bubble" style={{ backgroundColor: hashStringToColor(msg.user) }}>
                                    {users[msg.user]}
                                </div>
                                <div className="message-text">
                                    <strong>{msg.user}:</strong> {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cci-input">
                        <div className="ccii-wrapper">
                            <div className="editable-text">
                                <div className="editable-text-input" contentEditable="true" placeholder="Enter your message"></div>
                            </div>
                            <div className="editable-text-button"></div>
                        </div>
                        <div className="ccii-action"><button className="send24" disabled=""></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagingComponent;
