import Backdrop from './components/Backdrop';
import DeleteModal from './components/DeleteModal';
import ToDoBlock from './components/ToDoBlock';

function App() {
  return (
    <main className='main'>
      <p className="title">To Do List</p>
      <ToDoBlock />
      <Backdrop/>
      <DeleteModal/>
    </main>
  );
}

export default App;
