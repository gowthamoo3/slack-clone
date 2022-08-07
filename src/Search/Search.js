import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <div className="search">
      <button className="search__button">
        <SearchIcon fontSize="small" className="search__icon" />{" "}
        <span className="search__text">Search Coders Buzz</span>
      </button>
    </div>
  );
}

export default Search;
