import React, { useState } from 'react';

function CartPage() {
  const [items, setItems] = useState([]);

  return (
    <div>
      {items.length > 0 ? (
        <div>
          <h1>My Cart</h1>
          <ul>
            {items.map((item, index) => (
              <li key={item}>
                {item}
                <button onClick={() => setItems(items.filter((item, i) => i !== index))}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1>Your cart is empty</h1>
        </div>
      )}
    </div>
  );
}

export default CartPage;
