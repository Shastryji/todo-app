import React, { useState } from 'react';

function AddTodoForm({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onCreateTodo(newTodo);
      setNewTodo('');
      setIsAdding(false);
    }
  };

  return (
    <div>
      {!isAdding ? (
        <button
          onClick={() => setIsAdding(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          + Add New Task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter task description"
            className="w-full p-2 border rounded mb-2"
            autoFocus
          />
          <div className="flex space-x-2">
            <button
              type="submit"
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddTodoForm;