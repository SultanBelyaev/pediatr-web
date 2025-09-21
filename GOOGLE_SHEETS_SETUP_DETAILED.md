# 🔧 Подробная инструкция по настройке Google Sheets

## Проблема
Форма отзывов не сохраняет данные в Google Sheets, потому что Google Apps Script не настроен.

## ✅ Решение 1: Google Apps Script (рекомендуется)

### Шаг 1: Откройте Google Sheets
1. Перейдите по ссылке: https://docs.google.com/spreadsheets/d/1MjGZmqq1OVGwgeJv3LbLOL3w1IVx27J4aGyltKBZwFE/edit?usp=sharing
2. Убедитесь, что у вас есть доступ к редактированию

### Шаг 2: Создайте заголовки
В первой строке (A1:G1) введите:
```
Имя | Возраст ребенка | Оценка | Услуга | Отзыв | Дата | Время отправки
```

### Шаг 3: Настройте Google Apps Script
1. В Google Sheets нажмите "Расширения" → "Apps Script"
2. Удалите весь существующий код
3. Вставьте этот код:

```javascript
function doPost(e) {
  try {
    // Получаем данные из запроса
    var data = JSON.parse(e.postData.contents);
    
    // Получаем активный лист
    var sheet = SpreadsheetApp.getActiveSheet();
    var lastRow = sheet.getLastRow();
    
    // Добавляем новую строку с данными
    sheet.getRange(lastRow + 1, 1, 1, 7).setValues([[
      data.name || '',
      data.childAge || '',
      data.rating || '',
      data.service || '',
      data.message || '',
      data.date || '',
      data.timestamp || ''
    ]]);
    
    // Возвращаем успешный ответ
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Отзыв успешно сохранен'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Возвращаем ошибку
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Google Sheets API работает!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

### Шаг 4: Сохраните и разверните
1. Нажмите "Сохранить" (Ctrl+S)
2. Дайте проекту имя: "Pediatr Reviews API"
3. Нажмите "Развернуть" → "Новое развертывание"
4. Выберите тип: "Веб-приложение"
5. Настройте:
   - Выполнять от: "Я"
   - Кто имеет доступ: "Все"
6. Нажмите "Развернуть"
7. **Скопируйте URL веб-приложения** (он понадобится)

### Шаг 5: Обновите код сайта
Замените URL в файле `components/AddTestimonial.tsx` на полученный URL:

```javascript
// Замените эту строку:
await fetch('https://script.google.com/macros/s/AKfycbzL7o8Y3J4kQXoQJvK3w1IVx27J4aGyltKBZwFE/exec', {

// На ваш URL:
await fetch('ВАШ_НОВЫЙ_URL_ЗДЕСЬ', {
```

## ✅ Решение 2: Google Forms (проще)

### Шаг 1: Создайте Google Form
1. Перейдите на https://forms.google.com
2. Создайте новую форму "Отзывы о враче"
3. Добавьте поля:
   - Имя (короткий ответ)
   - Возраст ребенка (короткий ответ)
   - Оценка (шкала 1-5)
   - Услуга (выпадающий список)
   - Отзыв (абзац)

### Шаг 2: Получите ссылку на форму
1. Нажмите "Отправить"
2. Скопируйте ссылку на форму
3. В настройках формы включите "Собирать адреса электронной почты"

### Шаг 3: Обновите код формы
Замените функцию `handleSubmit` в `AddTestimonial.tsx`:

```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    const displayName = formData.isAnonymous ? 'Анонимный пользователь' : (formData.name || 'Анонимный пользователь')
    
    // Создаем URL с предзаполненными данными
    const formUrl = 'https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url'
    const params = new URLSearchParams({
      'entry.XXXXX': displayName, // Замените XXXXX на ID поля имени
      'entry.YYYYY': formData.childAge || '', // Замените YYYYY на ID поля возраста
      'entry.ZZZZZ': formData.rating, // Замените ZZZZZ на ID поля оценки
      'entry.AAAAA': formData.service || '', // Замените AAAAA на ID поля услуги
      'entry.BBBBB': formData.message // Замените BBBBB на ID поля отзыва
    })
    
    // Открываем форму с предзаполненными данными
    window.open(`${formUrl}&${params}`, '_blank')
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({
        name: '',
        childAge: '',
        rating: 5,
        service: '',
        message: '',
        agreeToPublish: false,
        isAnonymous: false
      })
    }, 3000)
  } catch (error) {
    console.error('Ошибка отправки отзыва:', error)
    setIsSubmitting(false)
    setSubmitStatus('error')
  }
}
```

## 🔍 Как найти ID полей в Google Forms

1. Откройте форму в режиме редактирования
2. Нажмите F12 (открыть инструменты разработчика)
3. Нажмите на поле ввода
4. В HTML найдите атрибут `name="entry.XXXXX"`
5. XXXXX - это ID поля

## 📊 Текущее состояние

**Сейчас форма работает так:**
- Открывает Telegram с готовым сообщением
- Показывает "Отзыв отправлен!"
- Сбрасывает форму

**После настройки Google Sheets:**
- Данные будут сохраняться в таблицу
- Telegram не будет открываться
- Показывается сообщение об успехе

## 🚀 Рекомендация

Используйте **Решение 1 (Google Apps Script)** - оно более профессиональное и автоматическое.
