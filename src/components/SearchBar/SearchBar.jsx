import React from "react";

function SearchBar({ onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <input type="text" onChange={handleSearchChange} placeholder="Qidiruv" />
  );
}

export default SearchBar;
