import './App.css';

import { addressToEvm, evmToAddress } from '@polkadot/util-crypto'; 
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [color, setColor] = useState('white');
  const [mode, setMode] = useState('evmToAddress');

  const convert = () => {
    try {
      setColor('white')
      setOutput(mode === 'evmToAddress' ? evmToAddress(input.trim()): `0x${[...addressToEvm(input.trim())].map(x => x.toString(16).padStart(2, '0'))
      .join('')}`)
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
        <select className='select-default' onChange={(e) => setMode(e.target.value)}>
          <option value={'evmToAddress'}>Ethereum Address to Substrate Address for Deposit</option>
          <option value={'addressToEvm'}>Substrate Address to Ethereum Address for Withdraw</option>
        </select>
        <br/>
        <input type='text' className='input-default' placeholder={mode === 'evmToAddress' ? 'Ethereum Address' : 'Substrate Address'} onChange={(e) => setInput(e.target.value)}/>
        <br/>
        <button className='button-default' onClick={convert}>Convert</button>
        <br/>
        <input type='text' className='input-default' readOnly value={output} style={{color: color}}/>
      </div>
    </div>
  );
}

export default App;
