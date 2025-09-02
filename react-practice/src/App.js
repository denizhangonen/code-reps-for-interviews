import './App.css';
import { ToDoProvider } from './components/ToDoProvider/ToDoContext/ToDoContext';

// components
import Counter from './components/Counter/Counter';
import ToggleList from './components/ToggleList/ToggleList';
import UserList from './components/UserList/UserList';
import ToDoForm from './components/ToDoProvider/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoProvider/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <ToDoProvider>
        <ToDoForm />
        <ToDoList />
        <Counter />
        <ToggleList />
        <UserList />
      </ToDoProvider>
    </div>
  );
}

export default App;

