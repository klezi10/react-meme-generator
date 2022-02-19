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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="Meme">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleChange}
          name="topText"
        />

        <input
          type="text"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleChange}
          name="bottomText"
        />
        <button className="btn" onClick={getMemeImg}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme-section">
        <img src={meme.randomImage} alt="random meme" className="memeImg" />
        <h2 className="meme-text top-text">{meme.topText}</h2>
        <h2 className="meme-text bottom-text">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
