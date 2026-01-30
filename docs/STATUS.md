# Статус проекта

## Сейчас в работе
- [x] Базовый каркас API (ConfigModule, ValidationPipe, /health, Swagger)
- [x] Smoke unit + e2e тесты
- [x] Vercel проекты созданы и привязаны (api/web)
- [x] CI workflow (lint → unit → e2e)
- [x] Branch protection включен (required checks)
- [x] Vercel serverless entrypoint для Nest API
- [x] Подключен Prisma (schema + PrismaService)
- [x] Настроен DATABASE_URL для Supabase (локально)
- [x] Добавлен .env.test для e2e
- [x] Настроена test-схема и применены миграции

## Следующие задачи
- [ ] Добавить Exception Filter и Interceptor (этап 3)

## Заметки/решения
- Swagger доступен по `/docs`
