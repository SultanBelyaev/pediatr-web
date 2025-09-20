# Инструкция по загрузке проекта на GitHub

## Шаг 1: Создание репозитория на GitHub

1. **Перейдите на GitHub.com** и войдите в свой аккаунт
2. **Нажмите кнопку "New"** (зеленая кнопка) или перейдите по ссылке: https://github.com/new
3. **Заполните форму:**
   - Repository name: `pediatr-web`
   - Description: `Современный веб-сайт педиатра с адаптивным дизайном`
   - Выберите "Public" (публичный репозиторий)
   - НЕ ставьте галочки на "Add a README file", "Add .gitignore", "Choose a license"
4. **Нажмите "Create repository"**

## Шаг 2: Подключение локального репозитория к GitHub

После создания репозитория GitHub покажет инструкции. Выполните команды:

```bash
# Добавьте удаленный репозиторий (замените YOUR_USERNAME на ваш GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/pediatr-web.git

# Переименуйте ветку в main (если нужно)
git branch -M main

# Загрузите код на GitHub
git push -u origin main
```

## Шаг 3: Проверка

1. Обновите страницу репозитория на GitHub
2. Убедитесь, что все файлы загружены
3. Проверьте, что README.md отображается корректно

## Шаг 4: Настройка для деплоя

### Vercel (рекомендуется)
1. Перейдите на [vercel.com](https://vercel.com)
2. Войдите через GitHub
3. Нажмите "New Project"
4. Выберите репозиторий `pediatr-web`
5. Нажмите "Deploy" - сайт будет доступен по ссылке

### Netlify
1. Перейдите на [netlify.com](https://netlify.com)
2. Войдите через GitHub
3. Нажмите "New site from Git"
4. Выберите репозиторий `pediatr-web`
5. Настройте:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Нажмите "Deploy site"

## Шаг 5: Настройка домена (опционально)

После деплоя вы можете:
1. Настроить собственный домен
2. Добавить SSL-сертификат
3. Настроить аналитику

## Полезные ссылки

- [GitHub Docs](https://docs.github.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

## Поддержка

Если возникли проблемы:
1. Проверьте, что Git настроен корректно
2. Убедитесь, что у вас есть права на создание репозиториев
3. Проверьте подключение к интернету
