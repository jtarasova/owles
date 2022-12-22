import React from 'react';

export default function Fetch() {
  const getTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          console.log('Button!');
          getTodos();
        }}
      >
        Fetch me

      </button>
      <div>Fetch</div>
    </>
  );
}
