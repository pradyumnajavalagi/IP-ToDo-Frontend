import React, { useState, useEffect } from 'react';

const TodoForm = ({ selected, onSubmit, clearSelected }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: '',
  });

  useEffect(() => {
    if (selected) {
      setForm(selected);
    }
  }, [selected]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', description: '', status: 'pending', dueDate: '' });
    clearSelected();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input className="form-control mb-2" name="title" value={form.title} onChange={handleChange} placeholder="Title" required />
      <textarea className="form-control mb-2" name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <select className="form-control mb-2" name="status" value={form.status} onChange={handleChange}>
        <option>pending</option>
        <option>in-progress</option>
        <option>completed</option>
      </select>
      <input className="form-control mb-2" type="date" name="dueDate" value={form.dueDate?.split('T')[0] || ''} onChange={handleChange} />
      <button className="btn btn-primary" type="submit">{selected ? "Update" : "Add"} Todo</button>
    </form>
  );
};

export default TodoForm;
