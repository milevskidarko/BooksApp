import React from "react";
import "./index.scss";
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
    <form className="book-search-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="searchTerm">Search:</label>
        <input
          type="text"
          id="searchTerm"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
      <div>
        <label htmlFor="searchType">Search By:</label>
        <select
          id="searchType"
          value={searchType}
          onChange={handleSearchTypeChange}
          onClick={() => sortBooks(searchType)}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

export default BookSearchForm;
