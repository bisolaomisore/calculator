import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let btnNum = 'btn circle white-red';
let pillNum = 'btn pill white-red';
let btnOp = 'btn circle pink-white';

function DisplayBox(props) {
  return (
    <div id="display" className="pill">
      <p id="display-text">{props.value}</p>
    </div>
  );
}

class Calculator extends React.Component {

  defaultState  = {
    curVal: '',
    preVal: '',
    disVal: '',
    operator: ''
  }

  constructor(props) {
    super(props);
    this.state = this.defaultState;
  }

  clickNumber(number) {
    let cur = this.state.curVal;
    let val = cur + number;

    if (cur.length < 9) {
      this.setState({
        curVal: val,
        disVal: val
      });
    }
  }

  clear() {
    this.setState(this.defaultState);
  }

  operator(op) {
    let cur = this.state.curVal;
    if (cur) {
      this.setState({
        preVal: cur,
        curVal: '',
        disVal: '',
        // put spaces around operator to avoid postfix error during evaluation
        operator: ' ' + op + ' '
      });
    }
  }

  equals() {
    let cur = this.state.curVal;
    let pre = this.state.preVal;
    let op = this.state.operator;

    if (cur && pre && op) {
      cur = eval(pre + op + cur);
      cur = Number.isInteger(cur) ? cur : cur.toFixed(2);
      cur = cur.toString().length > 9 ? cur.toExponential(2) : cur;
      cur = cur.toString();

      this.setState({
        curVal: cur,
        disVal: cur,
        preVal: '',
        operator: ''
      })
    }
  }

  plusMinus() {
    let cur = this.state.curVal;
    let val = cur[0] === '-' ? cur.slice(1) : '-' + cur;

    if (cur) {
      this.setState({
        curVal: val,
        disVal: val
      })
    }
  }

  percent() {
    let cur = this.state.curVal;
    let pre = this.state.preVal;
    if(pre && cur && !cur.includes('%')) {
      this.setState({
        curVal: Number(cur) * Number(pre) / 100,
        disVal: cur + '%'
      });
    }
  }

  render() {
    return (
      <div id="calculator" >
        <DisplayBox value={this.state.disVal}/ >
        <div id="row1" className="calc-row">
          <button className={btnOp}  onClick={() => this.clear()}>AC</button>
          <button className={btnOp}  onClick={() => this.plusMinus()}>+/-</button>
          <button className={btnOp}  onClick={() => this.percent()}>%</button>
          <button className={btnOp}  onClick={() => this.operator('/')}>/</button>
        </div>
        <div id="row2" className="calc-row">
          <button className={btnNum} onClick={() => this.clickNumber('7')}>7</button>
          <button className={btnNum} onClick={() => this.clickNumber('8')}>8</button>
          <button className={btnNum} onClick={() => this.clickNumber('9')}>9</button>
          <button className={btnOp}  onClick={() => this.operator('*')}>x</button>
        </div>
        <div id="row3" className="calc-row">
          <button className={btnNum} onClick={() => this.clickNumber('4')}>4</button>
          <button className={btnNum} onClick={() => this.clickNumber('5')}>5</button>
          <button className={btnNum} onClick={() => this.clickNumber('6')}>6</button>
          <button className={btnOp}  onClick={() => this.operator('+')}>+</button>
        </div>
        <div id="row4" className="calc-row">
          <button className={btnNum} onClick={() => this.clickNumber('1')}>1</button>
          <button className={btnNum} onClick={() => this.clickNumber('2')}>2</button>
          <button className={btnNum} onClick={() => this.clickNumber('3')}>3</button>
          <button className={btnOp}  onClick={() => this.operator('-')}>-</button>
        </div>
        <div id="row5" className="calc-row">
          <button id="zero" className={pillNum} onClick={() => this.clickNumber('0')}>0</button>
          <button className={btnNum} onClick={() => this.clickNumber('.')}>.</button>
          <button className={btnOp} onClick={() => this.equals()}>=</button>
        </div>
      </div>
    );
  }
}

// ==========================================================================

ReactDOM.render(<Calculator />, document.getElementById('root'));
