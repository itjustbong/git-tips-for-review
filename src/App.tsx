import React, { useState } from 'react';
import './App.css';

type Todo = {
  title: string;
  id: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  return <TodoList todos={todos} />;
}

function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}

function TodoItem({ todo }: { todo: Todo }) {
  return <li>{todo.title}</li>;
}

export default App;
