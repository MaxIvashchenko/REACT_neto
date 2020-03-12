import React from 'react'
import './index.css'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import HomePage from './menu-items/HomePage'
import DriftPage from './menu-items/DriftPage'
import TimeAttackPage from './menu-items/TimeAttackPage'
import ForzaPage from './menu-items/ForzaPage'

function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/" activeClassName="menu__item-active" className="menu__item" exact>Главная</NavLink>
      <NavLink to="/drift" activeClassName="menu__item-active" className="menu__item">Дрифт-такси</NavLink>
      <NavLink to="/timeattack" activeClassName="menu__item-active" className="menu__item">Time Attack</NavLink>
      <NavLink to="/forza" activeClassName="menu__item-active" className="menu__item">Forza Karting</NavLink>
    </nav>
  );
}

export default function RouterTask() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}