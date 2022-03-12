import React, { useState, useEffect } from 'react';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => {
        console.log(data.data.memes)
        setAllMemeImages(data.data.memes)
      })
  }, [])

  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url;
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
