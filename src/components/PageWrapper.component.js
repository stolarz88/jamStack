import React from "react";
import Header from "../components/Header.component.js";

const PageWrapper = (props) => {
  return (
    <>
      <Header />
      <div className="App-content">
        <a
          href="https://www.linkedin.com/in/stolarz88/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
    </>
  );
};

export default PageWrapper;
