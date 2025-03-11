# Инструкция по запуску локального проекта

Данный проект представляет собой мобильную версию веб-приложения новостного сайта, использующего API New York Times для
получения данных. Проект реализован с использованием React, Redux и TypeScript. Для корректной работы с API был написан
собственный бэкенд на Node.js, который решает проблему с CORS.

## Технические требования

- React + Redux
- TypeScript
- Мобильная верстка
- Возможность листать список новостей до любой доступной даты
- Подгрузка новых новостей каждые 30 секунд
- Переход на сайт New York Times при клике на новость

## Зависимости

Проект использует следующие основные зависимости:

- `react`, `react-dom` — для создания пользовательского интерфейса.
- `redux`, `redux-saga`, `@reduxjs/toolkit` — для управления состоянием приложения.
- `axios` — для выполнения HTTP-запросов.
- `express`, `cors` — для реализации бэкенда и решения проблемы CORS.
- `styled-components` — для стилизации компонентов.
- `react-infinite-scroll-component` — для реализации бесконечной прокрутки новостей.

Полный список зависимостей можно найти в файле `package.json`.

## Установка и запуск

1. **Клонируйте репозиторий:**

   ```bash
   git clone https://github.com/MeDiaMih/ketopay
   cd ketopay
   ```

2. **Установите зависимости:**

   ```bash
   npm install
   ```

3. **Запустите бэкенд:**

   Бэкенд написан на Node.js с использованием Express и CORS. Он служит прокси для запросов к API New York Times.

   ```bash
   node server.js
   ```

   Бэкенд будет запущен на порту `3003`.

4. **Запустите фронтенд:**

   ```bash
   npm start
   ```

   Фронтенд будет запущен на порту `3000` (по умолчанию). Откройте браузер и перейдите по адресу
   `http://localhost:3000`.

## Структура проекта

- **`src/`** — основная директория с исходным кодом фронтенда.
    - **`components/`** — React-компоненты.
    - **`store/`** — Redux-хранилище, включая срезы (slices) и саги (sagas).
    - **`types/`** — TypeScript-типы.
    - **`api/`** — модули для работы с API.
    - **`App.tsx`** — корневой компонент приложения.
    - **`index.tsx`** — точка входа в приложение.

- **`server.js`** — файл с бэкенд-логикой для работы с API New York Times.

## Особенности реализации

### Бэкенд для работы с CORS

Для решения проблемы с CORS был написан собственный бэкенд на Node.js. Он выступает в роли прокси-сервера, который
делает запросы к API New York Times и возвращает данные клиенту. Бэкенд запускается на порту `3003` и обрабатывает
запросы по адресу `/api/nyt/:year/:month`.

### Redux и Redux Saga

Для управления состоянием приложения используется Redux Toolkit и Redux Saga. В проекте реализованы следующие сценарии:

- Загрузка новостей по году и месяцу.
- Сортировка новостей по дате.
- Группировка новостей по дате.
- Подгрузка новых новостей каждые 30 секунд.
- Бесконечная прокрутка новостей.

### Бесконечная прокрутка

Для реализации бесконечной прокрутки используется библиотека `react-infinite-scroll-component`. При достижении конца
списка новостей происходит подгрузка следующих 10 новостей.

### Подгрузка новых новостей

Каждые 30 секунд происходит проверка на наличие новых новостей. Если новые новости найдены, они добавляются в начало
списка.

## Заключение

Проект представляет собой полноценное мобильное веб-приложение для просмотра новостей с использованием API New York
Times. Для решения проблемы с CORS был реализован собственный бэкенд на Node.js. Управление состоянием приложения
осуществляется с помощью Redux и Redux Saga.