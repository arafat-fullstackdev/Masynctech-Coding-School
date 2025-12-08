import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState("");

  // Load todo from localStorage on first render

  //Save todos into localStorage
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem",
        textAlign: "center",
      }}
    >
      <h1>To Do App</h1>
      <form>
        <input
          style={{
            margin: "10px",
            padding: "5px",
            width: "70%",
          }}
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
          type="text"
        />
      </form>
    </div>
  );
}

export default Todo;
