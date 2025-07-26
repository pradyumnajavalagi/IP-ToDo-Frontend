import React from 'react';

const TodoList = ({ todos, onEdit, onDelete }) => (
  <ul className="list-group">
    {todos.map(todo => (
      <li key={todo._id} className="list-group-item d-flex justify-content-between align-items-start">
        <div>
          <h5>{todo.title}</h5>
          <p className="mb-1">{todo.description}</p>
          <small>Status: {todo.status} | Due: {todo.dueDate?.split('T')[0]}</small>
        </div>
        <div>
          <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(todo)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo._id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
);

export default TodoList;
