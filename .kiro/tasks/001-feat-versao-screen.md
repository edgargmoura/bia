# [001] [feat] Versao Screen

## Description
Create a dedicated screen in the React frontend to display the application version, consuming the existing `/api/versao` endpoint.

## Business Value
Provides users and operators a quick visual way to confirm which version of BIA is currently running, useful for debugging and environment validation.

## Acceptance Criteria
- [ ] A new route `/versao` is registered in `App.jsx` using React Router
- [ ] A new component `Versao.jsx` is created under `client/src/components/`
- [ ] The component fetches `GET /api/versao` on mount and displays the returned version string
- [ ] Loading and error states are handled and displayed to the user
- [ ] The screen follows the same visual pattern as the existing screens (uses `Header`, `Footer`, same CSS classes)
- [ ] A navigation link to `/versao` is accessible from the app (e.g., in the `Header`)

## Technical Notes
- API endpoint: `GET /api/versao` → returns plain text, e.g. `Bia 4.2.0`
- Base URL from env: `import.meta.env.VITE_API_URL || "http://localhost:8080"`
- Follow the same component structure used in `Tasks.jsx` and `About.jsx`
- Route registration follows the pattern already in `App.jsx`

## Out of Scope
- No backend changes required
- No new API routes or controllers

## Story Points: 2
## Priority: Medium
## Type: feat
