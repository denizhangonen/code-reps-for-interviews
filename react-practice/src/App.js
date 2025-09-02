import './App.css';
import { ToDoProvider } from './components/ToDoProvider/ToDoContext/ToDoContext';
import { ThemeProvider } from './Theme/ThemeContext';

// components
import Counter from './components/Counter/Counter';
import ToggleList from './components/ToggleList/ToggleList';
import UserList from './components/UserList/UserList';
import ToDoForm from './components/ToDoProvider/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoProvider/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <ToDoProvider>
          <ToDoForm />
          <ToDoList />
          <Counter />
          <ToggleList />
          <UserList />
        </ToDoProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

