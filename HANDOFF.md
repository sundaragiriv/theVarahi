# VARAHI — SINGLE HANDOFF

**Read this whole file before touching anything.** It is the only source of truth.
Work from `E:\sites Development\varahi`. Everything else is being deleted or archived.

---

# PART 0 — THE DECISIONS (settled, do not relitigate)

| Decision | Answer |
|---|---|
| Brand | **Varahi**. No "Net". ("VarahiNet" read as a network/telecom firm.) |
| Domain | **theVarahi.com** |
| varahinet.com | 301 redirect, page-for-page. Stays registered, not developed. |
| Varahi Group | A **line in the footer** — "Varahi is a Varahi Group company." NOT a second site. Revisit only when a second venture is real. |
| Pillars | **SAP × AI × CX** (Platform / Cognition / Human layers). Agentic work is a capability INSIDE AI, not a third pillar. |
| Locations | **Raleigh · India · Canada** |
| Team | **One named principal (the founder).** No "profile coming soon" placeholder cards. |
| Surviving codebase | **This one** — React + Vite + TS + Tailwind. |
| Content source | The retired Astro site (see Part 3). Its voice and thesis are the brand. |
| Contact | **Form only.** No Calendly. |

## Why one site, not two
The owner briefly considered theVarahi.com as a holding-company site above varahinet.com.
Rejected: a group site above a single operating business is a brochure for nobody, splits
SEO, and recreates the exact brand confusion this whole exercise exists to end.

---

# PART 1 — REPO CONSOLIDATION

## Keep
```
E:\sites Development\varahi     <- THE codebase. React + Vite. Ships to theVarahi.com.
```

## Archived (already done — do not develop against it)
```
E:\varahiClaude\_ARCHIVE\varahi-astro-site.zip   <- full Astro source (73 files)
```
This is the origin of all real content. Keep the zip for reference; the dark Bebas
aesthetic and some page compositions are worth revisiting.

## Delete (after you confirm the build is green and content is ported)
```
E:\varahiClaude\varahi\    <- the working Astro tree. Content already ported. Zip retained above.
```
**Do not delete until Part 6 step 8 passes.**

---

# PART 2 — BRAND SYSTEM (built and verified — do not redesign)

## Colour
Light is the default. Dark is a toggle (`html[data-theme='dark']`), same hues, different
exposure. Tokens live in `src/index.css`. **All 14 colour pairs verified WCAG AA.**

| Role | Light | Dark |
|---|---|---|
| Page | `#fbfaff` | `#070b16` |
| Ink | `#14183a` | `#eaedf8` |
| Muted | `#565e7a` | `#9aa3bc` |
| **Action blue** | `#2854e6` | `#3a64ef` |
| Card | `#ffffff` | `#161e33` |

The CSS previously carried **three dead palettes** (a green/bronze set, a warm-paper set,
and the current indigo). 137 rgba stops and 12 orphan hexes were collapsed onto channel
tokens: `--vn-accent-rgb`, `--vn-ink-rgb`, `--vn-surface-rgb`, `--vn-shadow-rgb`,
`--vn-gold-rgb`, `--vn-violet-rgb`. **That is what makes dark mode work.** Do not
"simplify" a token back to a raw hex — you will break one of the two modes.

**Rules:** Blue = action (buttons, links, focus). Violet = brand (eyebrows, category marks).
A violet primary button is a bug. **No gradient text, no blurred blobs, no glow** — the
owner explicitly rejected these twice.

## Type — three tiers, and the tiers matter
| Where | Font | Why |
|---|---|---|
| Hero + section headings (short, <=6 words, poster moments) | **Bebas Neue** | One weight only, so it cannot get heavier. All-caps, condensed, architectural. |
| Article + case-study titles (long, sentence-case) | **Oswald 500** | Bebas has NO lowercase. A 12-word case-study title in Bebas is an unreadable wall. Oswald is Bebas's sibling with lowercase — nobody notices the switch. |
| Body copy | **Inter 400** | 16px / 1.65, max 68ch. |
| Nav, numerals, kickers, labels | **JetBrains Mono 500** | tracking .12em, uppercase. |

Rajdhani is **out** (owner found it too heavy). Do not reintroduce it.

