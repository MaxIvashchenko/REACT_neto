import React from 'react';
import './App.css';
import Stars from './components/films/Stars'
import Listing from './components/listing/Listing';
import MessageHistory from './components/chat/MessageHistory';
import './components/chat/main.css'
import { messages } from './components/chat/data'



function App() {
  return (
    <>
      <div className="clearfix container">
        <div className="chat">
          <div className="chat-history">
            <MessageHistory messages={messages} />
          </div>
        </div>
      </div>
      <hr />
      <Stars count={2} />
      <hr />
      <Listing />
    </>
  );
}

export default App;
