import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, checkTodo, editTodo, deleteTodo, }) => {
    return (
        <>
            {todos.map((todo) => (
                <Todo key={todo.id} title={todo.title} checkTodo={checkTodo} id={todo.id} completed={todo.isCompleted} deleteTodo={deleteTodo} />
            ) )}

        </>
    )
}

export default TodoList
