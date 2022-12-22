import React from 'react';

export default function OneOwl({ owl, deleteHandler }) {
  return (
    <div className="card col-4 mt-3 mb-3" style={{ width: '18rem' }}>
      <img src={owl.img} className="card-img-top" alt="owl" />
      <div className="card-body">
        <h5 className="card-title">{owl.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          deleteHandler(owl.id);
        }}
        >
          <button className="btn btn-primary" type="submit">Fly away</button>
        </form>
      </div>
    </div>
  );
}
