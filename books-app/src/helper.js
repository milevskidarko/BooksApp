export const sortBooks = (books, setBooks, setSortMethod, sortType, sortProperties) => {
    const sortedBooks = [...books].sort((a, b) => {
        const propA = a[sortProperties[sortType]].toLowerCase();
        const propB = b[sortProperties[sortType]].toLowerCase();
        if (propA < propB) {
            return -1;
        } else if (propA > propB) {
            return 1;
        } else {
            return 0;
        }
    });

    setBooks(sortedBooks);
    setSortMethod(sortType);
};


export const onSearch = (term, type, bookData, setBooks) => {
    const filteredBooks = bookData.filter((book) => {
      if (type === "title") {
        return book.title.toLowerCase().includes(term.toLowerCase());
      } else if (type === "author") {
        return book.author.toLowerCase().includes(term.toLowerCase());
      } else if (type === "genre") {
        return book.genre.toLowerCase().includes(term.toLowerCase());
      }
      return true;
    });
    setBooks(filteredBooks);
  };