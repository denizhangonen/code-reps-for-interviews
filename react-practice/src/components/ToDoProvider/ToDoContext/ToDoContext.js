import { createContext, useState } from 'react';

export const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  const [items, setItems] = useState([]);
  const [val, setVal] = useState(88);
  const incVal = () => {
    setVal((prev) => prev + 1);
  };
  const addItem = (title) => {
    const id = Date.now();
    setItems((prev) => [...prev, { title, id }]);
  };
  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const value = { items, value: val, incVal, addItem, removeItem };
  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
}

