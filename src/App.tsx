import { FC, ReactElement, useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App: FC = (): ReactElement => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<{
    text?: string
    id?: number
    completed?: boolean
  }[]>([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState<{}[]>([]);

  useEffect(() => {
    filteredHandler()
  }, [todos, filter])

  const filteredHandler = (): void => {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className='app'>
      <header className="header">
        <h1 className="title">React To Do List</h1>
      </header>
      <main className="main">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setFilter={setFilter}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
        />
      </main>
    </div>
  );
};

export default App;
