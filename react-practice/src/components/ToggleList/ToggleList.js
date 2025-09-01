import { useState } from 'react';

const list = ['React', 'Vue', 'Angular'];

const ToggleList = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listToggleHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button href="#" onClick={listToggleHandler}>
        {isVisible ? 'Hide List' : 'Show List'}
      </button>
      {isVisible && (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToggleList;

