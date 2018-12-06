import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function DisplayBox(props) {
  return (
    <div id="display">
      <p id="display-text">100</p>
    </div>
  );
}

class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator" >
        <DisplayBox / >
        <div id="row1" className="calc-row">
          <button className="btn circle pink-white">AC</button>
          <button className="btn circle pink-white">+/-</button>
          <button className="btn circle pink-white">%</button>
          <button className="btn circle pink-white">/</button>
        </div>
        <div id="row2" className="calc-row">
          <button className="btn circle white-red">7</button>
          <button className="btn circle white-red">8</button>
          <button className="btn circle white-red">9</button>
          <button className="btn circle pink-white">x</button>
        </div>
        <div id="row3" className="calc-row">
          <button className="btn circle white-red">4</button>
          <button className="btn circle white-red">5</button>
          <button className="btn circle white-red">6</button>
          <button className="btn circle pink-white">+</button>
        </div>
        <div id="row4" className="calc-row">
          <button className="btn circle white-red">1</button>
          <button className="btn circle white-red">2</button>
          <button className="btn circle white-red">3</button>
          <button className="btn circle pink-white">-</button>
        </div>
        <div id="row5" className="calc-row">
          <button className="btn circle white-red">0</button>
          <button className="btn circle white-red">.</button>
          <button className="btn circle pink-white">=</button>
        </div>
      </div>
    );
  }
}

// ==========================================================================

ReactDOM.render(<Calculator />, document.getElementById('root'));
