import { useState } from 'react';

import { useContext } from 'react';
import { ToDoContext } from '../ToDoProvider/ToDoContext/ToDoContext'

const Counter = () => {
  const [count, setCount] = useState(0);

  const ctx = useContext(ToDoContext)

  const counterDecHandler = () => {
    setCount((prev) => prev - 1);
  };

  const counterIncHandler = () => {
    setCount((prev) => prev + 1);
  };
  const counterResetHandler = () => {
    setCount(0);
  };
  return (
    <div className="counterContainer">
      <div>Count: {count}</div>
      <div>Value: {ctx.value}</div>
      <button onClick={() => ctx.incVal()}>Up</button>

      <div>
        <button onClick={counterDecHandler}>-</button>
        <button onClick={counterIncHandler}>+</button>
        <button onClick={counterResetHandler}> Reset</button>
      </div>
    </div>
  );
};

export default Counter;

