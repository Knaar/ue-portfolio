# Content Update Guide

## Обновить профиль

Открой `src/content/profile/profile.md` и обнови:

- блок frontmatter (имя, роль, контакты, навыки),
- основной текст внизу (подход к работе, процесс).

## Добавить новый проект

1. Скопируй шаблон из `Docs/project-template.md`.
2. Создай новый файл: `src/content/projects/project-your-name.md`.
3. Вставь контент и замени заглушки.
4. Добавь изображения проекта в `public/images/projects/`.

## Проверка перед пушем

1. `npm run build`
2. Проверить, что нет ошибок Astro.
3. Закоммитить и отправить в `main`.
