import { useState } from "react";
// import { BadgeCheckIcon } from "@heroicons/react/solid";

const dummyOrders = [
  {
    orderId: 1,
    tableNumber: 5,
    items: [
      { name: "Margherita Pizza", price: 250 },
      { name: "Garlic Bread", price: 100 },
    ],
    total: 350,
  },
  {
    orderId: 2,
    tableNumber: 3,
    items: [
      { name: "Pasta Alfredo", price: 200 },
      { name: "Caesar Salad", price: 150 },
    ],
    total: 350,
  },
  {
    orderId: 3,
    tableNumber: 8,
    items: [
      { name: "Tandoori Chicken", price: 300 },
      { name: "Naan", price: 50 },
    ],
    total: 350,
  },
];

function Admin() {
  const [orders] = useState(dummyOrders);

  return (
    <div className="min-h-screen p-4 bg-gradient-to-r from-blue-50 to-purple-50">
      <h1 className="mb-8 text-4xl font-extrabold text-center text-gray-800">
        Admin Dashboard
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg ring-2 ring-indigo-300">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="p-6 mb-4 bg-gradient-to-r from-white to-gray-50 rounded-md shadow-sm"
          >
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center">
              <div className="flex items-center space-x-2">
                {/* <BadgeCheckIcon className="w-6 h-6 text-green-500" /> */}
                <span className="text-xl font-bold text-gray-700">
                  Order ID: {order.orderId}
                </span>
              </div>
              <div className="text-lg text-gray-600">
                Table Number:{" "}
                <span className="font-semibold text-gray-800">
                  {order.tableNumber}
                </span>
              </div>
              <div className="text-lg text-gray-600">
                Total:{" "}
                <span className="font-semibold text-gray-800">
                  ₹{order.total}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-lg font-semibold text-gray-700">
                Items:
              </span>
              <ul className="mt-2 ml-6 list-disc list-inside text-gray-600">
                {order.items.map((item, index) => (
                  <li key={index} className="py-1">
                    <span className="font-medium text-gray-800">
                      {item.name}
                    </span>{" "}
                    - ₹{item.price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
