import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from './api/todoService';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchTodos();
        const todosWithStatus = data.map(todo => ({
          ...todo,
          status: todo.completed ? 'Completed' : 'Pending'
        }));
        setTodos(todosWithStatus);
      } catch (err) {
        setError('Failed to fetch todos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getTodos();
  }, []);

  const handleCreateTodo = async (title) => {
    try {
      const newTodo = await createTodo(title);
      setTodos(prev => [...prev, { ...newTodo, status: 'Pending' }]);
    } catch (err) {
      setError('Failed to create todo');
    }
  };

  const handleMoveTodo = async (id, newStatus) => {
    try {
      const completed = newStatus === 'Completed';
      const updatedTodo = await updateTodo(id, { completed });
      setTodos(prev => 
        prev.map(todo => 
          todo.id === id 
            ? { ...todo, status: newStatus, completed } 
            : todo
        )
      );
    } catch (err) {
      setError('Failed to update todo status');
    }
  };

  const handleUpdateTodo = async (id, newText) => {
    try {
      const updatedTodo = await updateTodo(id, { todo: newText });
      setTodos(prev => 
        prev.map(todo => 
          todo.id === id 
            ? { ...todo, todo: newText } 
            : todo
        )
      );
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (err) {
      setError('Failed to delete todo');
    }
  };

  if (loading) return <div className="text-center py-10">Loading todos...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Trello-style Todo Board</h1>
        <p className="text-gray-600">Drag and drop tasks between status lanes</p>
      </header>
      
      <Board 
        todos={todos} 
        onCreateTodo={handleCreateTodo}
        onMoveTodo={handleMoveTodo}
        onUpdateTodo={handleUpdateTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;