import React, { useEffect, useState } from 'react';
import Joke from './Joke';

export default function MainPage() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  }, []);

  return (
    <>
      {joke ? <Joke joke={joke} /> : 'No joke'}
      <button type="button" onClick={() => setJoke(null)}>Hide Joke</button>
    </>
  );
}
