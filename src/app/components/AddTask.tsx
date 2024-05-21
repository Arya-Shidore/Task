import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { addTask } from '../store/taskSlice';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 w-full"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
