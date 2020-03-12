import React from 'react';
import './App.css';
import CardsList from './components/CardsList';
import items from './items';


export default function App() {
  return (
    <div className="App">
      <CardsList items={items}/>
    </div>
  )
}