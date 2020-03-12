import React from 'react';
import './App.css';
import UsingEffect from './components/use-effect/UsingEffect';
import UseJson from './components/use-json-fetch/UseJson';

function App() {
  return (
    <React.Fragment>
      <UsingEffect />
      <hr />
      <UseJson />
      <hr />
    </React.Fragment>

  );
}

export default App;
