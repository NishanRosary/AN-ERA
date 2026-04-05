# AN-ERA

This project now includes:

- `frontend/`: the React marketing site
- `backend/`: a lightweight Node API for health checks and command search

## Quick start

Run both apps together from the repo root:

```bash
npm run dev
```

Or run them separately:

```bash
npm run dev:backend
npm run dev:frontend
```

## Backend API

The backend starts on `http://localhost:4000` by default.

- `GET /health`
- `GET /api/meta`
- `GET /api/actions?q=cloud`

Copy `backend/.env.example` to `backend/.env` to override the port or allowed frontend origin.
