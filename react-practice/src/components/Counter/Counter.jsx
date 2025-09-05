import { useState, useCallback } from 'react';

import { useContext } from 'react';
import { ToDoContext } from '../ToDoProvider/ToDoContext/ToDoContext'
import { ThemeContext } from '../../Theme/ThemeContext'

import Child from './ChildCounter';

const Counter = () => {
  const [count, setCount] = useState(0);

  const ctx = useContext(ToDoContext)
  const themeCtx = useContext(ThemeContext);

  const counterDecHandler = () => {
    setCount((prev) => prev - 1);
  };

  const counterIncHandler = () => {
    setCount((prev) => prev + 1);
  };
  const counterResetHandler = () => {
    setCount(0);
  };

  const handleChildClick = useCallback(() => {
    console.log('from parent child clicked')
  }, [])
  console.log('themeCtx:', themeCtx)
  return (
    <div className="counterContainer" style={{ background: themeCtx.theme === 'light' ? '#fff' : '#444', color: themeCtx.theme === 'light' ? '#444' : '#eee' }}>
      <div>Count: {count}</div>
      <div>Value: {ctx.value}</div>
      <button onClick={() => ctx.incVal()}>Up</button>

      <div>
        <button onClick={counterDecHandler}>-</button>
        <button onClick={counterIncHandler}>+</button>
        <button onClick={counterResetHandler}> Reset</button>
      </div>
      <Child label={'Child I\'m'} childClickHandler={handleChildClick} />
    </div>
  );
};

export default Counter;

