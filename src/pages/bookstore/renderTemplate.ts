export type TCard = {
  image: string;
  title: string;
  author: string;
  description: string;
  price: number;
};

type TBookInBasket = {
  title: string;
  price: number;
};

export function renderCardTemplate(
  templateId: string,
  data: TCard
): HTMLElement {
  const card = renderTemplate(templateId);

  const bookImage = card.querySelector(".book_image") as HTMLImageElement;
  bookImage.src = data.image;
  bookImage.alt = data.title;

  const title = card.querySelector(".book_title") as HTMLElement;
  title.textContent = data.title;

  const author = card.querySelector(".book_author") as HTMLElement;
  author.textContent = data.author;

  const description = card.querySelector(".book_description") as HTMLElement;
  description.textContent = data.description;

  const price = card.querySelector(".book_price") as HTMLElement;
  price.textContent = data.price.toString();

  return card;
}

export function renderBookInBasketTemplate(
  templateId: string,
  data: TBookInBasket
): HTMLElement {
  const content = renderTemplate(templateId);

  const title = content.querySelector(".book_in_basket_title") as HTMLElement;
  title.textContent = data.title;

  const price = content.querySelector(".book_in_basket_price") as HTMLElement;
  price.textContent = data.price.toString();
  return content;
}

export function renderTemplate(templateId: string): HTMLElement {
  const template = document.querySelector(
    `#${templateId}`
  ) as HTMLTemplateElement;

  const content = template.content.cloneNode(true) as HTMLElement;

  return content;
}
