// Searchbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term); // Call handleSearch with the updated search term
  };

  return (
    <div className="input-group input-group-sm px-3">
      <input
        type="text"
        className="form-control form-control-sm bg-dark text-white"
        placeholder="Search"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        value={searchTerm}
        onChange={handleChange} // Add onChange event handler
      />
      <Link to="/search">
        <button
          className="btn btn-outline-secondary btn-sm bg-dark"
          id="button-addon1"
          type="button"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </Link>
    </div>
  );
};

export default Searchbar;
