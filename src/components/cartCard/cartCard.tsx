import { FC } from "react";

interface CartCardProps {
  title: string | null;
  author: string | null;
  description: string | null;
  price: number | null;
  onDelete: () => void; 
}

export const CartCard: FC<CartCardProps> = ({
  title,
  author,
  description,
  price,
  onDelete,
}) => {
  return (
    <article className="book_card">
      <div className="image_container"></div>
      <h2 className="book_title">{title}</h2>
      {author && <p className="book_author">{author}</p>}
      <p className="book_description">{description}</p>
      <p className="book_price">Цена: {price} руб.</p>
      <button className="card_button" onClick={onDelete}>
        Удалить из корзины
      </button>
    </article>
  );
};