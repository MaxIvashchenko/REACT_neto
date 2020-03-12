import React from 'react';
import './App.css';
import Time from './components/time/Time';
import Highlight from './components/highlight/Highlight';

function App() {
  return (
    <div className="App">
      <Highlight />
      <hr />
      <Time />
    </div>
  );
}

export default App;
