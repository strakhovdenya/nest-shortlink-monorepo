# apps/api — Nest.js backend override

- Модули: Controller + Service (+ repository/adapter при необходимости)
- Контроллеры тонкие, бизнес-логика в сервисах
- DTO + ValidationPipe
- Swagger обязателен
- Тесты: unit (моки), e2e (supertest + тестовая БД)
