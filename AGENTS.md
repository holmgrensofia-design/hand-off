# Working agreement

- Continue the established prototype and preserve its artwork and UI. No framework rewrite or redesign as a first step.
- This handoff authorizes preparation and local review only. Do not deploy, replace either website, change access, create another hosted version, send messages, or modify billing without a subsequent user request.
- Read START-HERE.md and DECISIONS.md before editing. Treat the October 30 directory as an unapproved experiment, not the default.
- Preserve saved progress and existing storage keys. Do not transfer personal progress between copies without authorization.
- Keep changes small, reversible and easy to compare. Show one visual change at a time; never say it is live or approved without evidence.
- No global image sharpening/recolouring; no replacement of approved creatures or automatic return of rejected illustrations.
- Do useful preparation yourself. Avoid asking Sofia to find files, manage technical setup or repeatedly restate settled preferences. Ask only for genuinely missing decisions.
- Run checks appropriate to actual code changes. Baseline regression command: `node --test app/tests/progress.test.mjs` from the handoff root.
- Exclude credentials and private saved state from exports. Preserve the fireplace recording's AUDIO_CREDITS.md.
