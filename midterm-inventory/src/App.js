import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React, { useState,  useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from './components/Add';
import Update from './components/Update';
import Remove from './components/Remove';
import DispbyCategory from './components/DispbyCategory';
import DispAll from './components/DispAll';
import Search from './components/Search';
import Sort from './components/Sort';
import DispLowStock from './components/DispLowStock';
import Navbar from './components/Navbar';  
import Inventory from './components/Inventory';

function App() {
  const [inventory, setInventory] = useState(() => {
    // Load from localStorage, or initialize empty array
    const savedInventory = localStorage.getItem("inventory");
    return savedInventory ? JSON.parse(savedInventory) : [];
  });

  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  // Save inventory to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  const updateItem = (id, field, newValue) => {
    const updatedInventory = inventory.map(item => {
      if (item.id === id) {
        return { ...item, [field]: newValue };
      }
      return item;
    });
    setInventory(updatedInventory);
  };

  const removeItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };


  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/add-item" element={<Add addItem={addItem} inventory={inventory} />} />
          <Route path="/update-item" element={<Update updateItem={updateItem} inventory={inventory} />} />
          <Route path="/remove-item" element={<Remove removeItem={removeItem} inventory={inventory} />} />
          <Route path="/display-items-by-category" element={<DispbyCategory inventory={inventory} />} />
          <Route path="/display-all-items" element={<DispAll inventory={inventory} />} />
          <Route path="/search-item" element={<Search inventory={inventory} />} />
          <Route path="/sort-items" element={<Sort inventory={inventory} />} />
          <Route path="/display-low-stock-items" element={<DispLowStock inventory={inventory} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
