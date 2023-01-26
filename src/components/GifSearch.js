import React, { useState } from "react";

const GifSearch = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(event);
    setSearchTerm("");
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        name="search"
        placeholder="Search for gifs"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
