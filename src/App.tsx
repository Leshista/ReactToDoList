import { FC, ReactElement, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App: FC = (): ReactElement => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<{}[]>([]);

  return (
    <div className='app'>
      <header className="header">
        <h1 className="title">React To Do List</h1>
      </header>
      <main className="main">
        <Form setInputText={setInputText} setTodos={setTodos} todos={todos} />
        <TodoList />
      </main>
    </div>
  );
};

export default App;
