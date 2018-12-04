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
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
        </div>
        <div id="row2">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
        </div>
        <div id="row3">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
        </div>
        <div id="row4">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
        </div>
        <div id="row5">
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    );
  }
}

// ==========================================================================

ReactDOM.render(<Calculator />, document.getElementById('root'));
