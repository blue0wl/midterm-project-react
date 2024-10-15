import React, { useState } from 'react';

function Sort({ inventory }) {
  const [field, setField] = useState('');
  const [order, setOrder] = useState('');

  const sortedItems = [...inventory].sort((a, b) => {
    if (field === 'quantity' || field === 'price') {
      if (order === 'ascending') {
        return a[field] - b[field];
      } else {
        return b[field] - a[field];
      }
    }
    return 0;
  });

  return (
    <div className="container-fluid">
    <div className="center-box">
  <div className="curved-rectangle">
  <div className="col-sm-10">
      <h3>Sort Items</h3>
      <select class="form-select" value={field} onChange={(e) => setField(e.target.value)}>
      <option value="" disabled>Select a field</option>
        <option value="quantity">Quantity</option>
        <option value="price">Price</option>
      </select>
      <select class="form-select" value={order} onChange={(e) => setOrder(e.target.value)}>
      <option value="" disabled>Select sorting</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      <table class="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {inventory.length === 0 ? ( // Check if inventory is empty
            <tr>
              <td colSpan="4">No entries at the moment</td>
            </tr>
          ) : sortedItems.length === 0 ? ( // Check if no items are sorted
            <tr>
              <td colSpan="4">No items to display based on selected criteria</td>
            </tr>
          ) : (
          sortedItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))
        )}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Sort;
