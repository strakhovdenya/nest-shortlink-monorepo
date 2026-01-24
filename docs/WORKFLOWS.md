# Workflows (шпаргалка для Codex)

В Codex нельзя добавить кастомные slash-команды, поэтому используй workflows ниже (копипаст в чат).

## PLAN
```
Follow workflow: PLAN.
Задача: <опиши задачу>.
Ограничения: не меняй код на этом шаге.
```

## IMPLEMENT_BACKEND
```
Follow workflow: IMPLEMENT_BACKEND.
Реализуй: <описание>.
Сверься с docs/IMPLEMENTATION_CHECKLIST.md.
В конце отметь выполненное и обнови docs/STATUS.md.
```

## ADD_TESTS
```
Follow workflow: ADD_TESTS.
Покрой unit + e2e тестами изменения в: <модуль/сервис>.
В конце: список файлов и команды запуска.
```

## FIX_BUG
```
Follow workflow: FIX_BUG.
Баг: <описание>.
Сначала тест → потом фикс → обнови чек-лист/статус.
```
