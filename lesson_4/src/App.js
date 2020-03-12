import React from 'react';
import './App.css';
import Converter from './components/hex2rgb/Converter';
import Steps from './components/steps/Steps';

function App() {
  return (
    <div className="App" >
      <Converter />
      <hr />
      <Steps />
      <hr />

    </div>
  );
}

export default App;
