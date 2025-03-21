import { FC, useEffect } from "react";
import style from "./bookstoreReact.module.css";
import { Card } from "../../components/card/card";
import {
  getBooksSelector,
  isLoadingSelector,
  getErrorSelector,
  getBooks,
  TBookWithPrice,
} from "../../services/booksSlice";
import { useSelector, useDispatch } from "../../services/store";
import { addBook } from "../../services/cartSlice";

export const BookstoreReactPage: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const isLoading = useSelector(isLoadingSelector);
  const books: TBookWithPrice[] = useSelector(getBooksSelector);
  const error = useSelector(getErrorSelector);

  if (isLoading) {
    return <div className={style.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={style.error}>Ошибка: {error}</div>;
  }

  function addToCart(book: TBookWithPrice) {
    dispatch(addBook(book));
  }

  return (
    <>
      <h1 className={style.pageName}>Каталог книг</h1>
      <div className="cards_container">
        {books.map((book) => (
          <Card
            title={book.title}
            description={book.body}
            onAddToCart={() => addToCart(book)}
            id={book.id}
            price={book.price}
            author={null}
          ></Card>
        ))}
      </div>
    </>
  );
};
