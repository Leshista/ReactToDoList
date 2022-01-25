import { FC } from 'react';
import Form from './components/Form';

const App:FC = () => {
  
  return (
    <div className='App'>
      <header className="header">
        <h1 className="title">React To Do List</h1>
      </header>
      <main className="main">
        <Form/>
      </main>
    </div>
  );
}

export default App;
