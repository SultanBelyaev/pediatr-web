const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Конфигурация бота
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const ADMIN_CHAT_ID = process.env.ADMIN_CHAT_ID; // @Pashap1991
const SECOND_ADMIN_CHAT_ID = process.env.SECOND_ADMIN_CHAT_ID; // @sbelyaevvv

if (!BOT_TOKEN) {
  console.error('Ошибка: TELEGRAM_BOT_TOKEN не найден в переменных окружения');
  process.exit(1);
}

// Создание экземпляра бота
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Функция для отправки уведомления о записи на прием
async function sendAppointmentNotification(appointmentData) {
  const message = `
🏥 <b>Новая запись на прием</b>

👤 <b>Пациент:</b> ${appointmentData.name}
📧 <b>Email:</b> ${appointmentData.email}
📞 <b>Телефон:</b> ${appointmentData.phone}
📋 <b>Тема:</b> ${appointmentData.subject || 'Не указана'}
💬 <b>Сообщение:</b> ${appointmentData.message}
📞 <b>Предпочтительный способ связи:</b> ${appointmentData.preferredContact === 'phone' ? 'Телефон' : 'Email'}

⏰ <b>Время записи:</b> ${new Date().toLocaleString('ru-RU')}
`;

  try {
    // Отправляем сообщение первому администратору
    if (ADMIN_CHAT_ID) {
      await bot.sendMessage(ADMIN_CHAT_ID, message, { parse_mode: 'HTML' });
      console.log('Уведомление отправлено первому администратору');
    }

    // Отправляем сообщение второму администратору
    if (SECOND_ADMIN_CHAT_ID) {
      await bot.sendMessage(SECOND_ADMIN_CHAT_ID, message, { parse_mode: 'HTML' });
      console.log('Уведомление отправлено второму администратору');
    }

    return { success: true, message: 'Уведомления отправлены' };
  } catch (error) {
    console.error('Ошибка при отправке уведомлений:', error);
    return { success: false, error: error.message };
  }
}

// API endpoint для отправки уведомлений
app.post('/api/send-appointment', async (req, res) => {
  try {
    const { name, email, phone, subject, message, preferredContact } = req.body;

    // Валидация данных
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Не все обязательные поля заполнены'
      });
    }

    const appointmentData = {
      name,
      email,
      phone,
      subject: subject || '',
      message,
      preferredContact: preferredContact || 'phone'
    };

    const result = await sendAppointmentNotification(appointmentData);

    if (result.success) {
      res.json({ success: true, message: 'Заявка успешно отправлена' });
    } else {
      res.status(500).json({ success: false, error: result.error });
    }
  } catch (error) {
    console.error('Ошибка API:', error);
    res.status(500).json({ success: false, error: 'Внутренняя ошибка сервера' });
  }
});

// Обработка команд бота
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `
👋 Привет! Я бот для уведомлений о записях на прием к Али Муслимовичу.

📋 <b>Доступные команды:</b>
/help - Показать справку
/status - Проверить статус бота

🤖 Бот работает и готов к приему уведомлений о записях на прием.
  `, { parse_mode: 'HTML' });
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `
📖 <b>Справка по боту</b>

Этот бот автоматически отправляет уведомления о новых записях на прием к педиатру Али Муслимовичу.

🔔 <b>Что делает бот:</b>
• Получает данные из формы записи на прием
• Отправляет уведомления администраторам
• Ведет лог всех записей

📞 <b>Контакты:</b>
• Телефон: +7 930 714 0303
• Telegram: @Pashap1991
• Клиника: Персона, Нижний Новгород, Сибирская 3

⏰ <b>Время работы:</b> Пн-Вс 8:00-20:00
  `, { parse_mode: 'HTML' });
});

bot.onText(/\/status/, (msg) => {
  const chatId = msg.chat.id;
  const status = `
🤖 <b>Статус бота</b>

✅ Бот работает
🕐 Время: ${new Date().toLocaleString('ru-RU')}
📊 Статус: Активен
🔔 Уведомления: Включены

Администраторы:
• @Pashap1991: ${ADMIN_CHAT_ID ? '✅ Настроен' : '❌ Не настроен'}
• @sbelyaevvv: ${SECOND_ADMIN_CHAT_ID ? '✅ Настроен' : '❌ Не настроен'}
  `;
  
  bot.sendMessage(chatId, status, { parse_mode: 'HTML' });
});

// Обработка ошибок
bot.on('error', (error) => {
  console.error('Ошибка бота:', error);
});

bot.on('polling_error', (error) => {
  console.error('Ошибка polling:', error);
});

// Запуск сервера
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🤖 Telegram бот запущен на порту ${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/send-appointment`);
  console.log(`🔔 Уведомления будут отправляться в чаты:`);
  console.log(`   • @Pashap1991 (${ADMIN_CHAT_ID || 'НЕ НАСТРОЕН'})`);
  console.log(`   • @sbelyaevvv (${SECOND_ADMIN_CHAT_ID || 'НЕ НАСТРОЕН'})`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Остановка бота...');
  bot.stopPolling();
  process.exit(0);
});

module.exports = { bot, sendAppointmentNotification };
