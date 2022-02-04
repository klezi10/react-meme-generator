import React from 'react';

export default function Header() {
  return (
    <div className="Header">
      <div className="title">
        <img
          src="../Images/troll-face.png"
          alt="troll face"
          className="troll-img"
        />
        <h2>Meme Generator</h2>
      </div>
      <div className="project-text">
        <p>React Course - Project 3</p>
      </div>
    </div>
  );
}
