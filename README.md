# Portfolio Landing

Сайт-визитка (портфолио) продуктового дизайнера на Vue 3 + TypeScript + Vite.
Сейчас это базовый каркас с секциями и стилями на SCSS (БЭМ).

## Stack

- Vue 3 (`<script setup>`)
- TypeScript
- Vite
- SCSS (BEM)

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

## Структура UI и стилей

- Страница-компоновка: [src/App.vue](src/App.vue)
- Компоненты секций/блоков: `src/components/*`
- Главный файл стилей: [src/styles/main.scss](src/styles/main.scss)
- Базовые стили: `src/styles/base/*`
- Лейаут: `src/styles/layout/*`
- Стили компонентов (отдельно, БЭМ): `src/styles/components/*`
- Точка входа приложения: [src/main.ts](src/main.ts)
