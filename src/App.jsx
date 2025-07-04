import { useState } from "react";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";

function App() {
  const [businessData, setBusinessData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold bg-red-500 text-center">
          Local Business Dashboard
        </h1>
        <BusinessForm
          setBusinessData={setBusinessData}
          setLoading={setLoading}
        />
        {loading && <p className="text-center">Loading...</p>}
        {businessData && (
          <BusinessCard data={businessData} setBusinessData={setBusinessData} />
        )}
      </div>
    </div>
  );
}

export default App;
