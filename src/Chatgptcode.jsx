import React, { useState } from 'react';

const Chatgptcode = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [todos, setTodos] = useState([
    { id: 1, title: 'Task 1' },
    { id: 2, title: 'Task 2' },
    // Add more todo items as needed
  ]);

  const editTodo = (todo) => {
    setShowEditForm(true);
    setCurrentTodo({
      id: todo.id,
      title: todo.title,
    });
  };

  const updateTodo = (updatedTodo) => {
    // Update the todo item in your todos array using the updatedTodo object
    // You can use the todo's ID to find the corresponding item in the array
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setShowEditForm(false);
    setCurrentTodo(null);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic and call updateTodo with the updated todo object
    const updatedTodo = {
      id: currentTodo.id,
      title: e.target.title.value,
    };
    updateTodo(updatedTodo);
  };

  return (
    <div>
      {showEditForm && (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="title"
            defaultValue={currentTodo.title}
          />
          <button type="submit">Update</button>
        </form>
      )}
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>
          <button onClick={() => editTodo(todo)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Chatgptcode;
