import React, { useState } from 'react';
import Button from './components/Button';
import TodoRow from './components/TodoRow';
import "./App.css"

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: number, label: string, completed: boolean }[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        label: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <div className='todo'>
      <h1 className='header'>Todo</h1>
      <div className="todo-list">
        {todos.map(todo => (
          <TodoRow
            key={todo.id}
            label={todo.label}
            checked={todo.completed}
            onCheckboxChange={() => handleToggleTodo(todo.id)}
            onDeleteButtonClick={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Add task here..."
        />
        <Button onClick={handleAddTodo} variant="big">Add</Button>
      </div>
      </div>
    </div>
  );
};

export default App;
