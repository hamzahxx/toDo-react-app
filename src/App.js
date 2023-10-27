import "./App.css";
import React, { useState } from "react";

function App() {
  const handleSubmit = () => {
    if (inputValue === "Type something to update here") {
      return console.error("Value change kar bhai");
    }
    setTodoList((preValue) => [...preValue, inputValue]);
  };
  const [todoList, setTodoList] = useState("");
  const [inputValue, setInputValue] = useState("Type something to update here");
  return (
    <div>
      <h1>Basic Setup</h1>
      <div>
        <input onChange={(e) => setInputValue(e.target.value)} />
        <h4 onClick={handleSubmit}>Button</h4>
        <h4 onClick={() => console.log(todoList)}>Show</h4>
        <h4 onClick={() => setTodoList("")}>Clear</h4>
      </div>
      <div>
        {inputValue}
        <hr />
        {todoList}
      </div>
    </div>
  );
}

export default App;
