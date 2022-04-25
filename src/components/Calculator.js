/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="calculator-box">
        <header className="result-box">
          0
        </header>
        <section className="operaions-box">
          <div className="leftside">
            <main className="row">
              <div className="buttons">AC</div>
              <div className="buttons">+/-</div>
              <div className="buttons">%</div>
            </main>
            <main className="row">
              <div className="buttons">7</div>
              <div className="buttons">8</div>
              <div className="buttons">9</div>
            </main>
            <main className="row">
              <div className="buttons">4</div>
              <div className="buttons">5</div>
              <div className="buttons">6</div>
            </main>
            <main className="row">
              <div className="buttons">1</div>
              <div className="buttons">2</div>
              <div className="buttons">3</div>
            </main>
            <main className="row">
              <div className="buttons">0</div>
              <div className="buttons">.</div>
            </main>
          </div>
          <div className="rightside">
            <main className="row">
              <div className="buttons orange">/</div>
            </main>
            <main className="row">
              <div className="buttons orange">x</div>
            </main>
            <main className="row">
              <div className="buttons orange">-</div>
            </main>
            <main className="row">
              <div className="buttons orange">+</div>
            </main>
            <main className="row">
              <div className="buttons orange">=</div>
            </main>
          </div>
        </section>
      </div>
    );
  }
}

export default Calculator;
