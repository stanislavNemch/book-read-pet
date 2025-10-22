# Books Reading - Трекер читання книг

**Books Reading** — це веб-додаток, розроблений для допомоги користувачам у відстеженні їхнього прогресу в читанні. Додаток дозволяє вести особисту бібліотеку, ставити цілі з читання (створювати "тренування") та відстежувати кількість прочитаних сторінок за допомогою наочних графіків та статистики.

## 🇺🇦 Українська версія

### Основний функціонал

-   **Аутентифікація користувачів**: Реєстрація та вхід до системи з використанням email та пароля.
-   **Управління бібліотекою**: Додавання книг до особистої бібліотеки, поділ їх за статусами: "Планую прочитати", "Читаю", "Прочитано".
-   **Тренування з читання**: Створення часових "тренувань" з вибором книг із бібліотеки для досягнення конкретних цілей.
-   **Відстеження прогресу**: Можливість щодня додавати кількість прочитаних сторінок.
-   **Візуалізація статистики**: Наочний графік та таблиця для відстеження прогресу та порівняння фактичного темпу читання з плановим.
-   **Відгуки та рейтинги**: Можливість залишати особисті відгуки та ставити рейтинг прочитаним книгам.

### Технології та ключові модулі

Цей проєкт побудований на сучасному стеку технологій, орієнтованому на продуктивність та зручність розробки.

