# Тестовое задание "Книжный магазин"

## Инструкция по запуску
Склонируйте репозиторий к себе на компьютер командой:
```
git clone git@github.com:Aleksandr-Tokmashov/bookstore.git
```

Установите зависимости:
```
npm i
```

Запустите приложение на локальном сервере:
```
npm run start
```

Перейдите по адресу [http://localhost:3000](http://localhost:3000) чтобы посмотреть приложение в браузере.

## Навигация по сайту
Маршрутизация реализована с помощью React Router

Маршруты (относительно корневого url):
- ```/``` — страница по заданиям 1 и 2. Содержит Заголовок страницы, корзину, карточки книг и кнопку для перехода к заданию 3. \
  Страница реализована с помощью шаблонов внутри html, css стилей из файла index.css, а так же с помощью чистого JavaScript \
  (с типизацией TS). Использование React обусловлено использованием маршрутизации для разъединения заданий 1-2 и 3.
- ```/bookstore-react``` — страница по заданиям 3.1 и 3.3. Содержит каталог карточек, подгруженный с API. Были использованы React, Redux, \
  Redux Toolkit
- ```/bookstore-react/cart``` — страница по заданию 3.2. Содержит коризну карточек, добавленных из каталога. Были использованы React, Redux

## Пояснения по заданиям
### Задание 1
Html разметка находится в public/index.html в тегах template. Стили в src/index.css. Рендер html реализован в src/pages/bookstore/bookstore.tsx (для роута) с помощью src/pages/bookstore/renderTemplate.ts

### Задание 2
```2.1``` Находится в файле src/pages/bookstore/filterBooksByPrice.ts. Написан вызов функции для проверки работы с выводом в консоль. \
```2.2``` Находится в файле src/pages/bookstore/timer.ts. Написан вызов функции для проверки работы с выводом в консоль. \
```2.3``` Находится в файле src/pages/bookstore/basket.ts. Разметка корзины находится в public/index.html в теге template. Вызов JS кода из basket.ts происходит в компоненте страницы (уточнение: логика добавления книги находится именно в basket.ts, в bookstore.tsx происходит только отрисовка шаблона и вызов функции из basket.ts)

### Задание 3
```3.1``` Находится в папке src/components/card \
```3.2``` Компонент корзины находится в папке src/pages/bookstoreReactCartPage. Добавление в корзину реализовано src/pages/bookstoreReactCartPage/bookStoreReactPage.tsx. Работа с данными осуществлена с помощью слайса src/services/cartSlice.ts \
```3.3``` Компонент каталога находится в папке src/pages/bookstoreReactPage. Работа с данными и обработка запроса к API осуществлена с помощью слайса src/services/bookSlice.ts.
