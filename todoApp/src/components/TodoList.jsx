import React from 'react';
import TodoItem from './TodoItem.jsx';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="flex items-center justify-center flex-col gap-1 text-xl">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} id={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
