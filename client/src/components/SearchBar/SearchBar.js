import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ placeholder, handleSearch }) => {
  return (
    <div className="searchBar">
      <form className="searchBar__form">
        <span className="searchBar-icon"></span>
        <input
          type="text"
          placeholder={placeholder}
          name="search"
          className="searchBar__input"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
};

export default SearchBar;
