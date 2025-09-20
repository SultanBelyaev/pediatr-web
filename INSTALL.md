# Инструкция по установке и запуску

## Быстрый старт

### 1. Установка зависимостей
```bash
cd pediatr_web
npm install
```

### 2. Запуск в режиме разработки
```bash
npm run dev
```

### 3. Открыть в браузере
Перейдите по адресу: http://localhost:3000

## Что нужно настроить перед использованием

### 1. Контактная информация
Замените placeholder данные на реальные:

**В файле `components/Header.tsx`:**
```javascript
// Строка 15-16
<span>+7 (XXX) XXX-XX-XX</span>
<span>pediatr@example.com</span>
```

**В файле `components/Footer.tsx`:**
```javascript
// Строки 45-50
<span className="text-gray-300">+7 (XXX) XXX-XX-XX</span>
<span className="text-gray-300">pediatr@example.com</span>
<span className="text-gray-300">г. Москва, ул. Примерная, д. 1</span>
```

### 2. Информация о враче
**В файле `components/AboutHero.tsx`:**
```javascript
// Строка 25
Меня зовут [Имя Фамилия], и я — детский врач-педиатр...
```

### 3. Фотографии
Замените placeholder изображения:
1. Создайте папку `public/images/`
2. Добавьте фото врача
3. Обновите пути в компонентах

### 4. Форма обратной связи
Для работы формы настройте email сервис в `components/ContactForm.tsx`

## Структура проекта

```
pediatr_web/
├── app/                    # Next.js App Router
│   ├── about/             # Страница "Обо мне"
│   ├── contacts/          # Страница "Контакты"
│   ├── services/          # Страница "Услуги"
│   ├── testimonials/      # Страница "Отзывы"
│   ├── globals.css        # Глобальные стили
│   ├── layout.tsx         # Основной layout
│   └── page.tsx           # Главная страница
├── components/            # React компоненты
│   ├── Header.tsx         # Шапка сайта
│   ├── Footer.tsx         # Подвал сайта
│   ├── Hero.tsx           # Главный баннер
│   ├── AboutPreview.tsx   # Превью "Обо мне"
│   ├── ServicesPreview.tsx # Превью услуг
│   ├── TestimonialsPreview.tsx # Превью отзывов
│   ├── CTA.tsx            # Призыв к действию
│   └── ...                # Остальные компоненты
├── public/                # Статические файлы
├── package.json           # Зависимости
├── tailwind.config.js     # Конфигурация Tailwind
├── next.config.js         # Конфигурация Next.js
└── README.md              # Документация
```

## Команды

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start

# Проверка кода
npm run lint
```

## Проблемы и решения

### Ошибка "Module not found"
```bash
# Удалите node_modules и переустановите
rm -rf node_modules package-lock.json
npm install
```

### Проблемы с Tailwind CSS
```bash
# Перезапустите dev сервер
npm run dev
```

### Порт 3000 занят
```bash
# Запустите на другом порту
npm run dev -- -p 3001
```

## Следующие шаги

1. ✅ Настройте контактную информацию
2. ✅ Добавьте фотографии врача
3. ✅ Обновите информацию о враче
4. ✅ Настройте форму обратной связи
5. ✅ Добавьте аналитику (Google Analytics)
6. ✅ Настройте домен и SSL
7. ✅ Запустите сайт в продакшене

## Поддержка

При возникновении проблем:
1. Проверьте консоль браузера на ошибки
2. Убедитесь, что все зависимости установлены
3. Перезапустите dev сервер
4. Обратитесь к разработчику
