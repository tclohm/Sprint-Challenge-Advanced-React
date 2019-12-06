import React from 'react';
import Players from "./components/Players";
import DarkModeButton from "./components/DarkModeButton";
import './App.css';

function App() {

  return (
    <div className="App">
    <DarkModeButton />
    <Players />
    </div>
  );
}

export default App;
