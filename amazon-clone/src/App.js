import React from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';

function App() {
  return (
    <div className="app">
      {/* Header - Top Part of the App */}
      <Header />
      {/* Home - Rest of the body */}
      <Home />
    </div>
  );
}

export default App;
