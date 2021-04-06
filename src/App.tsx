import React from 'react';
import { NavBar } from './components/navbar/NavBar';
import { StorePage } from './pages/store/StorePage';

function App() {
  return (
    <div className="app">
      <NavBar />
      <StorePage />
    </div>
  );
}

export default App;
