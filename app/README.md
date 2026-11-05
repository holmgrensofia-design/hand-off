# Walking Reset · The Lantern Garden

Second browser iteration for Sofia's ATELIER, 22 October 2026. See FEEDBACK.md for requirements, design proposals and future sparks.

Buildless static HTML, CSS and ES modules in dist/. A single-file downloadable version embeds the three artwork assets, styles and scripts; fonts use Google Fonts with system fallbacks.

## Verification
- Syntax checks for both modules.
- Logic checks for all 31 scene states (quiet start plus 30 stages), fox/finale gates, completed-day counts, edited steps, date boundaries and v1 progress compatibility.
- Browser: entry window remains at the same top/height while typing 9, 9999, 10000 and larger values, at desktop and 390px phone widths.
- Browser: held keyboard completion, optional tap completion, separate extras, illustrated reveal and return to garden.
- Browser: all thirty days completed via actual interface interactions; 30/30 ending and progress verified after reload.
- Browser: every scene stage selected through preview controls; saved step total unchanged.
- Browser: simulated device steps yield a golden key; key opens fox room.

## Limits
Real iPhone touch/keyboard behaviour must still be checked on a physical phone. No native Apple Health, watch access, cloud step sync or iPhone browser haptics. Saves are per browser. Stage order, below-goal handling and reward triggers are provisional. Only one autumn world exists. Future cross-challenge keys are not implemented.

## Artwork
Original autumn scene and fox room from the first iteration are preserved. Built-in image generation edited the autumn reference into an aligned quiet starting state: remove only the fox and turn off cottage, oak-window and lantern lights, keeping composition and object positions. The source assets remain separate and the original is retained. The runtime restores masked regions from the original and adds code-native motion layers.

## Third iteration
Review refinements are recorded in FEEDBACK.md. The current fireplace uses an optional CC0 recording (see AUDIO_CREDITS.md); fire.mjs is retained legacy source and is not imported.

## Daily ritual review
The current version uses a thirty-day step goal, per-entry reference snapshots, and a reveal for every marked day. Run `node --test tests/progress.test.mjs` for progress regression coverage. `python scripts/standalone.py` refreshes both self-contained HTML downloads. The paper-lantern ritual is silent; extras use an optional brief soft tick.

## Garden and room review (23 October)
All 30 discovery labels now match the walkthrough in FEEDBACK.md. Tree-hanging lanterns are removed. Painted creature assets support breathing, small poses, flight/route transitions and sleep. The leaf-gap layer is local to the upper canopy. Day 30 celebrates without granting the key. Studio room preview is an independent design-review action and does not alter saved secret status. The room starts its CC0 fire recording on entry unless previously muted; browser audio rejection leaves an explicit Unmute fallback.

Verified: seven Node regressions, browser traversal of stages 0–30, no hanging-lantern elements or unintended key/door access in those previews, room entry starting audio, and live CSS motion on rain, embers and breathing. Phone hardware behavior remains unverified.
