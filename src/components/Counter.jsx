import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState({ count: 0, cat: 'meow' });

  // let cat = 'meow';

  const clickHandler = () => {
    setCounter((prev) => ({ count: prev.count + 1, cat: 'purr' }));
    // cat = 'purr';
  };

  return (
    <div>
      <h1>{counter.count}</h1>
      <h1>{counter.cat}</h1>
      <button
        type="button"
        onClick={clickHandler}
      >
        Count
      </button>
    </div>
  );
}
