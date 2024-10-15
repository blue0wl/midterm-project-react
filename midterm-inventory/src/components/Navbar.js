import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Navbar() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <div className="d-flex align-items-center">
        <img src="/inv_logo.png" alt="Inventory Logo" />
        </div>
          <div className="navbar-brand"><strong>Inventory Management System</strong></div>
         
          
          
          {/* Navbar Toggler for responsive behavior */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

         
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/add-item">Add Item</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/update-item">Update Item</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/remove-item">Remove Item</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/display-items-by-category">Display by Category</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/display-all-items">Display All Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search-item">Search Item</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sort-items">Sort Items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/display-low-stock-items">Low Stock Items</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

