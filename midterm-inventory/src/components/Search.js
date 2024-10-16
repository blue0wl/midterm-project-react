import React, { useState } from 'react';

function Search({ inventory }) {
  const [id, setId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = inventory.find(item => item.id === id);
    if (item) {
      setFoundItem(item);
    } else {
      setFoundItem(null);
      setError(`Error: Item ID "${id}" not found!`);
    }
    setId('');
   
  };

  return (
    <div className="container-fluid">
    <div className="center-box">
  <div className="curved-rectangle">
  <div className="col-sm-10">
      <h3>Search Item</h3>
      <form onSubmit={handleSubmit}>
      <label id="formGroupExampleInput" className="form-label">Enter Item ID</label>
      <input type="text" className="form-control" value={id} onChange={(e) => setId(e.target.value.trim())} placeholder="Search item by ID..." required />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" class="btn btn-info">Search Item</button>
      </form>
      {foundItem && (
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
                <tr>
              <td>{foundItem.id}</td>
              <td>{foundItem.name}</td>
              <td>{foundItem.quantity}</td>
              <td>{foundItem.price}</td>
              <td>{foundItem.category}</td>
              </tr>
            </tbody>
            </table>
      )}
    </div>
    </div>
    </div>
    </div>
  );
}

export default Search;
