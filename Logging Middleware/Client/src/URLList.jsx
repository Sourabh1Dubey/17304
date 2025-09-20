export default function URLList({ urls }) {
  return (
    <div className="mt-4">
      {urls.map((url, index) => (
        <div key={index} className="p-2 border rounded my-2">
          <p>Original URL: {url.originalURL}</p>
          <p>Shortened URL: {url.shortcode}</p>
          <p>Expiry: {url.expiry.toString()}</p>
          <p>Clicks: {url.clicks}</p>
        </div>
      ))}
    </div>
  );
}
