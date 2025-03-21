import { FC, useRef, useEffect } from "react";
import { renderCardTemplate, renderTemplate, TCard } from "./renderTemplate";

import { cheapBooks } from "./filterBooksByPrice";
import { startCountdown } from "./timer";
import { addToBasket } from "./basket";

// Проверка функции фильтрации книг
console.log('Книги дешевле 400 рублей: ', cheapBooks)

// Проверка таймера
startCountdown(0.1);

const cardData: TCard = {
  image: "./images/onegin.jpg",
  title: "Евгений Онегин",
  author: "А. С. Пушкин",
  description: `Роман в стихах, рассказывающий о жизни молодого аристократа Онегина, 
его отношениях с окружающими и глубоких чувствах, которые меняют судьбы героев.`,
  price: 999,
};

export const BookstorePage: FC = () => {
  // Код ниже используется в таком виде исключительно для того, чтобы оставить html разметку внутри html документа (т.к задание именно на вёрстку)
  // В любой другой ситуации разметка и логика работы была бы переписана внутри этого компонента

  const containerRef = useRef<HTMLDivElement>(null);
  const main = renderTemplate("main_template");
  const cardsContainer = main.querySelector(".cards_container");
  const basket = main.querySelector('.books_in_basket') as HTMLElement;

  useEffect(() => {
    if (containerRef.current) {
      for (let i = 0; i < 6; i++) {
        const cardElement = renderCardTemplate("book_card_template", cardData);
        addToBasket(cardElement, basket)
        cardsContainer?.appendChild(cardElement);
      }
      containerRef.current.appendChild(main);
    }
  });

  return <div ref={containerRef}></div>;
};
