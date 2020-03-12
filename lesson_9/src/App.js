import React from 'react';
import RouterTask from './components/router/RouterTask';
import RouterCrud from './components/router-crud/RouterCrud';

function App() {
  return (
    <div className="App">
      <RouterTask />
      <hr />
      <RouterCrud />
    </div>
  );
}

export default App;
