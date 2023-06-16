import { Box } from "@mui/material";
import Header from "./components/Header";
import Todos from "./components/Todos";  
import { useState } from "react";
import TodoList from "./components/TodoList";
import {v4} from 'uuid';

function App() {
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
  // Edit TODO
  // function editTodo(todo) {
  //   setShowEditForm(true);
  //   setCurrentTodo({
  //     id: todo.id,
  //     title: todo.title,
  //   });
  // }
  // Update TODO
  // const updateTodo =(e)=>{
  //   e.preventDefault();
  //   let newTitle=currentTodo.title;
  //   currentTodo.title==='' ||!newTitle ?alert('please fill in the form') :setTodos([...todos]);

  return (
    <Box>
      <Header />
      <Todos addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </Box>
  );
}
export default App;
