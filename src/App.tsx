import React, { useState } from 'react';
import './App.css';

type Todo = {
  title: string;
  id: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { completed: false, id: `${Date.now()}`, title },
    ]);
  };

  return (
    <section>
      <Header onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </section>
  );
}

function Header({ onAddTodo }: { onAddTodo(title: string): void }) {
  const [text, setText] = useState('');

  return (
    <input
      onChange={(e) => {
        setText(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          onAddTodo(text);
        }
      }}
    />
  );
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
