import React, {FC} from 'react';

import ToDoBlock from './components/ToDoBlock';

const App:FC = () => {
  
  return (
    <main className='main'>
      <p className="title">To Do List</p>
      <ToDoBlock />
    </main>
  );
}

export default App;
