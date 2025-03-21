import { FC } from "react";
import { NavLink } from "react-router-dom";
import style from "./bookstoreHeader.module.css";

export const BookstoreHeader: FC = () => {
  return (
    <header className={style.header}>
      <nav>
        <NavLink className={style.link} to="/bookstore-react">Перейти к заданию 3</NavLink>
      </nav>
    </header>
  );
};
