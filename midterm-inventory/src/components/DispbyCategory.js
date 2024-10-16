import React, { useState } from 'react';

function DispbyCategory({ inventory }) {
  const [category, setCategory] = useState('');

  const filteredItems = category ? inventory.filter(item => item.category === category) : [];

  return (
    <div className="container-fluid">
      <div className="center-box">
    <div className="curved-rectangle">
    <div className="col-sm-10">
      <h3>Display Items by Category</h3>
      <select class="btn-group dropend" data-bs-toggle="dropdown" aria-expanded="false" value={category} onChange={(e) => setCategory(e.target.value)}>

      <option value="" disabled>Select a field</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <table className="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <tr scope="row" key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))
        ) : (
            <tr>
                <td colSpan="4"> No entries at the moment</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    </div>
  );
}

export default DispbyCategory;
