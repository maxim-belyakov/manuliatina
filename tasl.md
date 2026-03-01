Мне нужно настроить автоматический деплой на shared хостинг Namecheap через GitHub Actions. Деплоя сейчас нет вообще.
Контекст:
- Проект: Create React App (react-scripts), сборка в папку build/
- Хостинг: Namecheap shared hosting, деплой по FTP
- FTP credentials будут в GitHub Secrets: FTP_SERVER, FTP_USERNAME, FTP_PASSWORD
- Целевая директория на сервере: /manuliatina.com/public_html/ (или аналогичная — уточни в комментарии если путь другой)
Задачи:
1. Создай .github/workflows/deploy.yml со следующим pipeline:
   - Trigger: push в ветку master
   - Checkout репозитория
   - Setup Node.js 16
   - Установка зависимостей: npm ci
   - Сборка: npm run build
   - Деплой папки build/ на FTP с использованием action SamKirkland/FTP-Deploy-Action@4.3.4
2. Добавь в README.md раздел "Deployment" с инструкцией: какие GitHub Secrets нужно добавить (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD) и откуда их взять (cPanel → FTP Accounts)
Не меняй ничего в логике самого приложения.