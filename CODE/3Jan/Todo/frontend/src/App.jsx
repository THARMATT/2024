import React, { useState, useEffect } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
