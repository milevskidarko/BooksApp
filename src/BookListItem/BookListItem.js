const BookListItem = ({ book, match, beforeMatch, afterMatch, index }) => {
  return (
    <li key={index} className="book-item">
      {beforeMatch}
      <span className="highlight">{match}</span>
      {afterMatch} by <span className="author">{book.author}</span> (
      <span className="genre">{book.genre}</span>)
    </li>
  );
};
export default BookListItem;
