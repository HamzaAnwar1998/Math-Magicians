/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick=(e) => {
    this.setState((prevState) => calculate(prevState, e.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
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
              <button type="button" className="buttons" onClick={this.handleClick}>AC</button>
              <button type="button" className="buttons" onClick={this.handleClick}>+/-</button>
              <button type="button" className="buttons" onClick={this.handleClick}>%</button>
            </main>
            <main className="row">
              <button type="button" className="buttons" onClick={this.handleClick}>7</button>
              <button type="button" className="buttons" onClick={this.handleClick}>8</button>
              <button type="button" className="buttons" onClick={this.handleClick}>9</button>
            </main>
            <main className="row">
              <button type="button" className="buttons" onClick={this.handleClick}>4</button>
              <button type="button" className="buttons" onClick={this.handleClick}>5</button>
              <button type="button" className="buttons" onClick={this.handleClick}>6</button>
            </main>
            <main className="row">
              <button type="button" className="buttons" onClick={this.handleClick}>1</button>
              <button type="button" className="buttons" onClick={this.handleClick}>2</button>
              <button type="button" className="buttons" onClick={this.handleClick}>3</button>
            </main>
            <main className="row">
              <button type="button" className="buttons" onClick={this.handleClick}>0</button>
              <button type="button" className="buttons" onClick={this.handleClick}>.</button>
            </main>
          </div>
          <div className="rightside">
            <main className="row">
              <button type="button" className="buttons orange" onClick={this.handleClick}>/</button>
            </main>
            <main className="row">
              <button type="button" className="buttons orange" onClick={this.handleClick}>x</button>
            </main>
            <main className="row">
              <button type="button" className="buttons orange" onClick={this.handleClick}>-</button>
            </main>
            <main className="row">
              <button type="button" className="buttons orange" onClick={this.handleClick}>+</button>
            </main>
            <main className="row">
              <button type="button" className="buttons orange" onClick={this.handleClick}>=</button>
            </main>
          </div>
        </section>
      </div>
    );
  }
}

export default Calculator;
