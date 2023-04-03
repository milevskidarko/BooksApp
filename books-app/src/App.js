import React, { useState, useEffect } from "react";
import "./App.css";
import BookList from "./BookList/BookList";
import BookSearchForm from "./BookSearchForm/BookSearchForm";
import bookData from "./listofbooks.json";
import { sortBooks, onSearch } from "./helper.js";
import { sortProperties } from './constants'

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [sortMethod, setSortMethod] = useState("author");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  useEffect(() => {
    setBooks(bookData);
  }, []);

  return (
    <>
      <BookSearchForm
        onSearch={(term, type) => onSearch(term, type, bookData, setBooks)}
        searchTerm={searchTerm}
        searchType={searchType}
        handleSearchTermChange={handleSearchTermChange}
        handleSearchTypeChange={handleSearchTypeChange}
        sortMethod={sortMethod}
        sortBooks={(sortType) =>
          sortBooks(books, setBooks, setSortMethod, sortType, sortProperties)
        }
      />
      <BookList books={books} searchTerm={searchTerm} searchType={searchType} />
    </>
  );
};

export default App;
