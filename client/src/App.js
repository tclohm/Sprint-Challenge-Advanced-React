import React from 'react';
import Players from "./components/Players";
import DarkModeButton from "./components/DarkModeButton";
import './App.css';

function App() {

  return (
    <div className="App">
    <h1>Sprint Challenge</h1>
    <DarkModeButton />
    <Players />
    </div>
  );
}

export default App;
