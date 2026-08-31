# LeukemiPrediag — C&T Technology Co., Ltd.

Static, English-language, multi-page website for **LeukemiPrediag**, a clonal-fitness measurement
pipeline for clonal haematopoiesis (CH), built by **C&T Technology Co., Ltd.** (Bắc Ninh, Vietnam). This
site exists to support the company's application to the **NVIDIA Inception program** — it needs to read
as a credible, working company website, not a pitch deck. No backend.

This replaces a previous Vietnamese-language landing page for a web-design/AI-agent services business
(see git history before the LeukemiPrediag rewrite if that content is ever needed again).

## Source of truth

All factual content on this site comes from the company's NVIDIA Inception pitch deck (August 2026). The
full fact sheet (every number, cohort name, stat, and the deliberately-sparse sections like "what we need
from NVIDIA" and "the four rejected hypotheses") is preserved in the workflow script used to draft this
site — see `.claude` workflow transcripts, or ask the team for the deck. **Do not add any statistic, named
institution, benefit, date, team member, or client that isn't already on the site** — this is a science
credibility site; a fabricated number here is far more damaging than on a normal marketing site. If new
real data becomes available (e.g. a larger cohort, a new validated result), update the numbers and cite
what changed; don't extrapolate or round up to sound more impressive.

## Structure

- `/` — Home: overview + the two headline proof points (signal enrichment, negative-results honesty) +
  links out.
- `/research/` — The full scientific case: the question (CH background, clonal fitness as prediction
  target), the instrument (cohorts, enrichment, external validation, BioNeMo integration), negative
  results (rejected hypotheses, data-limitation framing, institutional-access gate). This is the
  credibility centerpiece — keep it precise, no marketing fluff.
- `/roadmap/` — What we're asking NVIDIA Inception for, and the 3-stage gated roadmap (current result →
  biobank-scale validation, gated on an institutional partner → clinical pilot, gated on that result).
- `/about/` — Company blurb + founder contact (`#contact` anchor: Vũ Việt Trung,
  trungvu0512@cttech.ltd, Bắc Ninh, Vietnam).
- `/404.html`, `/robots.txt`, `/sitemap.xml`, `/vercel.json` (host-canonicalization redirect,
  cttech.ltd → www.cttech.ltd).

## Design system (`assets/css/main.css`)

- Palette: paper `--paper #F3F1EC`, ink `--ink #1E1C19` / `--ink-soft #5B564C`, hairline `--line #DCD7CB`,
  accent `--amber #A97426` (`--amber-bright #E3B45B` on dark), dark full-bleed block `--dark #1D1B18`.
- Type: **Source Serif 4** for headings and long-form body copy (editorial, scientific-paper feel);
  **Inter** for UI chrome — nav, buttons, eyebrows, table labels, footer meta. Both loaded via Google
  Fonts in each page's `<head>`.
- Key components: `.eyebrow`, `.hero`, `.section` / `.section-alt` / `.section-dark`, `.stat-grid` /
  `.stat-hero` (big numbers), `.datatable` (label/value rows with hairline dividers — used for the cohorts
  table), `.card-grid` / `.card`, `.milestones` / `.milestone` (numbered roadmap steps), `.toc` (research
  page in-page nav), `.contact-card`, `.btn` / `.btn-primary` / `.btn-ghost`.
- Prefer existing classes; add new CSS only when genuinely needed, appended to the end of the file.
- Mobile nav toggle lives in `assets/js/main.js` (hamburger below 768px — see `.nav-toggle` /
  `.nav-links[data-open]` in the CSS).

## Every page's `<head>` must include

Canonical URL on `https://www.cttech.ltd`, OG tags (no `og:image` yet — none has been generated; add one
under `/assets/img/` before relying on social-preview cards), `<title>` ≤ 65 chars, meta description
140–160 chars, `lang="en"`. Organization JSON-LD lives on the homepage only.

## Voice

Precise, unhurried, scientific — closer to a research paper or a serious deep-tech pitch than a sales
page. State uncertainty and negative results plainly (that's a trust signal here, not something to soften).
No superlatives ("revolutionary", "cutting-edge") — let the numbers and the literature-matching validation
carry the credibility.

## Deploy

Static site — Cloudflare Pages or Vercel, root = this directory, no build step. Folder URLs
(`/research/`) work via each folder's `index.html`.
