import React, { useEffect, useState } from 'react';
import API from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    console.log(process.env.REACT_APP_API_URL + '/todos');
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchTodos = async () => {
    const res = await API.get('/');
    setTodos(res.data.data);
  };

  const handleAddOrUpdate = async todo => {
    if (todo._id) {
      await API.put(`/${todo._id}`, todo);
    } else {
      await API.post('/', todo);
    }
    fetchTodos();
  };

  const handleDelete = async id => {
    await API.delete(`/${id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">📝 AWS Todo App</h2>
      <TodoForm selected={selected} onSubmit={handleAddOrUpdate} clearSelected={() => setSelected(null)} />
      <TodoList todos={todos} onEdit={setSelected} onDelete={handleDelete} />
    </div>
  );
};

export default App;
