import { useState } from "react";
import Loader from "./components/Loader";
import { ToastContainer, toast } from "react-toastify";
import { FaBell, FaUserCircle } from "react-icons/fa";
function App() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Business name is required";
    if (!location.trim()) errs.location = "Location is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const fetchBusinessData = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(
        "https://growthprobackend.onrender.com/business-data",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, location }),
        }
      );
      const json = await res.json();
      setData({ ...json, name, location });
    } catch (err) {
      toast.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const regenerateHeadline = async () => {
    const res = await fetch(
      `https://growthprobackend.onrender.com/regenerate-headline?name=${name}&location=${location}`
    );
    const json = await res.json();
    setData((prev) => ({ ...prev, headline: json.headline }));
    toast.success("SEO headline regenerated");
  };

  const copyHeadline = () => {
    navigator.clipboard.writeText(data.headline);
    toast.success("Headline copied to clipboard");
  };

  const resetForm = () => {
    setName("");
    setLocation("");
    setErrors({});
    setData(null);
  };

  return (
    <>
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
          <FaBell className="text-gray-500" />
          <FaUserCircle className="text-2xl text-gray-600" />
        </div>
      </header>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Form */}
          <div className="bg-white p-5 rounded shadow space-y-4">
            <h2 className="text-xl font-semibold">📘 Business Information</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-2 border rounded ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  placeholder="e.g., Cake & Co"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className={`w-full p-2 border rounded ${
                    errors.location ? "border-red-500" : ""
                  }`}
                  placeholder="e.g., Mumbai, India"
                />
                {errors.location && (
                  <p className="text-sm text-red-500">{errors.location}</p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={fetchBusinessData}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Analyze Business
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Loader */}
          {loading && <Loader />}

          {/* No data message */}
          {!loading && !data && (
            <div className="text-center text-gray-500 mt-10">
              <div className="text-4xl mb-2">🔍</div>
              <p className="font-medium text-lg">No Business Data Yet</p>
              <p className="text-sm">
                Enter your business information above to view analytics and
                insights
              </p>
            </div>
          )}

          {/* Display Results */}
          {data && !loading && (
            <>
              <div className="bg-white p-4 rounded shadow space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">{data.name}</h2>
                    <p className="text-gray-600">{data.location}</p>
                  </div>
                  <span className="text-green-500 text-sm font-medium">
                    ● Active
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-gray-500">Google Rating</p>
                    <p className="text-xl font-bold">{data.rating} ⭐</p>
                    <p className="text-sm text-gray-500">
                      Based on {data.reviews} reviews
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total Reviews</p>
                    <p className="text-xl font-bold">
                      {data.reviews}{" "}
                      <span className="text-green-600 text-sm">+12%</span>
                    </p>
                    <p className="text-sm text-gray-500">vs. last month</p>
                  </div>
                </div>
              </div>

              {/* SEO Headline Section */}
              <div className="bg-white p-4 rounded shadow space-y-2">
                <h3 className="text-lg font-semibold">
                  🎯 AI-Generated SEO Headline
                </h3>
                <blockquote className="text-xl font-medium text-blue-700">
                  "{data.headline}"
                </blockquote>
                <p className="text-sm text-gray-500">
                  Optimized for local search and engagement
                </p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <button
                    onClick={regenerateHeadline}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Regenerate Headline
                  </button>
                  <button
                    onClick={copyHeadline}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                  >
                    Copy Headline
                  </button>
                </div>
              </div>

              {/* Quick Insights */}
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">
                  📊 Quick Insights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="p-3 bg-green-100 rounded">
                    <p className="font-semibold text-green-700">
                      👍 Strong Rating
                    </p>
                    <p className="text-sm">
                      Your {data.rating}★ rating is above average
                    </p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded">
                    <p className="font-semibold text-blue-700">
                      📈 Growing Reviews
                    </p>
                    <p className="text-sm">
                      {data.reviews} reviews show good engagement
                    </p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded">
                    <p className="font-semibold text-purple-700">
                      🚀 SEO Ready
                    </p>
                    <p className="text-sm">
                      Your headline is optimized for local search
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
