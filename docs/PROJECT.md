# Контекст проекта

## Цель
Сделать сервис сокращения ссылок + аналитика, чтобы на практике пройти ключевые моменты Nest.js и деплоя на Vercel.

## Требования
- Vercel serverless
- Supabase Postgres (Prisma)
- Jest: unit + e2e
- Cron: endpoints + секрет `CRON_SECRET`
- Redis (опционально): кэш, rate limit, locks, счётчики

## Модули (план)
Backend: Auth, Users, Links, Redirect, Analytics, Cron, Health.
Frontend: login/register, dashboard links, analytics.

## Принципы
- Минимальные правки, без «заодно улучшил».
- Любая смена Prisma schema = миграция.
- Логика → тесты.
- Cron → lock + идемпотентность.
