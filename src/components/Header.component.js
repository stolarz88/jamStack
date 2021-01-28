import React from "react";
import Glitchify from "../components/Glitchify.component";

const Header = (props) => {
  return (
    <header className="App__header">
      <img
        title="Logo for Matthew Stolarz"
        alt="Logo for Matthew Stolarz"
        src="logo.png"
      />
      <div className="App__header--intro">
        <Glitchify font="Cyber" fontSize="2rem">
          Matthew Stolarz
        </Glitchify>

        <h2>User Experience/Frontend Engineer!</h2>
      </div>
    </header>
  );
};

export default Header;
