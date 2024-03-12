import React from 'react';
import './App.css';
import Sidebar from '../src/components/Sidebar';
import Navbar from '../src/components/Navbar';
import TopBar from '../src/components/TopBar';
import Dashboard from '../src/components/Dashboard';
import Graph from '../src/components/Graph';
function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <Navbar />
      <div className="d-flex flex-column vh-100">
      <TopBar />
        <div className="d-flex flex-row w-100">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
