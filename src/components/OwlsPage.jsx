import React, { useEffect, useState } from 'react';
import OneOwl from './OneOwl';

export default function OwlsPage({ owls }) {
  const [owlsList, setOwlsList] = useState(owls);
  const [input, setInput] = useState({ name: '', img: '' });
  const [word, setWord] = useState('');

  useEffect(() => {
    fetch('/api/word', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charSet=utf-8',
      },
      body: JSON.stringify({ word }),
    });
  }, [word]);

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const changeWord = (e) => {
    setWord(e.target.value);
  };

  const deleteHandler = (id) => {
    fetch(`/api/owls/delete/${id}`, { method: 'POST' })
      .then(() => setOwlsList((prev) => prev.filter((el) => el.id !== id)));
  };

  const submitHandler = () => {
    fetch('/api/owls/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charSet=utf-8',
      },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        setOwlsList((prev) => [...prev, { name: data.name, img: data.img }]);
      });
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Word
          <input
            name="word"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="word"
            value={word}
            onChange={changeWord}
          />
        </label>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
            value={input.name}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Image
          <input
            name="img"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="img"
            value={input.img}
            onChange={changeHandler}
          />
        </label>
      </div>

      <button type="button" onClick={submitHandler}>Send</button>

      <div className="row">
        {owlsList?.map((owl) => <OneOwl key={owl.id} owl={owl} deleteHandler={deleteHandler} />)}
      </div>
    </>
  );
}
