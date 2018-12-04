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
      </div>
    );
  }
}

// ==========================================================================

ReactDOM.render(<Calculator />, document.getElementById('root'));
