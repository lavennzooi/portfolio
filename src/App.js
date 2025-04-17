import React from 'react';
import Welcome from './components/welcome';
import NavBar from './components/navbar';
import './App.css';
import './style/global.css';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Welcome></Welcome>
      </div>
    </div>
  );
}

export default App;
