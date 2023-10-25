import "./App.css";

function handleAddition() {
  const Input = document.getElementById("todo-input");
  if(Input.value === "") {
    console.error("Value daal lund insaan");
    return;
  }
  const item = document.createElement("li");
  const button = document.createElement("button");
  button.innerHTML = Input.value;
  item.appendChild(button);
  document.getElementById("todo-list").appendChild(item);
}

function App() {
  return (
    <div className="min-h-screen bg-sky-200">
      <h1>Basic Setup</h1>
      <div>
        <input type="text" placeholder="Work to be done" id="todo-input" />
        <button onClick={handleAddition}>
          Add
        </button>
      </div>
      <div>
        <ul id="todo-list">
        </ul>
      </div>
    </div>
  );
}

export default App;
