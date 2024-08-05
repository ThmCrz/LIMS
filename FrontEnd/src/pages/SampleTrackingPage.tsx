import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

interface Sample {
  sampleName: string;
  sampleId: string;
  dateReceived: string;
}

const SampleTracking: React.FC = () => {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [sampleName, setSampleName] = useState("");
  const [sampleId, setSampleId] = useState("");
  const [dateReceived, setDateReceived] = useState("");

  const handleAddSample = () => {
    const newSample: Sample = { sampleName, sampleId, dateReceived };
    setSamples([...samples, newSample]);
    setSampleName("");
    setSampleId("");
    setDateReceived("");
  };

  return (
    <div className="flex">
    <Sidebar/>
    <div className="min-h-screen bg-gray-100 w-full p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Sample Tracking Page</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Sample</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddSample();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Sample Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={sampleName}
              onChange={(e) => setSampleName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Sample ID</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={sampleId}
              onChange={(e) => setSampleId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date Received</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg"
              value={dateReceived}
              onChange={(e) => setDateReceived(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Sample
          </button>
        </form>
      </div>
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Sample List</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Sample Name</th>
              <th className="py-2 px-4 border-b">Sample ID</th>
              <th className="py-2 px-4 border-b">Date Received</th>
            </tr>
          </thead>
          <tbody>
            {samples.map((sample, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="py-2 px-4 border-b">{sample.sampleName}</td>
                <td className="py-2 px-4 border-b">{sample.sampleId}</td>
                <td className="py-2 px-4 border-b">{sample.dateReceived}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default SampleTracking;
