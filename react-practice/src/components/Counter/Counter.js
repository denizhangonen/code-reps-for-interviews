import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

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
      <div>
        <button onClick={counterDecHandler}>-</button>
        <button onClick={counterIncHandler}>+</button>
        <button onClick={counterResetHandler}> Reset</button>
      </div>
    </div>
  );
};

export default Counter;

