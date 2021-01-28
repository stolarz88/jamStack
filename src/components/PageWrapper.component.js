import React, { useEffect } from "react";
import Header from "../components/Header.component.js";
import Cursor from "../components/Cursor.component";
import Glitchify from "../components/Glitchify.component";
import gsap from "gsap";

const PageWrapper = (props) => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");

    const onMouseMove = (e) => {
      gsap.to(cursor, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    };
    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <Header />
      <Cursor />
      <div className="App-content">
        <div className="App__content--intro">
          <Glitchify font="Cyber" fontSize="2rem">
            Matthew Stolarz
          </Glitchify>

          <h2>User Experience/Frontend Engineer!</h2>
          <img src="/cyberpunk.jpg" />
        </div>
        <a
          href="https://www.linkedin.com/in/stolarz88/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cybr-btn">
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
