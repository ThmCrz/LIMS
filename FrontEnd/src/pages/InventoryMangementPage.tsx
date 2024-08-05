import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

interface InventoryItem {
  itemName: string;
  itemId: string;
  quantity: number;
  dateAdded: string;
}

const InventoryManagementPage: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [dateAdded, setDateAdded] = useState("");

  const handleAddItem = () => {
    const newItem: InventoryItem = { itemName, itemId, quantity, dateAdded };
    setInventory([...inventory, newItem]);
    setItemName("");
    setItemId("");
    setQuantity(0);
    setDateAdded("");
  };

  return (
    <div className="flex">
    <Sidebar/>
    <div className="min-h-screen bg-gray-100 w-full p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Inventory Management Page</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Inventory Item</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddItem();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Item Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Item ID</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={itemId}
              onChange={(e) => setItemId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded-lg"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date Added</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg"
              value={dateAdded}
              onChange={(e) => setDateAdded(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Item
          </button>
        </form>
      </div>
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Inventory List</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Item Name</th>
              <th className="py-2 px-4 border-b">Item ID</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Date Added</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="py-2 px-4 border-b">{item.itemName}</td>
                <td className="py-2 px-4 border-b">{item.itemId}</td>
                <td className="py-2 px-4 border-b">{item.quantity}</td>
                <td className="py-2 px-4 border-b">{item.dateAdded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default InventoryManagementPage;
