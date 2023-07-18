import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import memesData from "./components/memesData";

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}

export default App;
