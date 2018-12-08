import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function DisplayBox(props) {
  return (
    <div id="display" className="pill">
      <p id="display-text">{props.value}</p>
    </div>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curVal: '',
      preVal: '',
      operator: ''
    }
  }

  clickNumber(number) {
    this.setState({
      curVal: this.state.curVal + number
    });
  }

  clear() {
    this.setState({
      curVal: '',
      preVal: '',
      operator: ''
    });
  }

  plus() {
    if (!this.state.curVal) {
      this.setState({curVal: '+'});
    } else if (this.state.curVal && this.state.curVal !== '+') {
      this.setState({
        preVal: this.state.curVal,
        curVal: '',
        // put spaces around operator to avoid postfix error during evaluation.
        operator: ' + ',
      });
    }
  }

  equals() {
    let cur = this.state.curVal;
    let pre = this.state.preVal;
    let op = this.state.operator;

    if (cur && pre && op) {
      this.setState({
        curVal: eval(pre + op + cur).toString(),
        preVal: '',
        operator: ''
      })
    }
  }

  render() {
    return (
      <div id="calculator" >
        <DisplayBox value={this.state.curVal}/ >
        <div id="row1" className="calc-row">
          <button className="btn circle pink-white" onClick={() => this.clear()}>AC</button>
          <button className="btn circle pink-white">+/-</button>
          <button className="btn circle pink-white">%</button>
          <button className="btn circle pink-white">/</button>
        </div>
        <div id="row2" className="calc-row">
          <button className="btn circle white-red" onClick={() => this.clickNumber('7')}>7</button>
          <button className="btn circle white-red" onClick={() => this.clickNumber('8')}>8</button>
          <button className="btn circle white-red" onClick={() => this.clickNumber('9')}>9</button>
          <button className="btn circle pink-white">x</button>
        </div>
        <div id="row3" className="calc-row">
          <button className="btn circle white-red" onClick={() => this.clickNumber('4')}>4</button>
          <button className="btn circle white-red" onClick={() => this.clickNumber('5')}>5</button>
          <button className="btn circle white-red" onClick={() => this.clickNumber('6')}>6</button>
          <button className="btn circle pink-white" onClick={() => this.plus()}>+</button>
        </div>
        <div id="row4" className="calc-row">
          <button className="btn circle white-red" onClick={() => this.clickNumber('1')}>1</button>
          <button className="btn circle white-red" onClick={() => this.clickNumber('2')}>2</button>
          <button className="btn circle white-red" onClick={() => this.clickNumber('3')}>3</button>
          <button className="btn circle pink-white">-</button>
        </div>
        <div id="row5" className="calc-row">
          <button id="zero" className="btn pill white-red" onClick={() => this.clickNumber('0')}>0</button>
          <button className="btn circle white-red" onClick={() => this.clickNumber('.')}>.</button>
          <button className="btn circle pink-white"onClick={() => this.equals()}>=</button>
        </div>
        <button onClick={() => console.log(this.state)}>state</button>
      </div>
    );
  }
}

// ==========================================================================

ReactDOM.render(<Calculator />, document.getElementById('root'));