| Технологія/Модуль                                   | Опис                                                                                                                       |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **[Next.js](https://nextjs.org/)**                  | React-фреймворк для створення серверних та статичних веб-додатків. Забезпечує роутинг, рендеринг та оптимізацію.           |
| **[React](https://react.dev/)**                     | Бібліотека для побудови користувацьких інтерфейсів.                                                                        |
| **[TypeScript](https://www.typescriptlang.org/)**   | Суворо типізована мова, що базується на JavaScript і додає статичну типізацію для підвищення надійності коду.              |
| **[TanStack Query](https://tanstack.com/query/)**   | Потужна бібліотека для керування станом сервера в React. Відповідає за кешування, фонове оновлення та синхронізацію даних. |
| **[Axios](https://axios-http.com/)**                | Клієнт для виконання HTTP-запитів до бекенду. Використовується з перехоплювачами для автоматичного оновлення токенів.      |
| **[Formik](https://formik.org/)**                   | Бібліотека для створення та керування формами в React.                                                                     |
| **[Yup](https://github.com/jquense/yup)**           | Бібліотека для валідації схем об'єктів (використовується разом з Formik для перевірки даних у формах).                     |
| **[CSS Modules](https://github.com/css-modules)**   | Технологія для локалізації стилів на рівні компонентів, що дозволяє уникнути конфліктів імен класів.                       |
| **[Framer Motion](https://www.framer.com/motion/)** | Бібліотека для створення плавної анімації переходів між сторінками та появи елементів.                                     |
| **[Chart.js](https://www.chartjs.org/)**            | Бібліотека для візуалізації даних та створення інтерактивних графіків.                                                     |
| **[React Hot Toast](https://react-hot-toast.com/)** | Модуль для відображення простих та красивих сповіщень (тостів) про успішні дії або помилки.                                |

### Структура проєкту

```
/book-read-pet
├── components/                 # Папка з UI-компонентами
│   ├── ActiveTraining/         # Компоненти для сторінки активного тренування
│   ├── AddBookForm/            # Форма додавання нової книги
│   ├── Auth/                   # Компоненти, пов'язані з аутентифікацією
│   ├── BookCard/               # Картка для відображення однієї книги
│   ├── CreateTrainingForm/     # Форма створення нового тренування
│   ├── Header/                 # Шапка сайту
│   ├── Loader/                 # Компонент-спінер завантаження
│   ├── Modal/                  # Модальне вікно
│   └── ...                     # Інші UI-компоненти
├── context/                    # React Context для глобального стану
│   └── AuthProvider.tsx        # Провайдер стану аутентифікації
├── hooks/                      # Папка з кастомними хуками React
│   └── useAuth.ts              # Хук для доступу до контексту аутентифікації
├── lib/                        # Основні модулі/конфігурації
│   └── api.ts                  # Налаштування екземпляра Axios та перехоплювачів
├── pages/                      # Сторінки та роутинг у Next.js
│   ├── _app.tsx                # Головний компонент програми
│   ├── library.tsx             # Сторінка бібліотеки користувача
│   ├── training.tsx            # Сторінка тренувань
│   ├── login.tsx               # Сторінка входу
│   └── register.tsx            # Сторінка реєстрації
├── public/                     # Статичні файли (іконки, зображення)
├── services/                   # Модулі для взаємодії з API
│   ├── authService.ts          # Запити, пов'язані з аутентифікацією
│   ├── bookService.ts          # Запити, пов'язані з книгами
│   └── trainingService.ts      # Запити, пов'язані з тренуваннями
├── styles/                     # Глобальні стилі
├── types/                      # Типи TypeScript
│   ├── auth.ts                 # Типи для аутентифікації
│   ├── book.ts                 # Типи для книг
│   └── training.ts             # Типи для тренувань
├── utils/                      # Допоміжні функції та утиліти
│   ├── authStorage.ts          # Функції для роботи з cookie аутентифікації
│   └── mockData.ts             # Тестові дані для емуляції
├── .gitignore                  # Файли та папки, які ігноруються Git
├── middleware.ts               # Middleware для захисту роутів на стороні сервера
├── next.config.mjs             # Файл конфігурації Next.js
└── package.json                # Список залежностей та скриптів проєкту
```

### Встановлення та запуск

1.  **Клонуйте репозиторій:**

    ```bash
    git clone <URL_ВАШОГО_РЕПОЗИТОРІЯ>
    ```

2.  **Перейдіть до папки проєкту:**

    ```bash
    cd book-read-pet
    ```

3.  **Встановіть залежності:**

    ```bash
    npm install
    ```

4.  **Запустіть проєкт у режимі розробки:**

    ```bash
    npm run dev
    ```

5.  Відкрийте [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) у вашому браузері.

### Режим емуляції (без бекенду)

Для розробки та тестування UI-компонентів сторінки `/training` без необхідності взаємодії з реальним бекендом було створено режим емуляції.

**Як це працює:**
У файлі `pages/training.tsx` є константа `USE_MOCK_DATA`.

-   Якщо `USE_MOCK_DATA = true`, сторінка буде використовувати заздалегідь підготовлені тестові дані з файлу `utils/mockData.ts` і не буде робити реальних API-запитів. Це дозволяє миттєво побачити сторінку активного тренування з заповненими даними (книги, графік, статистика).
-   Якщо `USE_MOCK_DATA = false`, сторінка працює у звичайному режимі, взаємодіючи з бекендом.

**Використання:**

1.  Відкрийте файл `pages/training.tsx`.
2.  Знайдіть рядок `const USE_MOCK_DATA = true;`.
3.  Щоб увімкнути/вимкнути режим емуляції, змініть значення на `true` або `false`.

### Доступні скрипти

-   `npm run dev`: запуск сервера для розробки.
-   `npm run build`: збірка проєкту для продакшену.
-   `npm run start`: запуск продакшн-сервера.
-   `npm run lint`: запуск лінтера для перевірки коду.

---

## 🇬🇧 English Version

### Core Functionality

-   **User Authentication**: Registration and login system using email and password.
-   **Library Management**: Add books to a personal library, categorized by status: "Going to Read," "Currently Reading," "Finished Reading."
-   **Reading Trainings**: Create timed "trainings" by selecting books from the library to achieve specific reading goals.
-   **Progress Tracking**: Ability to log the number of pages read daily.
-   **Statistics Visualization**: An intuitive chart and table to track progress and compare the actual reading pace with the planned one.
-   **Reviews and Ratings**: Option to leave personal reviews and rate finished books.

### Tech Stack & Key Modules

This project is built on a modern tech stack focused on performance and developer experience.

| Technology/Module                                   | Description                                                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **[Next.js](https://nextjs.org/)**                  | A React framework for building server-side rendered and static web applications. It handles routing, rendering, and optimization. |
| **[React](https://react.dev/)**                     | A library for building user interfaces.                                                                                           |
| **[TypeScript](https://www.typescriptlang.org/)**   | A strongly typed language that builds on JavaScript, adding static types to enhance code reliability.                             |
| **[TanStack Query](https://tanstack.com/query/)**   | A powerful library for managing server state in React. It handles caching, background updates, and data synchronization.          |
| **[Axios](https://axios-http.com/)**                | A client for making HTTP requests to the backend. It's configured with interceptors for automatic token refresh.                  |
| **[Formik](https://formik.org/)**                   | A library for building and managing forms in React.                                                                               |
| **[Yup](https://github.com/jquense/yup)**           | An object schema validation library, used with Formik to validate form data.                                                      |
| **[CSS Modules](https://github.com/css-modules)**   | A technology for scoping CSS by automatically creating unique class names, preventing style conflicts.                            |
| **[Framer Motion](https://www.framer.com/motion/)** | A library for creating smooth page transitions and element animations.                                                            |
| **[Chart.js](https://www.chartjs.org/)**            | A library for data visualization and creating interactive charts.                                                                 |
| **[React Hot Toast](https://react-hot-toast.com/)** | A module for displaying simple and elegant notifications (toasts) for success or error messages.                                  |

### Project Structure

```
/book-read-pet
├── components/                 # Folder for UI components
│   ├── ActiveTraining/         # Components for the active training page
│   ├── AddBookForm/            # Form for adding a new book
│   ├── Auth/                   # Authentication-related components
│   ├── BookCard/               # Card for displaying a single book
│   ├── CreateTrainingForm/     # Form for creating a new training
│   ├── Header/                 # Site header
│   ├── Loader/                 # Loading spinner component
│   ├── Modal/                  # Modal window
│   └── ...                     # Other UI components
├── context/                    # React Context for global state
│   └── AuthProvider.tsx        # Provider for authentication state
├── hooks/                      # Folder for custom React hooks
│   └── useAuth.ts              # Hook to access the auth context
├── lib/                        # Core modules/configurations
│   └── api.ts                  # Axios instance setup and interceptors
├── pages/                      # Pages and routing in Next.js
│   ├── _app.tsx                # Main application component
│   ├── library.tsx             # User's library page
│   ├── training.tsx            # Trainings page
│   ├── login.tsx               # Login page
│   └── register.tsx            # Registration page
├── public/                     # Static files (icons, images)
├── services/                   # Modules for interacting with the API
│   ├── authService.ts          # Auth-related requests
│   ├── bookService.ts          # Book-related requests
│   └── trainingService.ts      # Training-related requests
├── styles/                     # Global styles
├── types/                      # TypeScript types
│   ├── auth.ts                 # Types for authentication
│   ├── book.ts                 # Types for books
│   └── training.ts             # Types for trainings
├── utils/                      # Helper functions and utilities
│   ├── authStorage.ts          # Functions for working with auth cookies
│   └── mockData.ts             # Mock data for emulation
├── .gitignore                  # Files and folders ignored by Git
├── middleware.ts               # Middleware for server-side route protection
├── next.config.mjs             # Next.js configuration file
└── package.json                # List of project dependencies and scripts
```

### Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone <YOUR_REPOSITORY_URL>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd book-read-pet
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

### Emulation Mode (Backend-less)

For developing and testing the UI components of the `/training` page without needing a live backend, an emulation mode has been implemented.

**How it works:**
In the `pages/training.tsx` file, there is a constant named `USE_MOCK_DATA`.

-   If `USE_MOCK_DATA = true`, the page will use pre-configured test data from the `utils/mockData.ts` file and will not make any real API calls. This allows you to instantly see the active training page with populated data (books, chart, statistics).
-   If `USE_MOCK_DATA = false`, the page operates in its normal mode, interacting with the backend.

**Usage:**

1.  Open the file `pages/training.tsx`.
2.  Find the line `const USE_MOCK_DATA = true;`.
3.  Change the value to `true` or `false` to enable or disable the emulation mode.

### Available Scripts

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Runs the linter to check the code.
