import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWorld extends React.Component {
  render() {
    return <div>Hello, world!</div>;
  }
}

// ==========================================================================

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
