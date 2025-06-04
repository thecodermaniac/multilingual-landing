import React from 'react';
import './i18n';
import './index.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="app">
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
