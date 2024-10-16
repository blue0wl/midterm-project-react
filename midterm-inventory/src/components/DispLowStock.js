import React from 'react';

function DispLowStock({ inventory }) {
  const lowStockItems = inventory.filter(item => item.quantity <= 5);

  return (
    <div className="container-fluid">
    <div className="center-box">
  <div className="curved-rectangle">
  <div className="col-sm-10">
      <h3>Display Low Stock Items</h3>
      <table className="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
        {lowStockItems.length === 0 ? ( // Check if lowStockItems is empty
            <tr>
              <td colSpan="5">No entries at the moment</td>
            </tr>
          ) : (
          lowStockItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
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

export default DispLowStock;
