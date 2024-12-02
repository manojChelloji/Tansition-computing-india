// src/App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CustomerDetails from "./components/CustomerDetails";
import ChatFeed from "./components/ChatFeed";
import ActionLauncher from "./components/ActionLauncher";
import MessageBar from "./components/MessageBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <div className="main-content">
        <Navbar />
        <MessageBar />
        <CustomerDetails />
        <ChatFeed />
        <ActionLauncher />
      </div>
    </div>
  );
}

export default App;
