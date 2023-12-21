import React from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import TodoList from './TodoList';

function Form({ setTodos, todos }) {
  const [todoValue, setTodoValue] = React.useState('');

  const handleSubmit = () => {
    if (todoValue.length === 0) {
      toast.error('Please enter a todo');
    } else if (todos.includes(todoValue)) {
      toast.error('Todo Already exixts');
    } else {
      setTodos([...todos, todoValue]);
      setTodoValue('');
      toast.success('Todo successfully added');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id));
  };

  return (
    <div className="">
      <p className="font-bold text-4xl mb-5 text-center">Todo App</p>
      <form className="text-center">
        <div className="flex items-center justify-center gap-5 mt-5">
          <input
            className="text-2xl pt-2 pl-3 pr-3 pb-2"
            type="text"
            placeholder="Lütfen todo giriniz"
            onChange={(e) => setTodoValue(e.target.value)}
            value={todoValue}
          />
          <button
            className="text-xl hover:text-green-800 hover:font-bold w-[36px]"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Ekle
          </button>
        </div>
        <ul className="flex items-center justify-center flex-col mt-10 text-3xl gap-2">
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </ul>
      </form>
    </div>
  );
}

export default Form;
