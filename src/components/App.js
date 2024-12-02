// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import CustomerDetails from './components/CustomerDetails';
import ChatFeed from './components/ChatFeed';
import ActionLauncher from './components/ActionLauncher';

import './App.css';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <div className="main-content">
        <CustomerDetails />
        <ChatFeed />
        <ActionLauncher />
      </div>
    </div>
  );
}

export default App;
