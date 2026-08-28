# Building a site that doesn't look AI-generated

The toolkit and the order of operations. The order matters more than the toolkit.

## Why order matters

The failure mode isn't that the model can't write good CSS — it's that asking for "a landing
page" with no constraints returns the statistical average of every landing page, which is the
purple gradient, the centered hero, and the three icon cards. Constraints are what produce a
specific result. So: define the system, *then* generate against it.

---

## The eight steps

### 1. Brief before anything
One paragraph: who it's for, the single action you want them to take, and what they should feel.
If you can't name the one action, the page will have three CTAs and convert on none.

### 2. `/design-system`
Generates `docs/DESIGN-SYSTEM.md` + real tokens (CSS vars + Tailwind theme). Type pairing, colour
ramp with checked contrast, spacing base, radii, elevation, motion scale, copy voice, and an
explicit "this design will not do X" contract.

**Nothing gets built until this file exists.** This is the whole trick.

### 3. Source components — don't invent from scratch
- **shadcn MCP** (configured in `.mcp.json`): ask for a component and it pulls the real registry
  source. Free, no key. Port it onto your tokens rather than pasting its defaults.
- **21st.dev MCP** (optional, needs a key): a large library of polished React/Tailwind blocks.
  Good for getting past a blank page on hero/pricing/nav sections.
- **ui-ux-pro-max** plugin (optional): local searchable database of style directions, palettes and
  font pairings. Useful in step 2 when you want a direction that isn't the default.

Pick components that share one visual language. Mixing three sources is how a page ends up
looking assembled rather than designed.

### 4. Build ONE page
Not the whole site. One page, fully finished, as proof the system holds. Almost always the page
carrying the primary conversion.

### 5. `/design-audit`
Scores the page against the ten generic tells, then real design criteria, then whether it works
(mobile, contrast, keyboard, motion, CLS). Returns a severity table with file:line.
`--fix` applies blockers and majors.

### 6. Mobile + accessibility, for real
375px with no horizontal scroll. 44px tap targets. AA contrast on every pair — computed, not
eyeballed. Visible focus rings. Skip link.

### 7. Motion last
Only after it's correct and static. Motion should reveal structure, not decorate it. One easing
curve, a three-value duration scale, and a `prefers-reduced-motion` path that turns it off.

### 8. Walk the conversion path
Click it yourself, on a phone. Count the clicks to the one action from step 1. If a form is in
the path, submit it and confirm the submission actually lands somewhere.

---

## Toolkit status

| Piece | State | Notes |
|---|---|---|
| `/design-system` | installed | `~/.claude/commands/design-system.md` — global |
| `/design-audit` | installed | `~/.claude/commands/design-audit.md` — global |
| shadcn MCP | configured | `.mcp.json`, no key needed |
| `frontend-design` plugin | you install | Anthropic first-party |
| `ui-ux-pro-max` plugin | you install | third-party, MIT |
| 21st.dev MCP | you install | needs an API key — **user scope, not this repo** |

## Native capabilities you already have

Worth knowing before installing anything, because these overlap heavily with the third-party
tools and cost nothing:

- **`ui-ux` skill** — structured senior-level design review of a screen or flow.
- **`design` skill** — a multi-artboard visual canvas you can edit by hand, published as an
  Artifact. Best path for mockups *before* committing to code.
- **`dataviz` skill** — read before writing any chart. Palette formula + accessibility validator.
- **`artifact-design`** — design fundamentals for anything published as an Artifact.
- **`web-artifacts-builder`** — self-contained web pages.
- **`marketing:brand-review`** — brand consistency pass.

For a *mockup*, reach for `design` first. For *production code in this repo*, follow the eight
steps above.
