# Walking Reset — Codex handoff

Prepared for Sofia, 2 November 2026. Continue the existing app; do not rebuild it from a description.

## Which version is which?

**Baseline: `app/`** is the established autumn prototype, saved version 35, commit `4983c69ddad1a3155d4bf1a9741fa1d1cde1a2f0`.
https://walking-reset-autumn-lantern.silkygecko33.chatgpt.site
Site ID: `appgprj_6ada189c47088191ad7e587c4aeb9ade`.

**Unapproved comparison: `experiments/october30/`** is the separate test garden, version 1, commit `1d6df72dd9120c44af8e80b2cfa22752fc285010`.
https://walking-reset-review-oct30.silkygecko33.chatgpt.site
Site ID: `appgprj_6ae487a473748191872b9282215d9af1`.

Local commits match the newest saved Sites versions checked on 2 November. Both websites remain unchanged by this handoff. This is not Claude's separate implementation; its source is not included.

## First Codex task

Read this file, AGENTS.md and DECISIONS.md. Run `npm test`. Open the baseline and then the experiment locally. Review the differences on Days 11–12, 24–25, 28–29 and 29–30. Report what actually works, what looks artificial, and the smallest next fix. Do not automatically merge the experiment or publish anything. Begin with Day 12, then review one visual change at a time with Sofia.

## Run locally

Prerequisites: Node.js with the built-in test runner and Python 3. No npm packages or npm install required.

- `npm test` — baseline progress regression tests.
- `npm start` — baseline at http://localhost:8000.
- `npm run preview:experiment` — comparison at http://localhost:8001.
- `npm run export` — regenerate the baseline standalone HTML downloads.

In a managed Sites environment use its supported preview workflow instead of the standalone local server.

The site is buildless: HTML, CSS and ES modules in `dist/`. `app/dist/app.mjs` controls UI and scene layers; `engine.mjs` holds progress/date logic and JOURNEY; `style.css` holds presentation and effects; `assets/` contains artwork and audio. The main repo also includes tests, export script, feedback history and audio credits.

Each copy has a hosting manifest identifying its EXISTING Site. These are provenance, not permission to deploy or change sharing. No credentials, Git authentication or user saved-progress data are included. Generated standalone downloads were omitted to reduce duplication; they can be regenerated from source.

## Verification completed for this handoff

Baseline: both JS modules pass Node syntax checks; all seven existing regression tests pass. Experiment: both JS modules pass syntax checks. No new visual or physical iPhone QA was performed for this packaging task. Baseline test success does not approve experimental artwork. SOURCE-CHECKSUMS.json fingerprints copied source/assets; neither original repository was modified.

## Important limits

Progress is browser-local, not cloud-synced. Main storage key: `atelier-autumn-v1`; experiment: `atelier-autumn-test-oct30`. Do not merge or reset them. There is no real device step integration, payment flow, production account system, twelve-world collection or native iPhone app. The golden-key device field is simulated; its final rules remain undecided. Native haptics and Health access need future platform work.

Artwork is 1536×1024. The unlit/lit paintings share framing but were generated variants, not guaranteed pixel-identical outside lit regions. Do not regenerate or globally sharpen them to fix one detail. Some unused assets remain in assets/: presence is not approval.

See DECISIONS.md for the current brief. Historical FEEDBACK.md and README.md include superseded experiments; current decisions take precedence.
