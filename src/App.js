import { Box } from "@mui/material";
import Header from "./components/Header";
import Todos from "./components/Todos";  
import { useState } from "react";
import TodoList from "./components/TodoList";
import {v4} from 'uuid';
// import Chatgptcode from "./Chatgptcode";

function App() {
  const [updateTodo, setUpdateTodo] = useState();
  const [todos, setTodos] = useState([]);

  // Check Todo
  const checkTodo = (id) => {
    setTodos(
      todos.map(todo=> {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        return todo;
      })
    );
  };

  // Delete TODO
  const deleteTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  // Add TOdo
  const addTodo = (text) => {
    const newTodo = {
      id: v4(),
      title: text,
      completed: false,
    }
    setTodos([...todos,newTodo]);
  };
  const editHandler = (id, title ) => {
 deleteTodo(id);
 setUpdateTodo(title);
  };

  return (
    <Box>
      <Header />
      <Todos addTodo={addTodo} updateTodo={updateTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} editHandler={editHandler} />

      {/* <Chatgptcode/> */}
    </Box>
  );
}
export default App;
