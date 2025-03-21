import { FC } from "react";
import { useSelector } from "../../services/store";
import { getBooksSelector } from "../../services/cartSlice";

interface CardProps {
  title: string | null;
  author: string | null;
  description: string | null;
  price: number | null;
  id: number;
  onAddToCart: () => void;
}

export const Card: FC<CardProps> = ({
  title,
  author,
  description,
  price,
  id,
  onAddToCart,
}) => {
  const booksInCart = useSelector(getBooksSelector);
  const isInCart = booksInCart.some((book) => book.id === id);

  return (
    <article className="book_card">
      <div className="image_container"></div>
      <h2 className="book_title">{title}</h2>
      <p className="book_author">{author}</p>
      <p className="book_description">{description}</p>
      <p className="book_price">Цена: {price} руб.</p>
      <button disabled={isInCart} className="card_button" onClick={onAddToCart}>
        {isInCart ? "Добавлено в корзину" : "Добавить в корзину"}
      </button>
    </article>
  );
};
