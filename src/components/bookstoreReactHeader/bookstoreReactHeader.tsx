import { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "./bookstoreReactHeader.module.css";

export const BookstoreReactHeader: FC = () => {
  return (
    <header className={style.header}>
      <nav>
        <NavLink className={style.link} to="/">Перейти к заданиям 1-2</NavLink>
        <NavLink className={style.link} to="/bookstore-react">Каталог книг</NavLink>
        <NavLink className={style.link} to="/bookstore-react/cart">Корзина</NavLink>
      </nav>
    </header>
  );
};
