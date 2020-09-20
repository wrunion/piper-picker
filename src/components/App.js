import React from 'react';
import './App.css';
import Buttons from './Buttons';

const App = () => {
  return (
    <div className="container">
      <h1>Piper Picker</h1>
      <h2>Pick an action and see what happens!</h2>
      <Buttons />
    </div>
  )
}

export default App;