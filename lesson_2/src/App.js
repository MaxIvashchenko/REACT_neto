import React from 'react';
import './App.css';

import Portfolio from './components/filter/Portfolio';
import {projects} from './components/filter/projects'

import Store from './components/layouts/Store'

import Dropdown from './components/dropdown/Dropdown'
import './components/dropdown/dropdown.css';

export default function App() {
  const options = ["Profile Information", "Change Password", "Become PRO", "Help", "Log Out"];
  
  return (
  <div className="App">
    <Portfolio
      filters={["All", "Websites", "Flayers", "Business Cards"]}
      selected="All"
      projects={projects}
    />
    <hr/>
    <Store />
    <hr/>
    <Dropdown options={options}/>
  </div>
  )
}



