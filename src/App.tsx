import { FC, ReactElement, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

const App: FC = (): ReactElement => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<{}[]>([]);
  const [filter, setFilter] = useState('all')

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
        />
      </main>
    </div>
  );
};

export default App;
