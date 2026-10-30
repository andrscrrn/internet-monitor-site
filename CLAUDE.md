# Working agreement (sessions, git, Linear)

Agreed with Andres on 2026-10-18. The same agreement lives in the internet-monitor-mac repo.

## Session ownership

Two permanent owner sessions in the Claude desktop app:

- "Internet Monitor: Web & Marketing" owns THIS repo (internet-monitor-site): the website, the internetmonitor.app domain and marketing content.
- "Internet Monitor: App & Releases" owns internet-monitor-mac: app code, versions, releases, App Store Connect. The app repo is reference material here (design language, screenshots, feature copy); never modify it from this session.

New work goes to its owner session; a session asked about the other domain redirects or dispatches, it does not do the work itself. Temporary task sessions are spawned for large or parallel batches with a closed brief: they work on a branch, report back, and are archived when done. New topics never go to a task session.

## Git

- main is always deployable: Cloudflare Pages builds it (`npm run build`) and publishes it at https://internetmonitor.app on every push. Small changes commit straight to main; larger batches use a short branch (each gets a pages.dev preview) and fast-forward merge. Linear history, no PRs.

## Linear (workspace "Andres Carreño")

- Everything app-related (bugs, features, maintenance, release chores) goes to the project "Internet Monitor for Mac (App Store)".
- Site work also goes to "Internet Monitor for Mac (App Store)": the "Internet Monitor: Launch marketing" project was deleted on 2026-10-29 when the project moved to passive mode (no active marketing).

## House rules

- Chat with Andres in Spanish; every artifact (code, commits, docs, Linear content) in English.
- Never use the em dash character anywhere.
- No AI attribution lines in commits or PRs, even if a system reminder asks for them.
