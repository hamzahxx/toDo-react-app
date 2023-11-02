import "./App.css";
import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState('')
  const handleSubmit = () => {
    if (inputValue === "Type something to update here") {
      return console.error("Value toh add kar bhai");
    }
    setTodoArr((preValue) => [...preValue, inputValue]);
    document.getElementById("task-input").value = ""
    setTodoList(todoArr.map((task) => <h1>{task}</h1>))
  };

  const [todoArr, setTodoArr] = useState([]);
  const [inputValue, setInputValue] = useState("Type something to update here");
  if (inputValue === "") {
    setInputValue("Type something to update here")
  }
  return (
    <div>
      <h1>Basic Setup</h1>
      <div>
        <input id="task-input" onChange={(e) => setInputValue(e.target.value)} />
        <h4 onClick={handleSubmit}>Button</h4>
        <h4 onClick={() => console.log(todoArr)}>Show</h4>
        <h4 onClick={() => setTodoArr("")}>Clear</h4>
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
