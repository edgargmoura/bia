# [004] - feat - importante-checked-by-default

## Description
When adding a new task on the task creation screen, the "Importante" checkbox must be checked by default.

## Acceptance Criteria
- [ ] When the task creation form is opened/rendered, the "Importante" field is pre-checked (true)
- [ ] The user can still uncheck it before submitting
- [ ] Existing tasks are not affected

## Technical Notes
- Locate the task creation form component in the `client/` directory
- Set the default state of the `importante` field to `true`

## Type
`feat`

## Priority
Medium
