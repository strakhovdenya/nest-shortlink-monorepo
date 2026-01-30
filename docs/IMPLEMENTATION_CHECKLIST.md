# Чек-лист реализации (отмечай выполненное)

## 0) Подготовка репо и Vercel
- [x] Создать монорепо структуру: `apps/api`, `apps/web` (позже), `docs`, `.cursor`
- [x] Подключить репо к Vercel (проекты `api` и `web` или сначала только `api`)
- [x] Подключить Supabase (интеграция или env вручную)
- [ ] Подтянуть env локально: `npx vercel env pull` → `.env.local`
- [ ] Добавить env: `JWT_SECRET`, `CRON_SECRET` (+ Redis env при необходимости)

## 1) Тестовая база и тестовое окружение (Jest)
- [ ] Завести отдельную test БД/схему в Supabase
- [ ] Создать `.env.test` (или конфиг CI) для тестов
- [ ] Проверить Jest конфиги: unit и e2e
- [ ] Стратегия:
  - [ ] unit: мок Prisma/Redis
  - [ ] e2e: реальная test БД + миграции

## 2) Supabase + Prisma
- [x] Подключить Prisma в `apps/api`
- [x] Описать модели: User, Link, (ClickEvent и/или агрегаты)
- [ ] Создать и применить миграции (dev + test)
- [x] Сделать `PrismaService` (singleton)

## 3) Каркас Nest “как надо”
- [x] ConfigModule + загрузка env
- [x] Глобальный ValidationPipe (DTO + class-validator)
- [x] Health endpoint `GET /health`
- [x] Swagger (OpenAPI)
- [ ] Exception Filter (единый формат ошибок)
- [ ] Interceptor: requestId + тайминги/логи

## 4) Auth и доступы
- [ ] Регистрация/логин (password hash + JWT)
- [ ] JwtAuthGuard для защищённых роутов
- [ ] (опц.) RolesGuard + `@Roles()`
- [ ] Unit-тесты: AuthService (+ guard при необходимости)
- [ ] e2e: auth flow (register/login → access protected)

## 5) Links CRUD
- [ ] POST /links (создание slug)
- [ ] GET /links (список + пагинация)
- [ ] PATCH/DELETE /links/:id (disable/delete)
- [ ] DTO валидации + ошибки
- [ ] Unit-тесты: LinkService
- [ ] e2e: create → list → disable/delete

## 6) Redirect + события кликов
- [ ] GET /r/:slug → redirect (301/302)
- [ ] Запись события клика (минимально: linkId + timestamp)
- [ ] e2e: redirect happy-path + disabled link негативный кейс

## 7) Redis (опционально)
- [ ] Подключить Redis (например Upstash)
- [ ] Кэш `slug → url` (TTL)
- [ ] Rate limit (create link и/или redirect)
- [ ] Счётчики кликов (INCR)
- [ ] Unit-тесты: Redis-слой (ключи/TTL/инкременты)
- [ ] (опц.) Integration/e2e с реальным Redis

## 8) Cron на Vercel
- [ ] GET /cron/aggregate (агрегация счётчиков в Postgres)
- [ ] GET /cron/cleanup (очистка)
- [ ] Защита Authorization Bearer `CRON_SECRET`
- [ ] Idempotency + Redis lock (TTL) для защиты от параллельных запусков
- [ ] `vercel.json` с cron расписанием
- [ ] e2e: cron без секрета → 401, с секретом → 200, повторный запуск не ломает данные

## 9) Frontend (Next.js)
- [ ] UI: login/register
- [ ] Dashboard: создать ссылку, список ссылок
- [ ] Страница аналитики (таблица/график)
- [ ] API client слой
- [ ] Деплой `web` на Vercel + env

## 10) CI/CD и качество
- [x] CI: lint → unit tests → e2e tests
- [x] Блокировать merge/deploy при падении тестов