## Logo
`src/components/WordMark.tsx` — the master logo's **verbatim path data**, flattened.
Bracket -> `var(--vn-teal)`. V + notch -> `currentColor` (inverts with theme for free).
The master's 3 gradients / drop shadow / floor glow were dropped: invisible on light,
mush below 40px.
- Header: `<WordMark />` -> "Varahi"
- Footer: `<WordMark variant="group" />` -> "Varahi Group"
- `public/favicon.svg` — dark tile
- `public/brand/varahi-group-dark.svg` — **the master, gradients intact.** For decks and
  LinkedIn. Do not delete.

**The turmeric full stop.** The wordmark ends in a turmeric dot (`rgb(var(--vn-gold-rgb))` —
`#F2B233` light / `#F7C65B` dark). It is the ONLY warm colour in the lockup and one of very
few on the site. Purpose: it stops the brand being three shades of blue and nothing else,
and it reads as "statement finished". Class: `.vn-wordmark__dot`. **Do not add turmeric
anywhere else in the lockup, and do not use it as a button or a background for text**
(it fails AA as text on light — use `--vn-gold` `#965d0a` if turmeric must ever BE text).

## Nav structure — keep the numbering
The live site's nav is numbered and it is good — it implies a route through an argument,
not a menu of services. Keep it:
```
01 — PRACTICE    02 — APPROACH    03 — WORK    04 — INSIGHTS    05 — ABOUT     [TALK TO US ->]
```

---

# PART 3 — CONTENT (this is the actual job)

The React app's existing prose is placeholder: "SAP Consulting, AI Strategy, and Agentic
Framework" appears ~15 times verbatim; every page restates the pillars; the founder is
invisible. **All of it is replaced by the copy below**, taken from the live site.

**Rule: never invent a metric, client, logo, or outcome.** The old React data file held
nine fabricated case studies with made-up percentages (27% / 31% / 22%) that contradicted
the site's own published Proof Standard. They are deleted. Do not regenerate them.

## 3.1 The thesis (this is the most valuable paragraph the company owns)
> The firms that win the next decade in service-led industries — utilities, manufacturers,
> asset operators, healthcare, public services — will treat SAP, AI, and customer experience
> as **one design problem, not three procurements**.
>
> Most consultancies aren't set up for this. The big SI firms compete on hours, not
> architecture. The boutique strategy houses make decks. The pure-play AI shops don't know
> how to ship inside an enterprise estate. The CX studios don't know what an iFlow is.
>
> Varahi exists in the gap. We're the firm you call when the SAP estate, the AI ambition,
> and the customer experience all need to land at the same time, on the same calendar, with
> the same delivery lead.
>
> We're senior, deliberately small, and we work with operators who measure us in dispatched
> jobs, resolved cases, and customer return rates — not slide counts.

## 3.2 Home
- Eyebrow: `Now operating · Global delivery` / `Service-led enterprise` / `Raleigh · India · Canada`
- H1: **Enterprise Software That Thinks.**
- Sub: `SAP × AI × CX — engineered as one`
- CTAs: `See the practice ->` / `Start a conversation ->`
- Closing band: **A single team. A single roadmap. One number to call when it breaks.**
  (kicker: `-> ENGINEERED TOGETHER`)

## 3.3 The three layers (home + /practice)
Intro: *"Most firms hand you a slice — the implementer, the data team, the experience
consultancy. Varahi runs all three in the same room. Code, models, and journeys ship
together — or they don't ship."*

**01 / SAP — THE PLATFORM LAYER.**
> Deep S/4HANA, Service Cloud, and Field Service Management work — clean architecture,
> ruthless integration discipline, real handover.

Capabilities: S/4HANA Service & CS · SAP Field Service Management · SAP Service Cloud V2 ·
BTP, CPI & Joule · Architecture & Roadmap · Managed Evolution

**02 / AI — THE COGNITION LAYER.**
> We embed AI where it pays back — dispatch, triage, knowledge, technician copilots, demand
> sensing. Not generic chatbots.

The five workloads: Dispatcher copilot · Technician copilot · Service triage & assist ·
Predictive service & parts · Knowledge & RAG on the SAP estate

Four production principles: *Enterprise data, not internet data* · *Authorisation propagates*
· *Observability, day one* · *Human-in-the-loop where it matters*

**03 / CX — THE HUMAN LAYER.**
> Service journeys designed before the system is configured. We map what the customer feels
> and shape the platform to match.

Capabilities: Service journey orchestration · Self-service & omnichannel design ·
Case-to-resolution redesign · Adoption & change delivery

Closing: *"A new SAP estate without an AI plan is already obsolete. AI without a clean data
and process foundation is theatre. Both without CX is just a more expensive way to
disappoint customers."*

