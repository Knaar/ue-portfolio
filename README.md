# UE Programmer Portfolio

Статический сайт-портфолио на Astro с хранением контента в Markdown.

## Локальный запуск

1. Установить Node.js 20+.
2. Установить зависимости:

```bash
npm install
```

3. Запустить dev-сервер:

```bash
npm run dev
```

## Где редактировать контент

- Профиль и контакты: `src/content/profile/profile.md`
- Проекты: `src/content/projects/*.md`
- Изображения проектов: `public/images/projects/`

## Деплой

Репозиторий настроен на автодеплой в GitHub Pages через `.github/workflows/deploy.yml`.

Что нужно включить в GitHub:

1. `Settings -> Pages -> Build and deployment -> Source: GitHub Actions`
2. Пуш в ветку `main` запускает сборку и публикацию автоматически.

## Быстрое обновление

1. Обнови markdown-файлы профиля/проекта.
2. Закоммить изменения.
3. Запушь в `main`.
4. Через 1-2 минуты сайт обновится на GitHub Pages.
