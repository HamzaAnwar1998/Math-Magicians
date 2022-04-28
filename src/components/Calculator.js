import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  const { total, next, operation } = state;
  return (
    <div className="calculator-box">
      <header className="result-box">
        {total && <>{total}</>}
        {operation !== null && <>{operation}</>}
        {next !== null && <>{next}</>}
      </header>
      <section className="operaions-box">
        <div className="leftside">
          <main className="row">
            <button type="button" className="buttons" onClick={handleClick}>AC</button>
            <button type="button" className="buttons" onClick={handleClick}>+/-</button>
            <button type="button" className="buttons" onClick={handleClick}>%</button>
          </main>
          <main className="row">
            <button type="button" className="buttons" onClick={handleClick}>7</button>
            <button type="button" className="buttons" onClick={handleClick}>8</button>
            <button type="button" className="buttons" onClick={handleClick}>9</button>
          </main>
          <main className="row">
            <button type="button" className="buttons" onClick={handleClick}>4</button>
            <button type="button" className="buttons" onClick={handleClick}>5</button>
            <button type="button" className="buttons" onClick={handleClick}>6</button>
          </main>
          <main className="row">
            <button type="button" className="buttons" onClick={handleClick}>1</button>
            <button type="button" className="buttons" onClick={handleClick}>2</button>
            <button type="button" className="buttons" onClick={handleClick}>3</button>
          </main>
          <main className="row">
            <button type="button" className="buttons" onClick={handleClick}>0</button>
            <button type="button" className="buttons" onClick={handleClick}>.</button>
          </main>
        </div>
        <div className="rightside">
          <main className="row">
            <button type="button" className="buttons orange" onClick={handleClick}>/</button>
          </main>
          <main className="row">
            <button type="button" className="buttons orange" onClick={handleClick}>x</button>
          </main>
          <main className="row">
            <button type="button" className="buttons orange" onClick={handleClick}>-</button>
          </main>
          <main className="row">
            <button type="button" className="buttons orange" onClick={handleClick}>+</button>
          </main>
          <main className="row">
            <button type="button" className="buttons orange" onClick={handleClick}>=</button>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
