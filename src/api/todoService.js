const API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = async () => {
  try {
    const response = await fetch(`${API_URL}?limit=10`);
    const data = await response.json();
    return data.todos;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
};

export const createTodo = async (todo) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        todo,
        completed: false,
        userId: 1,
      }),
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to create todo');
  }
};

export const updateTodo = async (id, updateData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });
    return await response.json();
  } catch (error) {
    throw new Error('Failed to update todo');
  }
};

export const deleteTodo = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    return id;
  } catch (error) {
    throw new Error('Failed to delete todo');
  }
};