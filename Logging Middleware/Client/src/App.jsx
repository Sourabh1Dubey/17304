import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import URLShortenerForm from "./URLShortenerForm";
import URLList from "./URLList";

function App() {
  const [urls, setUrls] = useState([]);

  const addShortURL = (url) => {
    setUrls([url, ...urls]);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">URL Shortener</h1>
      <URLShortenerForm addShortURL={addShortURL} />
      <URLList urls={urls} />
    </div>
  );
}

export default App
