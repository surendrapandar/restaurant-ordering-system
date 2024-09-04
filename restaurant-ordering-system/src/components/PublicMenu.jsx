import React, { useState, useEffect } from "react";
import { getMenuItems, addOrder } from "@/firebase/firestoreService"; // Ensure you have addOrder function in firestoreService.js

const PublicMenu = ({ restaurantId }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [order, setOrder] = useState({ items: [], tableNumber: "" });

  useEffect(() => {
    const fetchMenuItems = async () => {
      const items = await getMenuItems(restaurantId);
      setMenuItems(items);
    };
    fetchMenuItems();
  }, [restaurantId]);

  const handleOrderChange = (item, quantity) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.items.find((i) => i.name === item.name);
      if (existingItem) {
        if (quantity === 0) {
          return {
            ...prevOrder,
            items: prevOrder.items.filter((i) => i.name !== item.name),
          };
        } else {
          return {
            ...prevOrder,
            items: prevOrder.items.map((i) =>
              i.name === item.name ? { ...i, quantity } : i
            ),
          };
        }
      } else {
        return {
          ...prevOrder,
          items: [...prevOrder.items, { ...item, quantity }],
        };
      }
    });
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    await addOrder(restaurantId, order);
    setOrder({ items: [], tableNumber: "" });
    alert("Order placed successfully!");
  };

  const totalAmount = order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-white font-bold mb-4">Menu</h2>
      <form onSubmit={handleSubmitOrder}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-md flex flex-col items-center     "
            >
              <h3 className="text-lg text-white font-semibold mb-2">
                {item.name}
              </h3>
              <p className="text-white mb-2">₹{item.price}</p>
              <div className="flex items-center mb-2">
                <button
                  type="button"
                  className="bg-white text-black px-2 py-1 rounded-l"
                  onClick={() =>
                    handleOrderChange(
                      item,
                      (order.items.find((i) => i.name === item.name)
                        ?.quantity || 0) - 1
                    )
                  }
                >
                  -
                </button>
                <input
                  type="text"
                  readOnly
                  value={
                    order.items.find((i) => i.name === item.name)?.quantity || 0
                  }
                  className="w-12 text-center border-t border-b"
                />
                <button
                  type="button"
                  className="bg-white text-black px-2 py-1 rounded-r"
                  onClick={() =>
                    handleOrderChange(
                      item,
                      (order.items.find((i) => i.name === item.name)
                        ?.quantity || 0) + 1
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Table Number"
            value={order.tableNumber}
            onChange={(e) =>
              setOrder({ ...order, tableNumber: e.target.value })
            }
            className="border p-2 mb-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold text-white">
            Total: ₹{totalAmount}
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded-lg"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PublicMenu;
