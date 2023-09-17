import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Gym from './components/Workout-Plan/Gym';
import QA from './components/QuesAns/QA';

function App() {

  return (
    <div className="App">
      < div >
        <Header></Header>
        <Gym></Gym>
        <QA></QA>
      </div >
    </div >
  );
}

export default App;
