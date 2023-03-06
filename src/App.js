import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Background from './components/background';
import Header from './components/header';
import Homepage from './components/homepage';
import MyForm from './components/testing';
import Whiteboard from './components/whiteboard';
import Algorithm from './components/algo';
import DifficultyPage from './components/difficulty_page';

import './index.css';


class App extends Component {

  componentDidMount() {
    document.body.style.height = "100vh";
    document.body.style.backgroundImage = "linear-gradient(to top right, #bef264, #d9f99d , #ccf779)"
  }

  render() {
    console.log('App - Rendered');
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DifficultyPage />} />
          <Route path="Whiteboard" element={<Whiteboard />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
