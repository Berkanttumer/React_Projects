import React from 'react';
import TodoForm from './components/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = React.useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <ToastContainer />
      <TodoForm setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
