import React from 'react';
import Navbar from './Navbar';
import './css/Quote.css';

const Quote = () => (
  <div className="wrapper">
    <Navbar />
    <main className="quote-box">
      <p>
        Mathematics is not about numbers, equations, computations
        or algorithms. It is about understanding. -- William Paul Thurston
      </p>
    </main>
  </div>
);

export default Quote;
