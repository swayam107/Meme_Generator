import React from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import memesData from "./components/memesData";

function App() {
  // const [count, setCount] = React.useState(0)
  // function handleCLickUp() {
  //   setCount(prevCount => prevCount+1)
  //   console.log(`count is ${count}`);
  // }
  // function handleClickDown() {
  //   setCount(prevCount => prevCount-1)
  //   console.log(`count is ${count}`);
  // }

  return (
    <div className="App">
      <Header />
      <Input />

      {/* <button onClick={handleClickDown}>Dec</button>
      <h1>{count}</h1>
      <button onClick={handleCLickUp}>Inc</button> */}
    </div>
  );
}

export default App;