## 3.4 Approach — Frame, Prototype, Build, Sustain
> We start with what hurts, design the smallest defensible answer, build it for production
> from day one, and stay long enough to be sure it sticks. Senior delivery, single backlog,
> one number to call.

1. **Frame** (2–4 weeks) — real interviews, real data, real walk-throughs. Leaves with a
   sharp problem statement, a value model, and an architecture sketch you can defend at the
   audit committee.
2. **Prototype** — working software inside thirty days. AI agents tested against your real
   master data. Risk surfaced before any committee asks.
3. **Build** — production delivery. SAP, AI, CX and integration on a **single backlog**.
   One delivery lead. One status.
4. **Sustain** — hypercare into managed evolution. We hand over only when the platform is
   genuinely yours.

Operating principles: *Senior delivery, no pyramid — the architects who scoped your
engagement run it.* · *Production from day one — no prototypes that need a rebuild to ship.*
· *We'll tell you when SAP isn't the right answer. The reverse is also true.*

## 3.5 About
- Positioning line: *"Independent enterprise consulting firm."*
- Use the thesis (3.1) in full.
- **Team: the founder only.** Title: *Founder · Solution Architect.*
  > Twenty years in SAP service and field service management. Architect on programs across
  > utilities, manufacturing, and asset-heavy operators. Holds the pen on architecture and
  > integration decisions across the practice.
  **Delete the two "To be announced / Profile coming soon" cards.** Listing unfilled roles
  as if they were staff is the same failure as the fabricated metrics. If those roles are
  being hired for, they belong on a Careers page.
- Locations: **Raleigh · India · Canada.** (The live site contradicts itself — home says
  "Raleigh · India · Canada", contact says "India · United States · UAE", about says
  "India / United States / EMEA hub". Use Raleigh · India · Canada everywhere.)

## 3.6 Contact / Engage
- H1: *Tell us what you're trying to build.*
- Body: *"Brief is fine. We'll come back within a business day with either questions, a
  scoping conversation, or an honest 'this isn't us — try X' recommendation."*
- Emails: migrate `@varahinet.com` -> `@thevarahi.com` (hello@, partners@, careers@).
- The live site says *"No form-submission backend yet."* **That is now fixed** — see 4.3.
  Remove that apology line.

## 3.7 Published content — 15 real pieces (ALREADY PORTED)
- `src/content/insights/*.md` — 10 articles (~6,500 words)
- `src/content/work/*.md` — 5 case studies, anonymized clients, **measured** metrics
- `scripts/gen_content.py` -> generates `src/data/content.generated.ts` (typed, zero runtime
  deps). **Re-run `python3 scripts/gen_content.py` after editing any .md.**

**TODO: the pillar map inside `gen_content.py` still says `agentic`. Change it to `cx` and
re-map:**
```
2025-industrial-services-fsm            -> sap
rag-knowledge-assistant-sap-service     -> ai
field-technician-copilot-offline-parts  -> ai      (was agentic)
agentic-quote-to-dispatch-orchestration -> ai      (was agentic)
ai-triage-copilot-service-desk          -> ai      (was agentic)
s4-clean-core-ai-readiness              -> sap
sap-service-ops-data-contracts          -> sap
industrial-field-service-cx-gap         -> cx      (was sap)
s4hana-rise-migration-decisions         -> sap
sap-needs-an-ai-plan                    -> ai
core-ai-evaluation-playbook             -> ai
sap-ai-use-cases-that-scale             -> ai
agent-governance-for-enterprises        -> ai      (was agentic)
sap-ai-copilot-role-design              -> ai      (was agentic)
agentic-ai-handoff-problem              -> ai      (was agentic)
```
Note the honest consequence: **CX has thin published proof (1 piece).** Show it thin. Do
not pad it. That is a content gap for the owner to fill, not a problem to paper over.

**Excluded:** one video with `youtubeId: dQw4w9WgXcQ` (a Rickroll placeholder).

---

# PART 4 — WHAT'S ALREADY BUILT vs WHAT'S LEFT

## 4.1 Done and verified
- Theme (light default + dark toggle), 14/14 WCAG AA
- `src/components/ThemeToggle.tsx` (localStorage-persisted)
- Flat SVG logo + favicon + master brand asset
- 15 real articles ported + content pipeline
- Nine fabricated case studies deleted
- Renamed to Varahi; canonicals -> thevarahi.com
- `/connect-with-us` (a byte-for-byte duplicate of `/engage`) merged into a redirect

