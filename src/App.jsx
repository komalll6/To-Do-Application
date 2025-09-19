import { useState } from "react";

function App() {

  const [input, setInput] = useState("");
  const [todos, settodos] =useState([
  // {
  //   id:1,
  //   task:"Buy groceries",
  //   completed:false,
  // },
  // {
  //   id:2,
  //   task:"Walk the dog",
  //   completed:false,
  // },
  // {
  //   id:3,
  //   task:"Do laundry",
  //   completed:false,
  // },
]);

  function handlesubmit(event){
     event.preventDefault();

     if (input.trim() === "") return null; // Prevent adding empty tasks and its called EARLY RETURN

     const newtodo={
      id:Date.now(),
      task: input,
      completed: false,
      }
     settodos([...todos, newtodo])
      setInput(""); // Clear the input field after submission
  }

  function handleChange(event){
    setInput(event.target.value);
  }

    // Toggle completed state of a todo
  function toggleComplete(id) {
    settodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  // Delete a todo by id
  function deleteTodo(id) {
    settodos(todos.filter(todo => todo.id !== id));
  }


//   return(
//     <> 
//     <div style={{ textAlign:"center", marginTop: "150px", backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px", width: "300px", margin: "auto" }}>
//     <h1>TO-DO Application</h1>
//     <form onSubmit={handlesubmit}>
//       <input type="text" value={input} onChange={handleChange} placeholder="Enter your task"/>
//       {/* <input type="submit" value="submit"/> */}

//       <button type="submit">Add</button>
//     </form>

//     <ul style={{ textAlign:"center",listStylePosition:"inside", padding: "0", marginTop: "20px" }}>
//       {todos.map(todo => (
//         <li key={todo.id}>{todo.task}</li>
//       ))}
//       </ul>
//       </div>
//     </>
//   )
// }
 
return (
    <div
      style={{ textAlign:"center", marginTop: "150px", backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px", width: "300px", margin: "auto"}}
    >
      <h1>TO-DO Application</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter your task"
          style={{ padding: "5px", width: "200px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "5px 10px" }}>
          Add
        </button>
      </form>

      <ul
        style={{textAlign:"center",listStylePosition:"inside", padding: "0", marginTop: "20px" }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginBottom: "10px",
            }}
          >
            {todo.task}
            <button onClick={() => toggleComplete(todo.id)} style={{ marginLeft: "10px" }}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
