# Portfolio Landing

Сайт-визитка (портфолио) продуктового дизайнера на Vue 3 + TypeScript + Vite.
Сейчас это каркас с базовой структурой секций и стилями.

## Stack

- Vue 3 (`<script setup>`)
- TypeScript
- Vite
- Tailwind CSS 4
- SCSS

## Scripts

- `npm run dev` - локальный запуск
- `npm run lint` - проверка ESLint
- `npm run typecheck` - проверка TypeScript/Vue типов (`vue-tsc --noEmit`)
- `npm run build` - production build
- `npm run preview` - локальный preview build

## Deployment

Проект деплоится на GitHub Pages через workflow:
[.github/workflows/pages.yml](.github/workflows/pages.yml)

CI перед деплоем запускает:

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build` (с `VITE_BASE=/portfolio-landing/`)

## Где менять контент

- Основная структура страницы: [src/App.vue](src/App.vue)
- Глобальные стили: [src/styles/main.scss](src/styles/main.scss)
- Tailwind import: [src/styles/tailwind.css](src/styles/tailwind.css)
- Точка входа приложения: [src/main.ts](src/main.ts)
