import React, { useEffect, useState } from "react";

function ToDo() {
  const [todo, setTodo] = useState("");

  //Initial State
  const [todos, setTodos] = useState(() => {
    //Save data Local Storage
    const saveData = localStorage.getItem("todos");

    //check
    if (saveData && saveData !== "Undefined") {
      try {
        return JSON.parse(saveData);
      } catch (e) {
        console.error("Error Passing SAveData", e);
        return [];
      }
    }
    return [];
  });

  // Save todo local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Handle
  const handleAdd = (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      alert("Please Add a new Task");
      return;
    }

    //create new todo;
    const newTodo = { id: Date.now(), text: todo };

    //*update state

    setTodos([...todos, newTodo]);

    //clear
    setTodo("");
  };

  //handel Delete;
  const handleDelete = (id) => {
    console.log(`Delete task with id: ${id}`);

    //filter todo match id
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>My To Do App!</h1>
      <form
        onSubmit={handleAdd}
        style={{
          margin: "10px",
          padding: "8px",
          width: "60%",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button
          style={{
            padding: "8px 12px",
            marginLeft: "5px",
            marginTop: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </form>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "1.5rem" }}>
        {todos.map((t) => {
          return (
            <li
              style={{
                background: "white",
                padding: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              key={t.id}
              onClick={() => handleDelete(t.id)}
            >
              {t.text}
              <span style={{ color: "#d9534f", fontWeight: "bold" }}>
                Delete
              </span>
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
}

export default ToDo;
