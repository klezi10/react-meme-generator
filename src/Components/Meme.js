import React, { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
  const [memeImage, setMemeImage] = useState('');

  function getMemeImg() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const randomImg = memesArray[randomNumber].url;
    setMemeImage(randomImg);
  }

  return (
    <div className="Meme">
      <div className="form">
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
        <button className="btn" onClick={getMemeImg}>
          Get a new meme image 🖼️
        </button>
      </div>
      <img src={memeImage} alt="random meme" className="memeImg" />
    </div>
  );
}
