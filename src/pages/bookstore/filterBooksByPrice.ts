type TBook = {
  title: string;
  price: number
}

const books = [
  { title: "Книга 1", price: 300 },
  { title: "Книга 2", price: 500 },
  { title: "Книга 3", price: 200 },
  { title: "Книга 4", price: 450 },
  { title: "Книга 5", price: 350 },
];

function filterBooksByPrice(books: TBook[], maxPrice: number) {
  return books.filter(book => book.price < maxPrice);
}

export const cheapBooks = filterBooksByPrice(books, 400);