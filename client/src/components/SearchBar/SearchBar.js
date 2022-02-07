import React from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {
  const handleChange = () => {
    props.handleSearch();
  };
  return (
    <div className="searchBar">
      <form className="searchBar__form">
        <span className="searchBar-icon"></span>
        <input
          type="text"
          placeholder={props.placeholder}
          name="search"
          className="searchBar__input"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
