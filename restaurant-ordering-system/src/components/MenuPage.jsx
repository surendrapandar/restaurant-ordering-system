import React, { useState } from "react";

const dummyMenu = [
  { id: 1, name: "Pizza Margherita", price: "$10" },
  { id: 2, name: "Spaghetti Carbonara", price: "$12" },
  { id: 3, name: "Caesar Salad", price: "$8" },
  { id: 4, name: "Grilled Chicken", price: "$15" },
  { id: 5, name: "Tiramisu", price: "$7" },
];

function MenuPageComponent() {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const placeOrder = () => {
    // Handle order placement logic
    alert("Your order has been placed successfully!");
    setOrder([]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyMenu.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.price}</p>
            <button
              onClick={() => addToOrder(item)}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Add to Order
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">Your Order</h3>
        {order.length === 0 ? (
          <p className="text-gray-600 mt-2">No items in your order.</p>
        ) : (
          <ul className="list-disc ml-5 mt-2">
            {order.map((item, index) => (
              <li key={index} className="text-lg">
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
        )}
        {order.length > 0 && (
          <button
            onClick={placeOrder}
            className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuPageComponent;
