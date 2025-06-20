export async function getTodos() {
  const res = await fetch('https://dummyjson.com/todos');
  const data = await res.json();
  return data.todos;
}

export async function createTodo(todo) {
  const res = await fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });
  return res.json();
}

export async function updateTodo(id, updates) {
  const res = await fetch(`https://dummyjson.com/todos/${id}` , {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
  return res.json();
}

export async function deleteTodo(id) {
  await fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'DELETE'
  });
}
