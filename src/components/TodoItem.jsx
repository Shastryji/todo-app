import React, { useState } from 'react';

function TodoItem({ todo, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.todo);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('todoId', todo.id.toString());
  };

  const handleEdit = () => {
    if (editedText.trim() !== '') {
      onEdit(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="bg-white rounded-lg shadow p-3 cursor-move hover:shadow-md transition-shadow"
    >
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full p-2 border rounded"
            autoFocus
          />
          <div className="flex space-x-2">
            <button 
              onClick={handleEdit}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start">
          <p className="text-gray-800">{todo.todo}</p>
          <div className="flex space-x-1">
            <button 
              onClick={() => setIsEditing(true)}
              className="text-blue-500 hover:text-blue-700"
              aria-label="Edit"
            >
              ✏️
            </button>
            <button 
              onClick={() => onDelete(todo.id)}
              className="text-red-500 hover:text-red-700 ml-1"
              aria-label="Delete"
            >
              🗑️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;