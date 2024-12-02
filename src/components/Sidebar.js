// src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import { FaUsers, FaBoxes, FaList, FaCog, FaStar, FaGift } from 'react-icons/fa';
import { AiOutlineAudit, AiOutlineLink } from 'react-icons/ai';
import { BsDiagram3, BsTools } from 'react-icons/bs'; // Replaced with BsDiagram3 for workflow


function Sidebar() {
  const [expandMenu, setExpandMenu] = useState({});

  const toggleMenu = (menu) => {
    setExpandMenu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="logos">
        <img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_2fd15057f038305cb59e891b51f1e87a/risk-hawk.png" alt="Risk Hawk Logo" />
        <h1>RISK HAWK</h1>
        </div>
        <h2>Manage Your Exposures</h2>
      </div>
      <nav className="menu">
        <div className="menu-item" onClick={() => toggleMenu('audit')}>
          <AiOutlineAudit />
          <span>Internal Audit</span>
        </div>

        <div className="menu-item">
          <AiOutlineAudit />
          <span>UAT Testing</span>
        </div>

        <div className="menu-item">
          <AiOutlineLink />
          <span>Intract</span>
        </div>

        <div className="menu-item">
          <FaUsers />
          <span>Queue</span>
        </div>

        <div className="menu-item">
          <BsDiagram3 /> {/* Updated workflow icon */}
          <span>Workflow</span>
        </div>

        <div className="menu-item">
          <FaCog />
          <span>Admin</span>
        </div>

        <div className="menu-item">
          <FaBoxes />
          <span>Asset</span>
        </div>

        <div className="menu-item">
          <FaUsers />
          <span>Parent</span>
        </div>

        <div className="menu-item">
          <FaList />
          <span>Option One</span>
        </div>

        <div className="menu-item">
          <FaList />
          <span>Option Two</span>
        </div>

        <div className="menu-item">
          <BsTools />
          <span>All Accessories</span>
        </div>

        <div className="menu-item">
          <AiOutlineAudit />
          <span>Internal Audit</span>
        </div>

        <div className="menu-item">
          <FaStar />
          <span>Decorating</span>
        </div>

        <div className="menu-item">
          <FaGift />
          <span>Presenting</span>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
