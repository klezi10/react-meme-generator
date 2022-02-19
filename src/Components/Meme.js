import React, { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImg() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <div className="meme-section">
        <img src={meme.randomImage} alt="random meme" className="memeImg" />
        <h2 className="meme-text top-text">One does not simply</h2>
        <h2 className="meme-text bottom-text">Walk into mordor</h2>
      </div>
    </div>
  );
}
