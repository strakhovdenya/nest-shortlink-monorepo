# Как пользоваться в Cursor и Codex

## Cursor (New Chat)
- Набери `/` → увидишь команды из `.cursor/commands`
- Рекомендованный цикл:
  1) `/plan` (без изменений)
  2) `/implement-backend` или `/implement-frontend`
  3) `/add-tests` (если нужно отдельно)
  4) отметить галочки в `docs/IMPLEMENTATION_CHECKLIST.md`

> Команды из `.cursor/commands` **не отображаются** во вкладке Codex.

## Codex (вкладка Codex)
- Codex читает `AGENTS.md` и следует ему.
- “Команды” для Codex: копипаст из `docs/WORKFLOWS.md`
  - `Follow workflow: PLAN`
  - `Follow workflow: IMPLEMENT_BACKEND`
  - `Follow workflow: ADD_TESTS`
  - `Follow workflow: FIX_BUG`
