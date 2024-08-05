import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

interface Report {
  reportName: string;
  reportId: string;
  dateGenerated: string;
  status: string;
}

const ReportingPage: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [reportName, setReportName] = useState("");
  const [reportId, setReportId] = useState("");
  const [dateGenerated, setDateGenerated] = useState("");
  const [status, setStatus] = useState("");

  const handleAddReport = () => {
    const newReport: Report = { reportName, reportId, dateGenerated, status };
    setReports([...reports, newReport]);
    setReportName("");
    setReportId("");
    setDateGenerated("");
    setStatus("");
  };

  return (
    <div className="flex">
    <Sidebar/>
    <div className="min-h-screen bg-gray-100 w-full p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Reporting Page</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Report</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddReport();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Report Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={reportName}
              onChange={(e) => setReportName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Report ID</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={reportId}
              onChange={(e) => setReportId(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date Generated</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg"
              value={dateGenerated}
              onChange={(e) => setDateGenerated(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add Report
          </button>
        </form>
      </div>
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Report List</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Report Name</th>
              <th className="py-2 px-4 border-b">Report ID</th>
              <th className="py-2 px-4 border-b">Date Generated</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="py-2 px-4 border-b">{report.reportName}</td>
                <td className="py-2 px-4 border-b">{report.reportId}</td>
                <td className="py-2 px-4 border-b">{report.dateGenerated}</td>
                <td className="py-2 px-4 border-b">{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default ReportingPage;
