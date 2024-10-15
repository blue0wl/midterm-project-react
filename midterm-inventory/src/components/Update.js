import React, { useState } from 'react';

function Update({ updateItem, inventory }) {
  const [id, setId] = useState('');
  const [field, setField] = useState('');
  const [newValue, setNewValue] = useState('');
  const [error, setError] = useState('');
  const [update, setUpdated] = useState('');
  const [newval, setNewVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation for newValue
    if (newValue === '' || Number(newValue) <= 0) {
      setNewVal('Error: New value must be a positive number greater than zero.');
      return;
    }

    const item = inventory.find(item => item.id === id);
    if (item) {
      const oldValue = item[field];
      updateItem(id, field, parseFloat(newValue));
      setUpdated(`Notice: ${field.charAt(0).toUpperCase() + field.slice(1)} of Item ${item.name} updated from ${oldValue} to ${newValue}`);
    } else {
      setError(`Error: Item ID "${id}" not found!`);
      return;
    }

    setId('');
    setField('');
    setNewValue('');
    setError('');
    setNewVal('');
  };

  const handleNewValue = (e) => {
    const value = e.target.value;
    setNewValue(value);
    
    if (value === '' || Number(value) <= 0) {
      setNewVal('Error: New value must be a positive number greater than zero.');
    } else {
      setNewVal('');
    }
  };

  return (
    <div className="container-fluid">
      <div className="center-box">
    <div className="curved-rectangle">
    <div className="col-sm-10">
      <h3>Update Item</h3>
      <form onSubmit={handleSubmit}>
        <label id="formGroupExampleInput" className="form-label">Enter Item ID</label>
        <input type="text" className="form-control" id="formGroupExampleInput" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter item ID" required />
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <select className="form-select" value={field} onChange={(e) => setField(e.target.value)} required>
          <option value="" disabled>Select a field</option>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>

        <label id="formGroupExampleInput" className="form-label">Enter New Value</label>
        <input type="number" className="form-control" id="formGroupExampleInput" value={newValue} onChange={handleNewValue} placeholder="New Value" required />
        {newval && <p style={{ color: 'red' }}>{newval}</p>}

        <button type="submit" className="btn btn-primary">Update Item</button>
      </form>
      {update && <p style={{ color: 'lightgreen' }}>{update}</p>}
    </div>
    </div>
    </div>
    </div>
  );
}

export default Update;
