import { useState } from "react";

export default function URLShortenerForm({ addShortURL }) {
  const [originalURL, setOriginalURL] = useState("");
  const [expiry, setExpiry] = useState("");
  const [shortcode, setShortcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!originalURL) return alert("Enter a URL!");

    const newURL = {
      originalURL,
      shortcode: shortcode || Math.random().toString(36).substring(2, 8),
      expiry: expiry ? new Date(Date.now() + expiry * 60000) : "No expiry",
      clicks: 0,
    };
    addShortURL(newURL);

    // Clear form
    setOriginalURL("");
    setExpiry("");
    setShortcode("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <input
        type="url"
        placeholder="Enter original URL"
        value={originalURL}
        onChange={(e) => setOriginalURL(e.target.value)}
        className="border p-2 m-2 rounded w-full"
        required
      />
      <input
        type="number"
        placeholder="Expiry in minutes (optional)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        className="border p-2 m-2 rounded w-full"
      />
      <input
        type="text"
        placeholder="Custom shortcode (optional)"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
        className="border p-2 m-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 m-2 rounded">
        Shorten URL
      </button>
    </form>
  );
}
