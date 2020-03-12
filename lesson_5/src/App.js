import React from 'react';
import Page from './components/decomposition/Page'

import './App.css';
import CardsList from './components/cards/CardList';
import {items} from './components/cards/item'
function App() {
  return (
<>
        <div className="App"></div>
    <CardsList items={items}/>
    <hr/>
    <div/>
    <Page />
    </>
    
  );
}

export default App;
