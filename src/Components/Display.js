import React from 'react';

const Display = ({ items, onDeleteItem }) => {
  return (
    <div>
      <h2>Electronics Items</h2>
      <ul>
        {items
          .filter((item) => item.category === 'Electronics')
          .map((item) => (
            <li key={item.pid}>
              Product ID: {item.pid}, Name: {item.pname}, Selling Price: {item.sprice}
              <button onClick={() => onDeleteItem(item.pid)}>Delete</button>
            </li>
          ))}
      </ul>

      <h2>Food Items</h2>
      <ul>
        {items
          .filter((item) => item.category === 'Food')
          .map((item) => (
            <li key={item.pid}>
              Product ID: {item.pid}, Name: {item.pname}, Selling Price: {item.sprice}
              <button onClick={() => onDeleteItem(item.pid)}>Delete</button>
            </li>
          ))}
      </ul>

      <h2>Skincare Items</h2>
      <ul>
        {items
          .filter((item) => item.category === 'skincare')
          .map((item) => (
            <li key={item.pid}>
              Product ID: {item.pid}, Name: {item.pname}, Selling Price: {item.sprice}
              <button onClick={() => onDeleteItem(item.pid)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Display;
