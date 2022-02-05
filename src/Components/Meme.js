import React from 'react';
import memesData from '../memesData';

export default function Meme() {
  function handleMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const randomImg = memesArray[randomNumber].url;
    console.log(randomImg);
  }

  return (
    <div className="Meme">
      <div className="form">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <button className="btn" onClick={handleMeme}>
          Get a new meme image 🖼️
        </button>
      </div>
    </div>
  );
}
