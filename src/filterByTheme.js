import blogData from "./blogData";

function filterByTheme(theme) {
  // function createThemeList() {
  let usedBooksKeys = [];
  let themedBooks = [];

  console.log(`Here's all the cards with theme ${theme}`);
  for (const book of blogData) {
    const tags = book.tags;

    if (tags.includes(theme)) {
      if (!usedBooksKeys.includes(book.key)) {
        usedBooksKeys = [book.key, ...usedBooksKeys];
        themedBooks = [book, ...themedBooks];
      }
    }
  }
  console.log(themedBooks);
  return themedBooks;
}

export default filterByTheme;
