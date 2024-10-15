import React, { useState } from 'react';

function Remove({ removeItem, inventory }) {
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const [removed, setRemove] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = inventory.find(item => item.id === id);
    if (item) {
        setRemove(`Notice: Item ${item.name} has been removed from the inventory`);
      removeItem(id);
      setId('');
    } else {
        setError(`Error: Item ID "${id}" not found!`);
    }
    
  };

  return (
    <div className="container-fluid">
      <div className="center-box">
    <div className="curved-rectangle">
    <div className="col-sm-10">
      <h3>Remove Item</h3>
      <form onSubmit={handleSubmit}>
      <label id="formGroupExampleInput" className="form-label">Enter Item ID</label>
      <input type="text" className="form-control" id="formGroupExampleInput" value={id} onChange={(e) => setId(e.target.value)} placeholder="Remove item by ID..." required />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" className="btn btn-danger">Remove Item</button>
      </form>
      {removed && <p style={{ color: 'lightgreen' }}>{removed}</p>}
    </div>
    </div>
    </div>
    </div>
  );
}

export default Remove;
