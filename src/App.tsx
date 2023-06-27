import './App.css';
import './input.css';

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export function App() {
    return (
        <>
          <Header/>
          <Outlet/>
        </>
    );
}

export default App;