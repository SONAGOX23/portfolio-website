import React from 'react';
import './App.css';
import Header from './components/1.Header/Header'
import Home from './components/2.Home/Home';
import About from './components/3.About/About';
import Skills from './components/4.Skills/Skills';
import Contact from './components/5.Contact/Contact';
// import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Header />

    
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Contact />
    </main>
    </>
  )
}

export default App