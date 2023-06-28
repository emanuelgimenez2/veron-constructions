
import './App.css';import React from 'react';import HomePage from './container/HomePage';import footer from './container/sociales';import IndexPage from './container/IndexPage';import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <IndexPage />
    </div>
  );
}

export default App;
