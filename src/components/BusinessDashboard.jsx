import React, { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

export default function BusinessDashboard() {
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnalyze = () => {
    if (businessName.trim() && location.trim()) {
      setSubmitted(true);
    }
  };

  const handleClear = () => {
    setBusinessName("");
    setLocation("");
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png"
            alt="Logo"
            className="w-6 h-6"
          />
          <div>
            <h1 className="font-bold text-lg text-blue-600">GrowthProAI</h1>
            <p className="text-xs text-gray-500">Local Business Dashboard</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* <FaBell className="text-gray-500" /> */}
          <FaUserCircle className="text-2xl text-gray-600" />
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-3xl mx-auto mt-10 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Business Analytics Dashboard
        </h2>
        <p className="text-gray-500 mt-1">
          Enter your business information to view SEO insights and Google
          Business data
        </p>

        {/* Form */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md border">
          <h3 className="text-xl font-semibold mb-4 text-left flex items-center gap-2">
            <FaSearch className="text-blue-600" />
            Business Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="e.g., Cake & Co"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="p-2 border rounded-md w-full"
              required
            />
            <input
              type="text"
              placeholder="e.g., Mumbai, India"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2 border rounded-md w-full"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleAnalyze}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Analyze Business
            </button>
            <button
              onClick={handleClear}
              className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Result Section */}
        {!submitted ? (
          <div className="mt-10 text-gray-500">
            <div className="flex justify-center mb-2">
              <FaSearch className="text-4xl" />
            </div>
            <p className="text-sm font-medium">No Business Data Yet</p>
          </div>
        ) : (
          <div className="mt-10 text-green-600 font-medium">
            Showing results for <strong>{businessName}</strong> in{" "}
            <strong>{location}</strong>
          </div>
        )}
      </main>
    </div>
  );
}
