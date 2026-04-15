# [004] - feat - add-task-importante-default-checked

## Branch Model
- **Base branch:** ia-main
- **Feature branch:** 004-feat-add-task-importante-default-checked
- **Assigned agent:** dev (.kiro/agents/dev.json)

> Before starting, the agent must confirm it is on the `ia-main` branch. If not, it must report the situation and ask for authorization to return to it before proceeding.
> After authorization: move this file to `.kiro/tasks/doing/`, commit and push to `ia-main`, then create and switch to the feature branch.

---

## Description
When a user opens the "Add Task" form, the **Importante** checkbox must be checked by default.

## Current Behavior
The `importante` state in `AddTask.jsx` is initialized as `false`, so the checkbox is unchecked when the form loads.

## Expected Behavior
The checkbox **Importante** must be checked (`true`) by default when the form is rendered.

## Acceptance Criteria
- [ ] When the Add Task form is opened, the **Importante** checkbox is already checked.
- [ ] The user can still uncheck it before submitting.
- [ ] Submitting the form without changing the checkbox sends `importante: true`.
- [ ] Existing behavior for all other fields remains unchanged.

## Technical Scope
- **File:** `client/src/components/AddTask.jsx`
- **Change:** Update the initial state of `importante` from `false` to `true`.

```js
// Before
const [importante, setImportante] = useState(false);

// After
const [importante, setImportante] = useState(true);
```

## Out of Scope
- No backend changes required.
- No changes to other components.

---

## Implementation Checklist

### dev (.kiro/agents/dev.json)
- [x] Confirm current branch is `ia-main`; if not, report and request authorization to switch
- [x] Move this file to `.kiro/tasks/doing/`, commit and push to `ia-main`
- [x] Create and switch to branch `004-feat-add-task-importante-default-checked`
- [x] Update `client/src/components/AddTask.jsx`: change `useState(false)` to `useState(true)` for `importante`
- [x] Manually verify the checkbox is checked by default when the form opens
- [x] Update this checklist marking all completed items
- [x] Notify PO that all activities are complete and the task is ready for review

---

## PO Finalization Steps

> These steps must be performed by the PO agent (.kiro/agents/po.json) after the dev agent signals completion.

- [ ] Confirm all checklist items above are marked as done
- [ ] Review the full implementation (`client/src/components/AddTask.jsx`)
- [ ] Verify all Acceptance Criteria are met
- [ ] If everything is correct, inform the user that task [004] has been completed
- [ ] Move this file to `.kiro/tasks/done/`
- [ ] Commit and push the moved file to the remote repository
