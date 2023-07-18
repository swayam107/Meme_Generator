import React from "react";
import memesData from "./memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("Hello")



  let url;
  function getMemeImage() {
    console.log("Clicked");
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length); // helps in getting random index of the memesArray
    const url = memesArray[randomNumber].url;
    console.log(url);
    return url;
  }

  return (
    <div className="meme">
      <input type="text" id="top" placeholder="Top Text"></input>
      <input type="text" id="bottom" placeholder="Bottom Text"></input>
      <button onClick={getMemeImage}>Get a new Meme Image</button>
      <div id="meme-img">
        <img src={getMemeImage}></img>
      </div>
    </div>
  );
}

