# Настройка Google Sheets для отзывов

## 📋 Инструкция по настройке Google Apps Script

### 1. Откройте Google Sheets
Перейдите по ссылке: https://docs.google.com/spreadsheets/d/1MjGZmqq1OVGwgeJv3LbLOL3w1IVx27J4aGyltKBZwFE/edit?usp=sharing

### 2. Создайте заголовки столбцов
В первой строке создайте следующие заголовки:
- A1: "Имя"
- B1: "Возраст ребенка" 
- C1: "Оценка"
- D1: "Услуга"
- E1: "Отзыв"
- F1: "Дата"
- G1: "Время отправки"

### 3. Создайте Google Apps Script
1. В Google Sheets перейдите в меню "Расширения" → "Apps Script"
2. Удалите весь существующий код
3. Вставьте следующий код:

```javascript
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    var sheet = SpreadsheetApp.getActiveSheet();
    var lastRow = sheet.getLastRow();
    
    sheet.getRange(lastRow + 1, 1, 1, 7).setValues([[
      data.name || '',
      data.childAge || '',
      data.rating || '',
      data.service || '',
      data.message || '',
      data.date || '',
      data.timestamp || ''
    ]]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({error: error.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Google Sheets API работает!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

### 4. Сохраните и разверните скрипт
1. Нажмите "Сохранить" (Ctrl+S)
2. Дайте проекту имя, например "Pediatr Reviews API"
3. Нажмите "Развернуть" → "Новое развертывание"
4. Выберите тип "Веб-приложение"
5. Настройте:
   - Выполнять от: "Я"
   - Кто имеет доступ: "Все"
6. Нажмите "Развернуть"
7. Скопируйте URL веб-приложения

### 5. Обновите URL в коде
Замените URL в файле `components/AddTestimonial.tsx` на полученный URL веб-приложения.

### 6. Тестирование
1. Откройте сайт
2. Перейдите на страницу отзывов
3. Заполните форму и отправьте
4. Проверьте, что данные появились в Google Sheets

## 🔧 Альтернативный способ (если не работает API)

Если Google Apps Script не работает, можно использовать форму Google Forms:

1. Создайте Google Form с полями:
   - Имя (текст)
   - Возраст ребенка (текст)
   - Оценка (шкала 1-5)
   - Услуга (выпадающий список)
   - Отзыв (абзац)

2. В коде формы замените fetch на:
```javascript
// Перенаправление на Google Form с предзаполненными данными
const formUrl = 'https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url'
const params = new URLSearchParams({
  'entry.XXXXX': displayName,
  'entry.YYYYY': formData.childAge || '',
  'entry.ZZZZZ': formData.rating,
  'entry.AAAAA': formData.service || '',
  'entry.BBBBB': formData.message
})
window.open(`${formUrl}&${params}`)
```

## 📊 Структура данных в Sheets

| Имя | Возраст ребенка | Оценка | Услуга | Отзыв | Дата | Время отправки |
|-----|----------------|--------|--------|-------|------|----------------|
| Анонимный пользователь | 3 года | 5 | Консультация | Текст отзыва... | 21.09.2025 | 2025-09-21T10:30:00.000Z |