## 4.2 Routes — needs the CX rename
Currently `/agentic`. Must become `/cx`, with `/agentic` -> 301/redirect to `/cx`.
```
/                          home
/practice                  the three layers  (currently /what-we-do — rename)
/sap  /ai  /cx             pillar pages      (/agentic -> redirect to /cx)
/approach                  Frame/Prototype/Build/Sustain (currently /how-we-work — rename)
/our-thinking              listing (work + insights)
/our-thinking/work/:slug
/our-thinking/insights/:slug
/about
/engage                    contact form
```

## 4.3 The contact form — works now
Previously `<button type="button">` with no handler: **every CTA on the site was a dead end.**
Now: validation, sending/sent/error states, POSTs JSON to `VITE_CONTACT_ENDPOINT`, falls back
to a pre-filled `mailto:` if unset. See `.env.example`. Set the endpoint (Formspree / Netlify
Forms / Basin) before launch.

## 4.4 Still to do
1. Fix whatever is breaking `npm run dev` (see Part 5)
2. Port ALL copy from Part 3 into the pages
3. Rename `agentic` -> `cx` end to end (routes, data, pillar map, nav, content map)
4. Rename `/what-we-do` -> `/practice`, `/how-we-work` -> `/approach` (keep redirects)
5. Bebas Neue + Oswald + Inter + JetBrains Mono type tiers
6. Numbered nav (01—05)
7. Real social URLs (currently bare `linkedin.com` and `x.com` placeholders)
8. Set `VITE_CONTACT_ENDPOINT`
9. Deploy to theVarahi.com; 301 varahinet.com page-for-page
10. Delete `E:\varahiClaude\varahi\` (zip is retained)

---

# PART 5 — TRAPS (read this or you will repeat my mistakes)

### `tsc --noEmit` is a NO-OP in this repo
`tsconfig.json` is a project-references stub with `"files": []`. It type-checks **nothing**
and reports success on broken code. **Always use `tsc -b`.** I shipped truncated files while
reporting "typecheck clean" because of this.

### Writes to this repo can silently truncate
Editing through the Windows mount truncated four files mid-line (`VisionPages.tsx`,
`AppRouter.tsx`, `RebuildHeader.tsx`, `WordMark.tsx`). All were rebuilt and verified — but
**after every write, re-read the file and confirm the tail is intact.**

### If the dev server fails, suspect truncation first
Look for abrupt file endings, missing closing tags, missing `export default`, NUL bytes,
unterminated strings. Read the ACTUAL error — Vite overlay + terminal + browser console.
Do not guess.

### Pre-existing, not caused by the above
- `vite.config.ts` uses `process` without `@types/node` -> `tsc -b` error TS2580.
  Fix: `npm i -D @types/node`.
- `src/index.css.bak` is the pre-change CSS if you need to diff.

---

# PART 6 — ORDER OF WORK

1. `npm run dev` — capture the exact error. Fix it. **This gates everything.**
2. `npx tsc -b --force` and `npx eslint src --ext .ts,.tsx` — both clean.
3. Rename `agentic` -> `cx` end to end. Update `gen_content.py` pillar map, regenerate.
4. Rename `/what-we-do` -> `/practice`, `/how-we-work` -> `/approach`. Keep redirects.
5. Port all copy from Part 3. This is the bulk of the work.
6. Type tiers: Bebas / Oswald / Inter / JetBrains Mono. Numbered nav.
7. About page: founder only. Delete the two placeholder team cards.
8. Click every route. Toggle dark mode on every route. Confirm no dead links.
9. Only now: delete `E:\varahiClaude\varahi\`.
10. Deploy + 301 map.

---

# PART 7 — QUESTIONS FOR THE OWNER (do not guess these)

1. **Real social URLs** — LinkedIn and X.
2. **Form endpoint** — Formspree? Netlify Forms? Something else?
3. **Founder's name and photo** for the About page. The site currently has no human on it,
   which is the single biggest gap for a principal-led practice.
4. **CX proof.** Only 1 of 15 published pieces is CX. Either there's unpublished CX work, or
   the CX pillar is a capability claim rather than a proven one — which is fine, but the site
   must not imply otherwise.

---

**Ground rules, one more time:** Never invent evidence. Verify every write. `tsc -b`, never
`tsc --noEmit`. If a pillar has thin proof, show it thin.
