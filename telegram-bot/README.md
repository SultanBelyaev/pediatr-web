# Telegram Bot для уведомлений о записях на прием

Этот бот автоматически отправляет уведомления в Telegram при получении новых записей на прием к педиатру Али Муслимовичу.

## 🚀 Быстрый старт

### 1. Настройка бота

1. **Создайте бота через @BotFather:**
   - Напишите @BotFather в Telegram
   - Отправьте команду `/newbot`
   - Следуйте инструкциям для создания бота
   - Сохраните полученный токен

2. **Узнайте chat_id администраторов:**
   - Напишите боту @userinfobot чтобы узнать свой chat_id
   - Или добавьте вашего бота в группу и отправьте `/start`

3. **Настройте переменные окружения:**
   ```bash
   cp env.example .env
   ```
   
   Заполните `.env` файл:
   ```env
   TELEGRAM_BOT_TOKEN=ваш_токен_бота
   ADMIN_CHAT_ID=chat_id_первого_администратора
   SECOND_ADMIN_CHAT_ID=chat_id_второго_администратора
   PORT=3001
   ```

### 2. Запуск

```bash
# Установка зависимостей
npm install

# Запуск в продакшене
npm start

# Запуск в режиме разработки
npm run dev
```

## 📡 API Endpoints

### POST /api/send-appointment

Отправляет уведомление о новой записи на прием.

**Тело запроса:**
```json
{
  "name": "Имя Фамилия",
  "email": "email@example.com",
  "phone": "+7 930 714 0303",
  "subject": "Запись на первичный прием",
  "message": "Описание проблемы",
  "preferredContact": "phone"
}
```

**Ответ:**
```json
{
  "success": true,
  "message": "Заявка успешно отправлена"
}
```

## 🤖 Команды бота

- `/start` - Начать работу с ботом
- `/help` - Показать справку
- `/status` - Проверить статус бота

## 📋 Формат уведомлений

Бот отправляет уведомления в следующем формате:

```
🏥 Новая запись на прием

👤 Пациент: Имя Фамилия
📧 Email: email@example.com
📞 Телефон: +7 930 714 0303
📋 Тема: Запись на первичный прием
💬 Сообщение: Описание проблемы
📞 Предпочтительный способ связи: Телефон

⏰ Время записи: 21.09.2025, 22:32:15
```

## 🔧 Интеграция с сайтом

Для интеграции с формой на сайте добавьте следующий код:

```javascript
// В компоненте ContactForm
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('http://localhost:3001/api/send-appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    
    if (result.success) {
      setSubmitStatus('success');
      // Очистить форму
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error('Ошибка:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🚀 Деплой

### Локальный запуск
```bash
npm start
```

### На VPS/сервере
1. Установите PM2: `npm install -g pm2`
2. Запустите: `pm2 start bot.js --name "pediatr-bot"`
3. Настройте автозапуск: `pm2 startup`

### На Heroku
1. Создайте Procfile: `web: node bot.js`
2. Добавьте переменные окружения в настройках Heroku
3. Деплойте: `git push heroku main`

## 📝 Логи

Бот ведет подробные логи всех операций:
- Успешные отправки уведомлений
- Ошибки при отправке
- Статус подключения к Telegram API

## 🔒 Безопасность

- Все данные передаются через HTTPS
- Токен бота хранится в переменных окружения
- Валидация входящих данных
- Обработка ошибок

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи бота
2. Убедитесь, что токен бота правильный
3. Проверьте, что chat_id администраторов корректные
4. Убедитесь, что бот запущен и работает

## 📋 Требования

- Node.js 14+
- npm или yarn
- Токен Telegram бота
- Chat ID администраторов
