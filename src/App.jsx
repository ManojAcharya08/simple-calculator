import React, { useState } from 'react';
import './App.css';

const buttons = [
  ['C', '/', '*', '⌫'],
  ['7', '8', '9', '-'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '='],
  ['0', '.', '', ''],
];

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value !== '') {
      setInput(input + value);
    }
  };

  return (
    <div className="calc-container">
      <div className="calc">
        <input
          className="calc-display"
          type="text"
          value={input}
          readOnly
        />
        <div className="calc-buttons">
          {buttons.flat().map((btn, i) => (
            <button
              key={i}
              className={`calc-btn ${btn === '=' ? 'equals' : ''} ${btn === 'C' ? 'clear' : ''} ${btn === '⌫' ? 'backspace' : ''}`}
              onClick={() => handleClick(btn)}
              disabled={btn === ''}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
