import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(items);
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  if (cart.length === 0)
    return <h2 className="text-center mt-20 text-xl">Your cart is empty 😢</h2>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Your Cart</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6">

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-4 mb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-blue-600 font-bold">₹ {item.price}</p>
              </div>
            </div>

            
            <button
              onClick={() => removeItem(index)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Cart;
