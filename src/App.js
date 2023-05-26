import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="chat-box">
              <div className="chat-messages">
                <div className="message">
                  <div className="message-sender">John Doe</div>
                  <div className="message-content">Hello, how are you?</div>
                </div>
                <div className="message">
                  <div className="message-sender">Jane Smith</div>
                  <div className="message-content">
                    I'm good, thanks! How about you?
                  </div>
                </div>
                {/* Additional messages */}
              </div>
              <div className="chat-input">
                <input type="text" placeholder="Type your message" />
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
