import './App.css'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import {Route, Switch } from 'react-router-dom';

import React from 'react'

const App = () => {
  return (
    <>
    <Switch>
        
        <Route to="/" pages={Home}/> 
        <Route to="/product" pages={Product}/> 
        <Route to="/about" pages={About}/> 
        <Route to="/cintact" pages={Contact}/> 
    </Switch>
    </>
  )
}

export default App