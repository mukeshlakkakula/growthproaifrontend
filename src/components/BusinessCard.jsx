function BusinessCard({ data, setBusinessData }) {
  const handleRegenerate = async () => {
    const res = await fetch(
      `https://growthprobackend.onrender.com/regenerate-headline?name=${data.name}&location=${data.location}`
    );
    const newHeadline = await res.json();
    setBusinessData({ ...data, headline: newHeadline.headline });
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <p>
        <strong>Rating:</strong> {data.rating}
      </p>
      <p>
        <strong>Reviews:</strong> {data.reviews}
      </p>
      <p>
        <strong>SEO Headline:</strong> {data.headline}
      </p>
      <button
        onClick={handleRegenerate}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Regenerate SEO Headline
      </button>
    </div>
  );
}

export default BusinessCard;
