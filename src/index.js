import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
  render() {
    return <div id="calculator"></div>;
  }
}

// ==========================================================================

ReactDOM.render(<Calculator />, document.getElementById('root'));
