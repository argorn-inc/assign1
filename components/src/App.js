import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/Component1';
import Second from './components/Component2';
import Third from './components/Component3';
import Fourth from './components/Component4';


function App() {
  return (
    <div className="App">
      <First />
      <Second/>
      <Third/>
      <Fourth/>
    </div>
  );
}

export default App;
