import React,{useState} from "react";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from './config.js';
import MessageParser from './MessageParser.js';
import ActionProvider from './ActionProvider.js';
import NameForm from './NameForm.js';
// import "./App.css";

function App() {
  
  return (
    <div className="App">
      
      
    <div style={{ width:"340px",backgroundColor: "pink",padding:"1rem",borderRadius: "0.3rem" }}>
      {/* <p>{count}</p> */}
      <Chatbot config={config}  messageParser={MessageParser}
        actionProvider={ActionProvider}   headerText='Chatbot'
        placeholderText='Write your message'
        disableScrollToBottom/>
        
    </div>
    </div>
  );
}

export default App;