import React from 'react';
import CounterWithHook from './components/CounterWithHook';
import CounterWithConnect from './components/CounterWithConnect';
import './App.css';

function App() {
    return (
        <div className="app">
            <CounterWithHook />
            <CounterWithConnect />
        </div>
    );
}

export default App;
