import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import axios from "axios";
import GifSearch from "./GifSearch";

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=zbGOMeSxSuWZnlZ4hQiYDDFldJHrvnoF&rating=g`);
      setGifs(result.data.data.slice(0, 3));
    };
    fetchData();
  }, [searchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.search.value);
  };

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;
