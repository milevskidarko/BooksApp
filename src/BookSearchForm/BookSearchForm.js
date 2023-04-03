import React from "react";
import "./index.scss";
import { searchTypeOptions } from "../constants";

const BookSearchForm = ({
  onSearch,
  searchTerm,
  searchType,
  handleSearchTermChange,
  handleSearchTypeChange,
  sortBooks,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm, searchType);
  };

  return (
    <form className={"book-search-form"} onSubmit={handleSubmit}>
      <div className="searchTermBox">
        <label htmlFor="searchTerm" className={"search-label"}>
          Search:
        </label>
        <input
          type="text"
          id="searchTerm"
          className={"search-input"}
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <div>
        <label htmlFor="searchType" className={"search-label"}>
          Search By:
        </label>
        <select
          id="searchType"
          className={"search-select"}
          value={searchType}
          onChange={handleSearchTypeChange}
        >
          {searchTypeOptions.map((option) => (
            <option
              key={option.value}
              onClick={() => sortBooks(option.value)}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className={"search-button"}>
        Search
      </button>
    </form>
  );
};

export default BookSearchForm;
