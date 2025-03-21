import { renderBookInBasketTemplate } from "./renderTemplate";

// Функция позволяет добавить книгу в корзину. Параметры: html-элемент книги, html-элемент корзины, в которую помещается книга
// Функция работает без использования React. В данном проекте данная функция использована внутри компонента, однако  сам компонент нужен
// для роутинга страницы, тогда как сама логика работы описана здесь, с пощью JS
export const addToBasket = (book: HTMLElement | null, basket: HTMLElement | null) => {
    const button = book?.querySelector('.card_button');
    const price = Number(book?.querySelector('.book_price')?.textContent)
    const title = book?.querySelector('.book_title')?.textContent as string;

    const bookInBasket = renderBookInBasketTemplate('books_in_basket_template', {title, price});

    button?.addEventListener('click', () => {
        basket?.appendChild(bookInBasket)
        console.log(price)
    })
}