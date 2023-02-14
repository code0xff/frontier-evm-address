import './App.css';

import { evmToAddress } from '@polkadot/util-crypto'; 
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [color, setColor] = useState('white');

  const convert = () => {
    try {
      setColor('white')
      setOutput(evmToAddress(input.trim()))
    } catch(e) {
      setColor('darkred')
      setOutput(e.message)
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h3 style={{color: 'white'}}>Ethereum Address Converter for Frontier</h3>
        <br/>
        <br/>
        <input type='text' className='input-default' placeholder='Ethereum Address' onChange={(e) => setInput(e.target.value)}/>
        <br/>
        <button className='button-default' onClick={convert}>Convert</button>
        <br/>
        <input type='text' className='input-default' readOnly value={output} style={{color: color}}/>
      </div>
    </div>
  );
}

export default App;
