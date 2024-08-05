import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

interface UserAccount {
  username: string;
  email: string;
  role: string;
  dateCreated: string;
}

const UserAccountManagementPage: React.FC = () => {
  const [userAccounts, setUserAccounts] = useState<UserAccount[]>([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [dateCreated, setDateCreated] = useState("");

  const handleAddUserAccount = () => {
    const newUserAccount: UserAccount = { username, email, role, dateCreated };
    setUserAccounts([...userAccounts, newUserAccount]);
    setUsername("");
    setEmail("");
    setRole("");
    setDateCreated("");
  };

  return (
    <div className="flex">
    <Sidebar/>
    <div className="min-h-screen bg-gray-100 w-full p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Account Management Page</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New User Account</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddUserAccount();
          }}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date Created</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg"
              value={dateCreated}
              onChange={(e) => setDateCreated(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Add User Account
          </button>
        </form>
      </div>
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">User Accounts List</h2>
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Date Created</th>
            </tr>
          </thead>
          <tbody>
            {userAccounts.map((user, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="py-2 px-4 border-b">{user.username}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.role}</td>
                <td className="py-2 px-4 border-b">{user.dateCreated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default UserAccountManagementPage;
