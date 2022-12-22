import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Counter from './Counter';
// import Fetch from './Fetch';
import MainPage from './MainPage';
import NavBar from './NavBar';
import OwlsPage from './OwlsPage';

export default function App({ owls }) {
  return (
    <div className="container">
      <NavBar />
      {/* <Fetch /> */}
      <Counter />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/owls" element={<OwlsPage owls={owls} />} />
      </Routes>
    </div>
  );
}
