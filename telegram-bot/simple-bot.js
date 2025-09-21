const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

console.log('🤖 Запуск упрощенного Telegram бота...');

if (!process.env.TELEGRAM_BOT_TOKEN) {
  console.error('❌ Ошибка: TELEGRAM_BOT_TOKEN не найден');
  process.exit(1);
}

if (!process.env.ADMIN_CHAT_ID) {
  console.error('❌ Ошибка: ADMIN_CHAT_ID не найден');
  process.exit(1);
}

// Создаем бота БЕЗ polling (избегаем конфликтов)
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });
const app = express();

// Настройка CORS и парсинга JSON
app.use(cors());
app.use(express.json());

// Функция отправки уведомления
async function sendNotification(data) {
  const message = `🏥 Новая запись на прием

👤 Пациент: ${data.name}
📧 Email: ${data.email}
📞 Телефон: ${data.phone}
📋 Тема: ${data.subject || 'Не указана'}
💬 Сообщение: ${data.message}
📞 Способ связи: ${data.preferredContact === 'phone' ? 'Телефон' : 'Email'}

⏰ Время: ${new Date().toLocaleString('ru-RU')}`;

  try {
    await bot.sendMessage(process.env.ADMIN_CHAT_ID, message);
    console.log('✅ Уведомление отправлено в Telegram');
    return { success: true };
  } catch (error) {
    console.error('❌ Ошибка отправки:', error.message);
    return { success: false, error: error.message };
  }
}

// API endpoint
app.post('/api/send-appointment', async (req, res) => {
  try {
    console.log('📨 Получена заявка:', JSON.stringify(req.body, null, 2));
    
    // Валидация данных
    if (!req.body.name || !req.body.phone) {
      console.error('❌ Отсутствуют обязательные поля');
      return res.status(400).json({ 
        success: false, 
        error: 'Отсутствуют обязательные поля: имя и телефон' 
      });
    }
    
    const result = await sendNotification(req.body);
    
    if (result.success) {
      console.log('✅ Заявка успешно обработана');
      res.json({ success: true, message: 'Заявка отправлена' });
    } else {
      console.error('❌ Ошибка при отправке заявки:', result.error);
      res.status(500).json({ success: false, error: result.error });
    }
  } catch (error) {
    console.error('❌ Критическая ошибка в API:', error);
    res.status(500).json({ success: false, error: 'Внутренняя ошибка сервера' });
  }
});

// Тест подключения
app.get('/test', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Бот работает',
    time: new Date().toLocaleString('ru-RU')
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`📡 API: http://localhost:${PORT}/api/send-appointment`);
  console.log(`🧪 Тест: http://localhost:${PORT}/test`);
  console.log(`🔔 Уведомления будут отправляться в чат: ${process.env.ADMIN_CHAT_ID}`);
});

// Тест отправки сообщения при запуске
bot.sendMessage(process.env.ADMIN_CHAT_ID, '🤖 Бот запущен и готов к работе!')
  .then(() => console.log('✅ Тестовое сообщение отправлено'))
  .catch(err => console.error('❌ Ошибка тестового сообщения:', err.message));
