import React from 'react';

export default function Meme() {
  return (
    <div className="Meme">
      <div className="form">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <button className="btn">Get a new meme image 🖼️</button>
      </div>
    </div>
  );
}
