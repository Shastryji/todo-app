import React from 'react';
import Lane from './Lane';
import AddTodoForm from './AddTodoForm';

const STATUS_LANES = [
  { id: 'Pending', title: 'Pending', color: 'bg-yellow-100' },
  { id: 'In Progress', title: 'In Progress', color: 'bg-blue-100' },
  { id: 'Completed', title: 'Completed', color: 'bg-green-100' }
];

function Board({ todos, onCreateTodo, onMoveTodo, onUpdateTodo, onDeleteTodo }) {
  return (
    <div className="max-w-6xl mx-auto">
      <AddTodoForm onCreateTodo={onCreateTodo} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {STATUS_LANES.map(lane => (
          <Lane 
            key={lane.id}
            lane={lane}
            todos={todos.filter(todo => todo.status === lane.id)}
            onMoveTodo={onMoveTodo}
            onUpdateTodo={onUpdateTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;