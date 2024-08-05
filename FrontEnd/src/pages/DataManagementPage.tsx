import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

interface DataEntry {
  dataName: string;
  dataId: string;
  dateAdded: string;
}

const DataManagementPage: React.FC = () => {
  const [dataEntries, setDataEntries] = useState<DataEntry[]>([]);
  const [dataName, setDataName] = useState("");
  const [dataId, setDataId] = useState("");
  const [dateAdded, setDateAdded] = useState("");

  const handleAddDataEntry = () => {
    const newDataEntry: DataEntry = { dataName, dataId, dateAdded };
    setDataEntries([...dataEntries, newDataEntry]);
    setDataName("");
    setDataId("");
    setDateAdded("");
  };

  return (
    <div className="flex">
    <Sidebar/>
    <div className="min-h-screen bg-gray-100 w-full p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Data Management Page</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Data Entry</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddDataEntry();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Data Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={dataName}
              onChange={(e) => setDataName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Data ID</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={dataId}
              onChange={(e) => setDataId(e.target.value)}
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
            Add Data Entry
          </button>
        </form>
      </div>
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Data Entries List</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Data Name</th>
              <th className="py-2 px-4 border-b">Data ID</th>
              <th className="py-2 px-4 border-b">Date Added</th>
            </tr>
          </thead>
          <tbody>
            {dataEntries.map((dataEntry, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="py-2 px-4 border-b">{dataEntry.dataName}</td>
                <td className="py-2 px-4 border-b">{dataEntry.dataId}</td>
                <td className="py-2 px-4 border-b">{dataEntry.dateAdded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default DataManagementPage;
