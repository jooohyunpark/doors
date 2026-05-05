# Doors

A small Next.js + React Three Fiber experiment: a 3D scene of colored doors that link between rooms. Clicking a door routes to `/room/[id]` with a fade transition between pages.

## Stack

- Next.js (Pages Router) + React 19
- `@react-three/fiber` + `@react-three/drei` for the 3D scene
- `@react-spring/three` for hover springs
- `motion` for the page-to-page fade

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000 — redirects to /room/1
pnpm build    # static export of /room/1 … /room/8
pnpm start
pnpm lint
```

## Layout

- `src/pages/room/[id].js` — per-room page (SSG'd from `roomData`)
- `src/data/index.js` — room palette and door layout config
- `src/components/Three/*` — Scene / Room / Door / Floor
- `src/components/PageTransition.jsx` — route fade
