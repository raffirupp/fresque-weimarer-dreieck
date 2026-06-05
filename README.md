# Fresque zum Weimarer Dreieck

Statische Marketing-/Infoseite für das Angebot „Fresque zum Weimarer Dreieck" der Generation Europa 2025.

**Tech-Stack:** React 19 + Vite + Tailwind CSS v4 + react-i18next  
**Hosting:** Vercel (statisch, kein Backend nötig)

---

## Starten & Bauen

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Entwicklungsserver starten (http://localhost:5173)
npm run build      # Produktions-Build → Ausgabe in dist/
npm run preview    # Build lokal vorschauen
```

---

## Inhalte pflegen

### Texte übersetzen / anpassen

Alle sichtbaren Texte stehen in den Sprachdateien:

| Datei | Sprache |
|---|---|
| `src/i18n/de.json` | Deutsch (Standard) |
| `src/i18n/en.json` | Englisch |
| `src/i18n/fr.json` | Französisch |

Platzhalter sind mit `{{TODO: …}}` markiert – einfach den gesamten Platzhaltertext
(inklusive `{{TODO:` und `}}`) durch den echten Inhalt ersetzen.

### Download-Dateien hinzufügen

1. PDF in `public/downloads/` ablegen.
2. In `src/data/downloads.js` einen neuen Eintrag ergänzen:

```js
{
  id: 'meine-datei-de',
  titleKey: 'downloads.items.spielanleitung.title',  // i18n-Key für Titel
  descKey:  'downloads.items.spielanleitung.desc',   // i18n-Key für Beschreibung
  lang: 'DE',
  file: '/downloads/meine-datei.pdf',
}
```

Titel und Beschreibung als neuen Key in alle drei Sprachdateien eintragen.

### Team-Mitglieder bearbeiten

1. Foto (quadratisch, mind. 200×200 px) in `public/team/` ablegen.
2. In `src/data/team.js` Platzhalter durch echte Daten ersetzen:

```js
{
  id: 1,
  name: 'Maria Musterfrau',
  photo: '/team/maria-musterfrau.jpg',
  roleKey: 'team.person1.role',
  bioKey:  'team.person1.bio',
}
```

Rolle und Bio in `src/i18n/de.json`, `en.json`, `fr.json` unter
`team.person1.role` / `team.person1.bio` eintragen.

### Impressum & Kontakt

In allen drei Sprachdateien `footer.imprintText` und `footer.contactEmail` befüllen.

---

## Auf Vercel deployen

1. Repository auf GitHub pushen.
2. Neues Vercel-Projekt → Repository verbinden.
3. Vercel erkennt Vite automatisch:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Kein `vercel.json` nötig (reine Ankernavigation).

---

## Farb- & Typografie-Referenz

Custom Design-Tokens in `src/index.css` (`@theme`-Block):

| Token | Wert | Verwendung |
|---|---|---|
| `navy` | `#1E3A5F` | Primärfarbe, Überschriften, Buttons |
| `navy-dark` | `#122848` | Hover-Zustand |
| `navy-light` | `#EBF0F8` | Hintergrund-Badges |
| `gold` | `#B8860B` | Akzent (angedeutet: Deutschland) |
| `wine` | `#7A2F3E` | Akzent (angedeutet: Frankreich) |
| `coral` | `#B85448` | Akzent (angedeutet: Polen) |
| `sand` | `#F5F3EE` | Abschnitts-Hintergründe |
| `font-heading` | Montserrat | Überschriften, Labels, Buttons |
