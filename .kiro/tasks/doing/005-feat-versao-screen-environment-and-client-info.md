# [005] - feat - versao-screen-environment-and-client-info

## Branch Model
- **Base branch:** ia-main
- **Feature branch:** 005-feat-versao-screen-environment-and-client-info
- **Assigned agent:** dev (.kiro/agents/dev.json)

> Before starting, the agent must confirm it is on the `ia-main` branch. If not, it must report the situation and ask for authorization to return to it before proceeding.
> After authorization: move this file to `.kiro/tasks/doing/`, commit and push to `ia-main`, then create and switch to the feature branch.

---

## Description
The Versão screen currently shows only the application version. It must also display **environment** and **client** information.

## Current Behavior
- `GET /api/versao` returns a plain text string: `Bia 4.2.0`
- The screen renders a single card: **Versão da Aplicação**

## Expected Behavior
The screen renders three cards:
1. **Versão da Aplicação** — existing, no change
2. **Ambiente** — e.g. `development`, `production`, `staging`
3. **Cliente** — e.g. the client/tenant identifier

## Acceptance Criteria
- [ ] `GET /api/versao` returns a JSON object with `versao`, `ambiente`, and `cliente` fields.
- [ ] The Versão screen displays all three fields in separate cards.
- [ ] `ambiente` is read from the env var `AMBIENTE` (fallback: `"development"`).
- [ ] `cliente` is read from the env var `CLIENTE` (fallback: `"default"`).
- [ ] Existing version behavior is preserved.

## Technical Scope

### Backend — `api/controllers/versao.js`
Change response from plain text to JSON:
```js
controller.get = async (req, res) => {
  res.json({
    versao: `Bia ${process.env.VERSAO_API || "4.2.0"}`,
    ambiente: process.env.AMBIENTE || "development",
    cliente: process.env.CLIENTE || "default",
  });
};
```

### Frontend — `client/src/components/Versao.jsx`
- Parse response as JSON instead of text.
- Render two additional `feature-card` elements for `ambiente` and `cliente`.

## Out of Scope
- No database changes.
- No changes to other routes or components.

---

## Implementation Checklist

### dev (.kiro/agents/dev.json)
- [ ] Confirm current branch is `ia-main`; if not, report and request authorization to switch
- [ ] Move this file to `.kiro/tasks/doing/`, commit and push to `ia-main`
- [ ] Create and switch to branch `005-feat-versao-screen-environment-and-client-info`
- [ ] Update `api/controllers/versao.js` to return JSON with `versao`, `ambiente`, and `cliente`
- [ ] Update `client/src/components/Versao.jsx` to parse JSON and render the two new cards
- [ ] Manually verify the three cards render correctly in the browser
- [ ] Update this checklist marking all completed items
- [ ] Notify PO that all activities are complete and the task is ready for review

---

## PO Finalization Steps

> These steps must be performed by the PO agent (.kiro/agents/po.json) after the dev agent signals completion.

- [ ] Confirm all checklist items above are marked as done
- [ ] Review the full implementation (backend controller + frontend component)
- [ ] Verify all Acceptance Criteria are met
- [ ] If everything is correct, inform the user that task [005] has been completed
- [ ] Move this file to `.kiro/tasks/done/`
- [ ] Commit and push the moved file to the remote repository
