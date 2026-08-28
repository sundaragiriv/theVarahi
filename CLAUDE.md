# theVarahi — working notes for Claude

## Stack
Vite 7 + React 18 + TypeScript + Tailwind 3 + framer-motion + react-router 7.
Deployed to **Cloudflare Workers** (Assets model) — see `wrangler.jsonc` and `worker/`.
`npm run dev` (vite) · `npm run build` · `npm run lint` · `npm run type-check`.

There is **no Next.js and no shadcn/ui here.** Do not run `create-next-app` or `shadcn init`
against this repo — it already has a hand-built design system that shadcn's token layer would
overwrite. Use the shadcn MCP to *read* component patterns, then port them onto our tokens.

## Deploying

Cloudflare Workers, Assets model. `wrangler` is a devDependency — never call it
through `npx`, which has repeatedly resolved a broken copy on this machine.

```
npm run cf:login    # one-time, opens a browser for OAuth
npm run deploy      # vite build && wrangler deploy
```

Non-interactive (CI, or an agent session): set `CLOUDFLARE_API_TOKEN` instead of
logging in. Without it wrangler exits with
"In a non-interactive environment, it's necessary to set a CLOUDFLARE_API_TOKEN".

**Known breakage:** `node_modules/@cloudflare/workerd-windows-64/bin/` installs
empty on this machine, so the native `workerd.exe` is missing. Reinstalling does
not fix it — suspect antivirus quarantine of the binary. This breaks
`wrangler dev` and `wrangler deploy --dry-run`, which load miniflare. It does
**not** break `wrangler deploy`, which never touches workerd. Use `npm run dev`
(Vite) for local work and deploy normally.

**Verifying a deploy actually landed.** `not_found_handling` is
`single-page-application`, so *every* missing path returns HTTP 200 with
`index.html`. A 200 proves nothing. Compare the asset hash instead:

```
grep -oE 'assets/index-[A-Za-z0-9_-]+\.css' dist/index.html
curl -s https://thevarahi.com/ | grep -oE 'assets/index-[A-Za-z0-9_-]+\.css'
```

## The repo is PUBLIC
`github.com/sundaragiriv/theVarahi`. Never put an API key, token, or client name into a tracked
file. Secrets go in `.env` (gitignored) or user-scoped config, never `.mcp.json`.

## Design system — these are guardrails, not suggestions
Tokens live in `src/index.css` as `--vn-*` custom properties, with a full light/dark pair.
Always use the token, never a raw hex or a Tailwind color for brand surfaces.

- **Type:** Rajdhani = display/title/mono voice. Inter = body.
- **Headings are never bold.** `--vn-display-weight: 300`. Big and light is the owner's explicit
  call. Do not "fix" this to 600/700.
- **Ink/paper:** `--vn-ink` on `--vn-paper`; `--vn-paper-2` for the recessed band;
  `--vn-surface-rgb` for elevated cards.
- **Accent:** `--vn-teal` (#2854e6) is the action blue — 37 usages, it means "clickable".
  `--vn-gold` is turmeric, used sparingly. `--vn-violet-rgb` is decorative only.
- **Contrast is already tuned to AA** and annotated inline in `index.css`. If you change a
  colour, recompute the ratio and update the comment.
- Container width: `--vn-max: 1180px`.

## Brand facts (don't invent alternatives)
Women-owned SAP consulting practice. Contact is `venkata@thevarahi.com`; the contact form posts
to `/api/contact` in production. Proof and client references on the site are **real** — never add
a placeholder testimonial, a fake logo wall, or an invented metric.

## Building new UI
Follow `docs/DESIGN-WORKFLOW.md`. Short version: design system first, one page as proof, then
`/design-audit` before you call it done.
