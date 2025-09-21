const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config({ path: './telegram-bot/.env' });

console.log('Проверка конфигурации бота...');
console.log('TELEGRAM_BOT_TOKEN:', process.env.TELEGRAM_BOT_TOKEN ? '✅ Найден' : '❌ Не найден');
console.log('ADMIN_CHAT_ID:', process.env.ADMIN_CHAT_ID ? '✅ Найден' : '❌ Не найден');
console.log('SECOND_ADMIN_CHAT_ID:', process.env.SECOND_ADMIN_CHAT_ID ? '✅ Найден' : '❌ Не найден');
console.log('PORT:', process.env.PORT || 'Не установлен');

if (!process.env.TELEGRAM_BOT_TOKEN) {
  console.error('❌ Ошибка: TELEGRAM_BOT_TOKEN не найден');
  process.exit(1);
}

console.log('\nПопытка подключения к Telegram API...');

try {
  const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });
  
  // Тест отправки сообщения
  bot.sendMessage(process.env.ADMIN_CHAT_ID, '🤖 Тест бота: подключение успешно!')
    .then(() => {
      console.log('✅ Сообщение отправлено успешно!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Ошибка отправки сообщения:', error.message);
      process.exit(1);
    });
    
} catch (error) {
  console.error('❌ Ошибка создания бота:', error.message);
  process.exit(1);
}
