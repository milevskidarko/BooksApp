import React from "react";
import "./index.scss";

const BookList = ({ books, searchTerm, searchType }) => {
  const filteredBooks = books.filter((book) => {
    const searchProperty = book[searchType];
    return (
      searchProperty &&
      searchProperty.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <ul>
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
            <li key={index}>
              {beforeMatch}
              <span style={{ fontWeight: "bold", color: "red" }}>{match}</span>
              {afterMatch} by {book.author} ({book.genre})
            </li>
          );
        })
      ) : (
        <p>No results found</p>
      )}
    </ul>
  );
};

export default BookList;
