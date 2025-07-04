import { useState } from "react";

function BusinessForm({ setBusinessData, setLoading }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !location) return alert("Both fields are required.");
    setLoading(true);
    const res = await fetch("http://localhost:5000/business-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location }),
    });
    const data = await res.json();
    setBusinessData({ ...data, name, location });
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded shadow"
    >
      <input
        type="text"
        placeholder="Business Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full p-2 border rounded"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-red-500 text-red-200 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default BusinessForm;
