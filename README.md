# Fresque zum Weimarer Dreieck

Landingpage für das Workshop-Angebot „Fresque zum Weimarer Dreieck" von **Generation Europa 2025** (ein Projekt des DFJW). Zielgruppe: Jugendleiter\*innen, die Workshops für Jugendliche (14–25 J.) in Deutschland, Frankreich und Polen organisieren.

**Live:** https://fresque-weimarer-dreieck.vercel.app

---

## Tech-Stack

| | |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 |
| Routing | react-router-dom (HashRouter) |
| Internationalisierung | react-i18next |
| Backend | Supabase (Kontaktformular-Submissions) |
| Hosting | Vercel (auto-deploy bei git push) |

---

## Drei Design-Varianten

Die Seite existiert in drei vollständigen Varianten, die über das Routing erreichbar sind. Die finale Variante soll nach Entscheidung des Kunden übrig bleiben.

| Route | Variante | Konzept |
|---|---|---|
| `/#/` | V1 · Offiziell | Navy/Gold/Wine, Montserrat, klassisches 2-Spalten-Layout |
| `/#/v2` | V2 · Modern | Dunkles Navy/Gold, Scrollytelling-Element, Kartenteaser |
| `/#/v3` | V3 · Art-Gallery | Weiß/minimal, IntersectionObserver-Reveal, roter Akzent `#C41E3A` |

Ein `VariantSwitcher`-Link in der Ecke erlaubt das Umschalten zwischen den Varianten (nur im Dev-/Preview-Modus sichtbar).

---

## Lokale Entwicklung

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Dev-Server starten (http://localhost:5173)
npm run build      # Produktions-Build → dist/
npm run preview    # Build lokal vorschauen
```

### Umgebungsvariablen

Für das Kontaktformular wird Supabase benötigt. Datei `.env.local` anlegen:

```
VITE_SUPABASE_URL=https://xmmpjglfmijyvektvtym.supabase.co
VITE_SUPABASE_ANON_KEY=<anon key aus Supabase Dashboard>
```

Ohne diese Variablen fällt das Formular auf einen `localStorage`-Fallback zurück (kein Datenverlust im Dev-Betrieb).

---

## Projektstruktur

```
src/
├── variants/
│   ├── v1/          # Komponenten für Variante 1 (Header, Hero, Footer, App)
│   ├── v2/          # Komponenten für Variante 2
│   └── v3/          # Komponenten für Variante 3
├── components/
│   ├── CardGallery.jsx     # Flip-Karten (5 Kartenpaare), variant-aware
│   ├── ContactModal.jsx    # Modal mit Kontaktformular, variant-aware
│   └── LanguageSwitcher.jsx
├── context/
│   └── ModalContext.jsx    # ModalProvider + useModal() Hook
├── data/
│   └── downloads.js        # downloadsByLang – Google Drive Links je Sprache
├── services/
│   └── formService.js      # Supabase-Submit mit localStorage-Fallback
├── i18n/
│   ├── de.json             # Deutsch (Standard)
│   ├── fr.json             # Französisch
│   └── pl.json             # Polnisch
├── App.jsx                 # HashRouter mit drei Routen + VariantSwitcher
└── main.jsx
public/
├── cards/                  # vorder-1..5 + rueck-1..5 (PNG)
└── downloads/
    └── karten-set.pdf      # Das physische Kartenset (18 MB)
```

---

## Sprachen

Die Seite ist dreisprachig: **Deutsch** (Standard), **Französisch**, **Polnisch**.

Alle sichtbaren Texte stehen in den i18n-Dateien:

| Datei | Sprache |
|---|---|
| `src/i18n/de.json` | Deutsch |
| `src/i18n/fr.json` | Französisch |
| `src/i18n/pl.json` | Polnisch |

> Hinweis: Der polnische Moderationsleitfaden ist noch nicht verfügbar. Solange wird im Modal ein Badge „Demnächst verfügbar" angezeigt.

---

## Materialien & Downloads

Downloads werden über Google Drive bereitgestellt. Die Links stehen in `src/data/downloads.js` als `downloadsByLang`-Objekt (Keys: `de`, `fr`, `pl`).

Aktuell verlinkt wird der **Moderationsleitfaden** in einem Google Doc (mehrsprachige Tabs):
- `https://docs.google.com/document/d/1dqueBM16AB1KzhyibDjwv_4bRdGkBIRZeX8luy1wHdM`

Das Dokument muss auf **„Jeder mit Link kann ansehen"** gestellt sein.

---

## Kontaktformular (Supabase)

Das Modal öffnet sich beim Klick auf den Materialien-Button. Der Nutzer kann:
1. Das Formular ausfüllen und absenden (Submission landet in Supabase)
2. Über „Direkt zu den Materialien" die Downloads ohne Formular abrufen

**Supabase-Tabelle:** `fresque_submissions`  
**RLS:** INSERT für `anon` erlaubt · SELECT nur über Service Role (Supabase Dashboard)

---

## Deployment (Vercel)

Das Projekt ist bereits auf Vercel verbunden und deployed automatisch bei jedem Push auf `main`.

Manuelle Erst-Einrichtung falls nötig:
1. Repository auf GitHub pushen
2. Neues Vercel-Projekt → Repository verbinden
3. Vite wird automatisch erkannt (Build: `npm run build`, Output: `dist`)
4. Umgebungsvariablen `VITE_SUPABASE_URL` und `VITE_SUPABASE_ANON_KEY` in Vercel Settings eintragen

---

## Offene TODOs vor finalem Launch

- [ ] **Google Doc öffentlich teilen** – „Jeder mit Link kann lesen" aktivieren
- [ ] **Polnischen Leitfaden befüllen** – Tab PL im Google Doc
- [ ] **Design-Variante auswählen** – dann die anderen zwei aus `App.jsx` entfernen
- [ ] **Umami-Tracking einbinden** – Script-Tag + `data-website-id` nach Varianten-Entscheidung
- [ ] **Impressum prüfen** – ggf. Postadresse des DFJW ergänzen

---

## Farb-Referenz

Custom Design-Tokens im `@theme`-Block von `src/index.css`:

| Token | Wert | Verwendung |
|---|---|---|
| `navy` | `#1E3A5F` | Primärfarbe V1/V2 |
| `navy-dark` | `#122848` | Hover-Zustand |
| `navy-light` | `#EBF0F8` | Hintergrund-Badges |
| `gold` | `#B8860B` | Akzent (Deutschland) |
| `wine` | `#7A2F3E` | Akzent (Frankreich) |
| `coral` | `#B85448` | Akzent (Polen) |
| `sand` | `#F5F3EE` | Abschnitts-Hintergründe |
| `#C41E3A` | — | Roter Akzent V3 (Art-Gallery) |
