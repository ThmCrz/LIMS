// Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom"; // If you are using react-router for navigation

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col mt-6">
      <div className="flex flex-col gap-5 items-center p-2">
        <Link to="/Sample Tracking" className="vertical-line2 flex flex-col text-gray-700 bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg bg-clip-border rounded-xl w-full h-12 p-4 hover:bg-gray-100 transition-all justify-center">
          Sample Tracking
        </Link>
        <Link to="/Data Management" className="vertical-line2 flex flex-col text-gray-700 bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg bg-clip-border rounded-xl w-full h-12 p-4 hover:bg-gray-100 transition-all justify-center">
          Data Management
        </Link>
        <Link to="/Inventory Management" className="vertical-line2 flex flex-col text-gray-700 bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg bg-clip-border rounded-xl w-full h-12 p-4 hover:bg-gray-100 transition-all justify-center">
          Inventory Management
        </Link>
        <Link to="/User Account Management" className="vertical-line2 flex flex-col text-gray-700 bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg bg-clip-border rounded-xl w-full h-12 p-4 hover:bg-gray-100 transition-all justify-center">
          User Account Management
        </Link>
        <Link to="/Reporting" className="vertical-line2 flex flex-col text-gray-700 bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg bg-clip-border rounded-xl w-full h-12 p-4 hover:bg-gray-100 transition-all justify-center">
          Reporting
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
