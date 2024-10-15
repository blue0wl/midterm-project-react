import React, { useState, useEffect } from 'react';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({ id: '', name: '', quantity: 0, price: 0, category: '' });
  const [updateID, setUpdateID] = useState('');
  const [updateField, setUpdateField] = useState('quantity');
  const [updateValue, setUpdateValue] = useState(0);

  useEffect(() => {
    const storedInventory = localStorage.getItem('inventory');
    if (storedInventory) {
      setInventory(JSON.parse(storedInventory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);

  // Add new item to inventory
  const addItem = () => {
    setInventory([...inventory, newItem]);
    setNewItem({ id: '', name: '', quantity: 0, price: 0, category: '' });
  };

  // Update item in inventory
  const updateItem = () => {
    setInventory(inventory.map(item => 
      item.id === updateID ? { ...item, [updateField]: parseFloat(updateValue) } : item
    ));
    setUpdateID('');
    setUpdateValue(0);
  };

  // Remove item from inventory
  const removeItem = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      
      {/* Add Item Form */}
      <div>
        <h3>Add Item</h3>
        <input type="text" placeholder="ID" value={newItem.id} onChange={(e) => setNewItem({ ...newItem, id: e.target.value })} />
        <input type="text" placeholder="Name" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} />
        <input type="number" placeholder="Quantity" value={newItem.quantity} onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })} />
        <input type="number" placeholder="Price" value={newItem.price} onChange={(e) => setNewItem({ ...newItem, price: e.target.value })} />
        <input type="text" placeholder="Category" value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} />
        <button onClick={addItem}>Add Item</button>
      </div>
      
      {/* Update Item Form */}
      <div>
        <h3>Update Item</h3>
        <input type="text" placeholder="ID" value={updateID} onChange={(e) => setUpdateID(e.target.value)} />
        <select onChange={(e) => setUpdateField(e.target.value)}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <input type="number" placeholder="New Value" value={updateValue} onChange={(e) => setUpdateValue(e.target.value)} />
        <button onClick={updateItem}>Update Item</button>
      </div>
      
      {/* Inventory Table */}
      <h3>Inventory</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td><button onClick={() => removeItem(item.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
