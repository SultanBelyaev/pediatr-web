const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
require('dotenv').config();

console.log('🤖 Запуск упрощенного Telegram бота...');
console.log('Токен:', process.env.TELEGRAM_BOT_TOKEN ? '✅ Найден' : '❌ Не найден');
console.log('Chat ID:', process.env.ADMIN_CHAT_ID ? '✅ Найден' : '❌ Не найден');

if (!process.env.TELEGRAM_BOT_TOKEN) {
  console.error('❌ Ошибка: TELEGRAM_BOT_TOKEN не найден');
  process.exit(1);
}

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });
const app = express();
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
    console.log('✅ Уведомление отправлено');
    return { success: true };
  } catch (error) {
    console.error('❌ Ошибка отправки:', error.message);
    return { success: false, error: error.message };
  }
}

// API endpoint
app.post('/api/send-appointment', async (req, res) => {
  console.log('📨 Получена заявка:', req.body);
  
  const result = await sendNotification(req.body);
  
  if (result.success) {
    res.json({ success: true, message: 'Заявка отправлена' });
  } else {
    res.status(500).json({ success: false, error: result.error });
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
});

// Тест отправки сообщения при запуске
bot.sendMessage(process.env.ADMIN_CHAT_ID, '🤖 Бот запущен и готов к работе!')
  .then(() => console.log('✅ Тестовое сообщение отправлено'))
  .catch(err => console.error('❌ Ошибка тестового сообщения:', err.message));
