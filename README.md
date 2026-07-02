# Digital.Power — digitalpower.art

Vite + React, PL/DE/EN, hosting: Netlify (auto-deploy z GitHub).

## Deploy GitHub -> Netlify (raz)
1. Utworz repo na github.com (np. `digitalpower`), wrzuc CALA zawartosc tego folderu.
2. app.netlify.com -> Add new site -> Import an existing project -> GitHub -> wybierz repo.
3. Netlify sam wykryje ustawienia z netlify.toml (build: `npm run build`, publish: `dist`). Klik Deploy.
4. Site settings -> Domain management -> dodaj digitalpower.art (DNS juz ustawiony: A @ -> 75.2.60.5).

Od teraz kazdy push do repo = automatyczna publikacja.

## Obrazy
Wrzuc pliki JPG do `public/media/` — lista w `public/media/README.txt`.
Bez nich strona dziala (gradienty w tle).

## Jezyki
- `/` — polski, `/de` — niemiecki, `/en` — angielski
- Teksty: `src/locales/pl.json`, `de.json`, `en.json` — edytujesz JSON, reszta sama.

## Kontakt (w kodzie)
- E-mail: dpx369@gmail.com
- WhatsApp: wyswietlane 049 176 87988597, link wa.me/4917687988597
- Zmiana: `src/sections/Contact.jsx` (stale na gorze pliku)

## Lokalnie
npm install
npm run dev
