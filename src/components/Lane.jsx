import React, { useCallback } from 'react';
import TodoItem from './TodoItem';

function Lane({ lane, todos, onMoveTodo, onUpdateTodo, onDeleteTodo }) {
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const todoId = e.dataTransfer.getData('todoId');
    onMoveTodo(Number(todoId), lane.id);
  }, [lane.id, onMoveTodo]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div 
      className={`rounded-lg shadow-sm p-4 ${lane.color}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{lane.title}</h2>
        <span className="bg-white rounded-full px-2 py-1 text-sm">
          {todos.length}
        </span>
      </div>
      
      <div className="space-y-3 min-h-[100px]">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onEdit={onUpdateTodo}
            onDelete={onDeleteTodo}
          />
        ))}
        
        {todos.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            No tasks in this lane
          </div>
        )}
      </div>
    </div>
  );
}

export default Lane;