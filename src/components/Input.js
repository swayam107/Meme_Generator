import React from "react";

export default function Input() {
  const [memeImage, setMemeImage] = React.useState("");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    // const allMemes = allMeme.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
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

  //   const [isGoingOut, setIsGoingOut] = React.useState(true);
  //   function changeMind() {
  //     setIsGoingOut((prevDecision) => !prevDecision);
  //   }

  //   const [thingsArray, setThingsArray] = React.useState(["Thing1", "Thing2"]);
  //   function addItem() {
  //     setThingsArray((prevThingsArray) => [
  //       ...prevThingsArray,
  //       `Thing${prevThingsArray.length + 1}`,
  //     ]);
  //   }
  //   const thingsElements = thingsArray.map((item) => <p key={item}>{item}</p>);

  return (
    <div className="input">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={getMemeImage}>
        Get a new image 🖼️
      </button>
      {/* <img src={meme.randomImage} /> */}

      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

      {/* <h2 onClick={changeMind}>{isGoingOut ? "Yes" : "No"}</h2> */}
      {/* <div className="add-item">
        <button onClick={addItem}>Add Item</button>
        {thingsElements}
      </div> */}
    </div>
  );
}
