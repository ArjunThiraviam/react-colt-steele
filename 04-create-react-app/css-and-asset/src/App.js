import React from 'react';
import './App.css'; 
import Dog from './Dog.js';

function App() {
  return (
    <div className="App">
      <Dog />
      <p>I am in another div not in dog component</p>
    </div>
  );
}

export default App;
