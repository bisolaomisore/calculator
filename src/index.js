import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function DisplayBox(props) {
  return (
    <div>Display</div>
  );
}

class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator">
        <DisplayBox />
        <div id="row1">
          <button className="circle">AC</button>
          <button className="circle">+/-</button>
          <button className="circle">%</button>
          <button className="circle">/</button>
        </div>
        <div id="row2">
          <button className="circle">7</button>
          <button className="circle">8</button>
          <button className="circle">9</button>
          <button className="circle">x</button>
        </div>
        <div id="row3">
          <button className="circle">4</button>
          <button className="circle">5</button>
          <button className="circle">6</button>
          <button className="circle">+</button>
        </div>
        <div id="row4">
          <button className="circle">1</button>
          <button className="circle">2</button>
          <button className="circle">3</button>
          <button className="circle">-</button>
        </div>
        <div id="row5">
          <button className="circle">0</button>
          <button className="circle">.</button>
          <button className="circle">=</button>
        </div>
      </div>
    );
  }
}

// ==========================================================================

ReactDOM.render(<Calculator />, document.getElementById('root'));
