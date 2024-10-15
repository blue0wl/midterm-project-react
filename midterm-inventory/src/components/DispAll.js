import React from 'react';

function DispAll({ inventory }) {
  return (
    <div className="container-fluid">
    <div className="center-box">
  <div className="curved-rectangle">
  <div className="col-sm-10">
      <h3>Display All Items</h3>
      <table class="table table-dark table-striped text-center">
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
        {inventory.length === 0 ? ( // Check if inventory is empty
       <tr>
       <td colSpan="5"> No entries at the moment</td>
   </tr> ) : (
          inventory.map(item => (
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

export default DispAll;
