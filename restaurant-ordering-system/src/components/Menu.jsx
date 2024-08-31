import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const dummyMenu = [
  { id: 1, name: "Margherita Pizza", price: 250 },
  { id: 2, name: "Pasta Alfredo", price: 200 },
  { id: 3, name: "Caesar Salad", price: 150 },
  { id: 4, name: "Garlic Bread", price: 100 },
];

function Menu() {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleSelectItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const handlePlaceOrder = () => {
    // Here you would send the order to the backend
    console.log("Order placed:", selectedItems);
    navigate("/order-success");
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-center">Menu</h2>
      <ul className="mb-6 space-y-4">
        {dummyMenu.map((item) => (
          <li key={item.id} className="flex items-center justify-between">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
            <Button onClick={() => handleSelectItem(item)}>Add</Button>
          </li>
        ))}
      </ul>
      {selectedItems.length > 0 && (
        <div>
          <h3 className="mb-4 text-xl font-bold">Selected Items:</h3>
          <ul className="mb-4 space-y-2">
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <Button onClick={handlePlaceOrder}>Place Order</Button>
        </div>
      )}
    </div>
  );
}

export default Menu;
