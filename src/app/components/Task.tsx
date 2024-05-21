import React from 'react';
import { useAppDispatch } from '../store';
import { toggleTaskCompletion, deleteTask } from '../store/taskSlice';

interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
}

const Task: React.FC<TaskProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2">
      <div
        className={`flex-1 cursor-pointer ${completed ? 'line-through' : ''}`}
        onClick={() => dispatch(toggleTaskCompletion(id))}
      >
        {title}
      </div>
      <button
        className="ml-2 p-1 bg-red-500 text-white rounded"
        onClick={() => dispatch(deleteTask(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
