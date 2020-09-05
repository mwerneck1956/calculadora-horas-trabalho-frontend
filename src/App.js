import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-materialize'
import Header from './components/Header'
import WorkTimeCalculator from './Sections/WorkTimeCalculator'
function App() {
  return (
    <div className="App">
      <Header/>
      <WorkTimeCalculator/>
    </div>
  );
}

export default App;
