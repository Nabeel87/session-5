import React from 'react';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext.js';


function App() {
  return (
    <CounterContext.Provider value={50}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
