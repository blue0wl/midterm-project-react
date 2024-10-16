import React, { useState } from 'react';

function Add({ addItem, inventory }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [added, setAdd] = useState('');
  const [notif, setAlert] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [priceError, setPriceError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const idExists = inventory.some(item => item.id === id);
    if (idExists) {
      setError(`Notice: The ID "${id}" is already in use.`);
      return;
    }

    if (!category) {
      setAlert('Notice: Please select a category');
      return;
    }

    if (quantity <= 0) {
      setQuantityError('Error: Quantity must be a positive number greater than zero.');
      return;
    }

    if (price <= 0) {
      setPriceError('Error: Price must be a positive number greater than zero.');
      return;
    }

    addItem({ id, name, quantity: parseInt(quantity), price: parseFloat(price), category });
    setAdd(`Notice: Item "${name}" added successfully!`);
    setId('');
    setName('');
    setQuantity('');
    setPrice('');
    setCategory('');
    setError('');
    setAlert('');
    setQuantityError('');
    setPriceError('');
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
    if (value === '' || Number(value) <= 0) {
      setQuantityError('Error: Quantity must be a positive number greater than zero.');
    } else {
      setQuantityError('');
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    if (value === '' || Number(value) <= 0) {
      setPriceError('Error: Price must be a positive number greater than zero.');
    } else {
      setPriceError('');
    }
  };

  return (
    <div className="container-fluid">
      <div className="center-box">
    <div className="curved-rectangle">
    <div className="col-sm-10">
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label id="formGroupExampleInput" className="form-label">Enter Item ID</label>
        <input type="text" className="form-control" id="formGroupExampleInput" value={id} onChange={(e) => setId(e.target.value)} placeholder="Item ID" required />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <label id="formGroupExampleInput" className="form-label">Enter Item Name</label>
        <input type="text" className="form-control" id="formGroupExampleInput" value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" required />
        
        <label id="formGroupExampleInput" className="form-label">Enter Item Quantity</label>
        <input type="number" className="form-control" id="formGroupExampleInput" value={quantity} onChange={handleQuantityChange} placeholder="Quantity" required />
        {quantityError && <p style={{ color: 'red' }}>{quantityError}</p>}
        
        <label id="formGroupExampleInput" className="form-label">Enter Item Price</label>
        <input type="number" className="form-control" id="formGroupExampleInput" value={price.trim()} onChange={handlePriceChange} placeholder="Price" required />
        {priceError && <p style={{ color: 'red' }}>{priceError}</p>}
        
        <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="" disabled>Select a category</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {notif && <p style={{ color: 'red' }}>{notif}</p>}
        
        <button type="submit" className="btn btn-success">Add Item</button>
      </form>
      {added && <p style={{ color: 'lightgreen' }}>{added}</p>}
      </div>
    </div>
    </div>
    </div>
  );
}

export default Add;
