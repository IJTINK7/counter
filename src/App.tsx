import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CounterWithSettings} from "./Counter/CounterWithSettings";

function App() {
  return (
    <div className="App">
     <CounterWithSettings/>
     <Counter/>
    </div>
  );
}

export default App;
