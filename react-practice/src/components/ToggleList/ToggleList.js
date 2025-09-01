import { useState } from 'react';

const list = ['React', 'Vue', 'Angular'];

const ToggleList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [listItems, setListItems] = useState([]);

  const listToggleHandler = () => {
    setIsVisible(!isVisible);
  };

  const textChangeHandler = (e) => {
    setText(e.target.value);
  };

  const addItemHandler = () => {
    setListItems((prev) => [
      ...prev,
      { id: new Date().toISOString(), title: text },
    ]);
    setText('');
  };

  const removeHandler = (id) => {
    setListItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          id="listItem"
          value={text}
          onChange={(e) => textChangeHandler(e)}
        />
        <button onClick={addItemHandler}>Add</button>
      </div>
      <div>
        <button onClick={listToggleHandler}>
          {isVisible ? 'Hide List' : 'Show List'}
        </button>
        {isVisible && (
          <ul>
            {listItems.map((item) => (
              <li key={item.id}>
                {item.title}
                <button onClick={() => removeHandler(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ToggleList;

