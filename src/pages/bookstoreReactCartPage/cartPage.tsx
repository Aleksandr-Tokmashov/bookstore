import { FC } from "react";
import { useSelector, useDispatch } from "../../services/store";
import { removeBook, getBooksSelector } from "../../services/cartSlice";
import { CartCard } from "../../components/cartCard/cartCard";
import style from "./cartPage.module.css";

export const CartPage: FC = () => {
  const dispatch = useDispatch();

  const cartBooks = useSelector(getBooksSelector);

  const handleRemoveBook = (id: number | null) => {
    if (id) {
      dispatch(removeBook(id));
    }
  };

  if (cartBooks.length === 0) {
    return <div className={style.empty}>Корзина пуста</div>;
  }

  return (
    <div>
      <h1 className={style.pageName}>Корзина</h1>
      <div className="cards_container">
        {cartBooks.map((book) => (
          <CartCard
            key={book.id}
            title={book.title}
            author={null}
            description={book.body}
            price={book.price}
            onDelete={() => handleRemoveBook(book.id)}
          />
        ))}
      </div>
    </div>
  );
};
