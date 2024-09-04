import React, { useState, useEffect } from "react";
import {
  addMenuItem,
  editMenuItem,
  deleteMenuItem,
  getMenuItems,
  getOrders,
  deleteOrder, // Ensure you have deleteOrder function in firestoreService.js
} from "@/firebase/firestoreService";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

function AdminDashboard({ userId }) {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const items = await getMenuItems(userId);
      setMenuItems(items);
    };
    fetchMenuItems();
  }, [userId]);

  useEffect(() => {
    const fetchOrders = async () => {
      const fetchedOrders = await getOrders(userId);
      setOrders(fetchedOrders);
    };
    fetchOrders();
  }, [userId]);

  const handleAddItem = async () => {
    await addMenuItem(userId, newItem);
    setNewItem({ name: "", price: "" });
    const items = await getMenuItems(userId);
    setMenuItems(items);
  };

  const handleEditItem = async (id) => {
    await editMenuItem(userId, id, editingItem);
    setEditingItem(null);
    const items = await getMenuItems(userId);
    setMenuItems(items);
  };

  const handleDeleteItem = async (id) => {
    await deleteMenuItem(userId, id);
    const items = await getMenuItems(userId);
    setMenuItems(items);
  };

  const handleDeleteOrder = async (id) => {
    await deleteOrder(userId, id);
    const fetchedOrders = await getOrders(userId);
    setOrders(fetchedOrders);
  };

  const publicUrl = `${window.location.origin}/menu/${userId}`;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(publicUrl);
    alert("URL copied to clipboard!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>
      <Tabs defaultValue="orders">
        <TabsList className="flex justify-center mb-6 flex-wrap">
          <TabsTrigger
            className="px-4 py-2 mx-2 mb-2 bg-gray-200 rounded-lg"
            value="orders"
          >
            Orders
          </TabsTrigger>
          <TabsTrigger
            className="px-4 py-2 mx-2 mb-2 bg-gray-200 rounded-lg"
            value="menu"
          >
            Menu
          </TabsTrigger>
          <TabsTrigger
            className="px-4 py-2 mx-2 mb-2 bg-gray-200 rounded-lg"
            value="public-url"
          >
            Public URL
          </TabsTrigger>
        </TabsList>
        <TabsContent value="orders">
          <h3 className="text-xl font-bold mb-4">Orders</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2">Table Number</th>
                  <th className="px-4 py-2">Items</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="border px-4 py-2">{order.tableNumber}</td>
                    <td className="border px-4 py-2">
                      {order.items.map((item, index) => (
                        <div key={index}>
                          {item.name} x {item.quantity}
                        </div>
                      ))}
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleDeleteOrder(order.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="menu">
          <h3 className="text-xl font-bold mb-4">Menu Items</h3>
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="mb-2"
            />
            <Input
              type="text"
              placeholder="Item Price"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              className="mb-2"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleAddItem}
            >
              Add Item
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">
                      {editingItem && editingItem.id === item.id ? (
                        <Input
                          type="text"
                          value={editingItem.name}
                          onChange={(e) =>
                            setEditingItem({
                              ...editingItem,
                              name: e.target.value,
                            })
                          }
                        />
                      ) : (
                        item.name
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {editingItem && editingItem.id === item.id ? (
                        <Input
                          type="text"
                          value={editingItem.price}
                          onChange={(e) =>
                            setEditingItem({
                              ...editingItem,
                              price: e.target.value,
                            })
                          }
                        />
                      ) : (
                        item.price
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {editingItem && editingItem.id === item.id ? (
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded-lg"
                          onClick={() => handleEditItem(item.id)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                          onClick={() => setEditingItem(item)}
                        >
                          Edit
                        </button>
                      )}
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="public-url">
          <h3 className="text-xl font-bold mb-4">Public Menu URL</h3>
          <p>
            Share this URL with your customers so they can view and order from
            your menu:
          </p>
          <div className="flex items-center">
            <a
              href={publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 break-all"
            >
              {publicUrl}
            </a>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4"
              onClick={handleCopyUrl}
            >
              Copy URL
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AdminDashboard;
