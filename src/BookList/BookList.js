import React from "react";
import "./index.scss";
import { sortProperties } from "../constants";
import BookListItem from "../BookListItem/BookListItem";

const BookList = ({ books, searchTerm, searchType }) => {
  const filteredBooks = books.filter((book) => {
    const searchProperty = book[sortProperties[searchType]] || "";
    return searchProperty.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <ul className="book-list">
      {filteredBooks.length ? (
        filteredBooks.map((book, index) => {
          const propertyValue = book[searchType];
          const matchIndex = propertyValue
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase());
          const beforeMatch = propertyValue.substring(0, matchIndex);
          const match = propertyValue.substring(
            matchIndex,
            matchIndex + searchTerm.length
          );
          const afterMatch = propertyValue.substring(
            matchIndex + searchTerm.length
          );
          return (
            <BookListItem
              key={index}
              book={book}
              match={match}
              beforeMatch={beforeMatch}
              afterMatch={afterMatch}
            />
          );
        })
      ) : (
        <p className="no-results">No results found</p>
      )}
    </ul>
  );
};

export default BookList;
