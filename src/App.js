import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <img
          title="Logo for Matthew Stolarz"
          alt="Logo for Matthew Stolarz"
          src="logo.png"
        />
        <div className="App__header--intro">
          <h1>Matthew Stolarz</h1>
          <h2>
            <span role="img" aria-label="tiger-face">
              &#129409;
            </span>{" "}
            User Experience/Frontend Engineer!
          </h2>
        </div>
      </header>
      <div className="App-content">
        <a href="https://www.linkedin.com/in/stolarz88/" target="_blank">
          <button class="cybr-btn">
            LinkedIn<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch">
              LinkedIn_
            </span>
            <span aria-hidden class="cybr-btn__tag">
              S88
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
