import React, { Children } from 'react';
import logo from './logo.svg';
import './App.css';
import { ModulCard } from './components/ModulCard';
import { Lane } from './components/Lane';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
      <Outlet />
        

    </div>
  );
}

export default App;
