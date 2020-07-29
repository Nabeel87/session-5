import React, {useState} from 'react';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext.js';


function App() {

  // let [count, SetCount] = useState(30)
  let countState = useState(0);

  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
        <h1>hie</h1>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
