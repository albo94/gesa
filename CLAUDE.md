# CLAUDE.md — Guida al progetto sito GESA

Questo file documenta la struttura, le convenzioni e le regole di sviluppo del sito web del **Gruppo Ecologico Selvino Aviatico (GESA)**. Aggiornalo ogni volta che vengono apportate modifiche significative.

---

## Identità del progetto

- **Nome:** GESA – Gruppo Ecologico Selvino Aviatico
- **URL produzione:** `https://albo94.github.io/gesa/` (base path: `/gesa/`)
- **Dominio alternativo:** `https://www.gruppoecologicoselvinoaviatico.it/` (CNAME vuoto, non attivo)
- **Repository:** `https://github.com/albo94/gesa.git` (branch `main`)
- **Hosting:** GitHub Pages — push su `main` → deploy automatico, nessuna CI/CD aggiuntiva
- **Stack:** HTML statico + CSS + JavaScript vanilla, nessun framework, nessun CMS

---

## Struttura del progetto

```
nuovo-sito/                  ← root del sito
├── index.html               ← Homepage
├── favicon.ico              ← Favicon dal logo GESA reale (16/32/48px)
├── favicon.png              ← Favicon PNG 192×192 per Apple touch icon
├── favicon.svg              ← Favicon SVG legacy (non più in uso nei link HTML)
├── favicon.svg              ← SVG approssimativo (mantenuto ma non referenziato)
├── robots.txt
├── sitemap.xml              ← Aggiornare quando si aggiungono nuove pagine
├── CNAME                    ← Vuoto (disabilitato)
├── .nojekyll                ← Disabilita Jekyll su GitHub Pages
├── CLAUDE.md                ← Questo file
├── assets/
│   ├── css/style.css        ← Foglio di stile unico (806+ righe)
│   ├── js/main.js           ← JavaScript vanilla (79 righe)
│   └── img/
│       ├── logo-gesa.png    ← Logo ufficiale GESA (1330×1177 RGBA)
│       ├── contrade/        ← 8 PNG poster contrade
│       └── ...              ← Foto varie (palestra, panorami, QR)
├── sentieri/
│   ├── index.html           ← Elenco 12 sentieri
│   └── a001/ … a012/        ← Pagine dettaglio sentieri (ArcGIS embed)
├── palestra/
│   └── index.html
├── contrade/
│   └── index.html           ← 8 contrade con poster PNG (versione originale)
├── contrade2/               ← NUOVA SEZIONE (aprile 2026) — versione narrativa
│   ├── index.html           ← Hub con 8 card + foto storiche
│   ├── brancane/index.html
│   ├── quatri/index.html
│   ├── schene/index.html
│   ├── sort/index.html
│   ├── tes/index.html
│   ├── tiru/index.html
│   ├── tunu/index.html
│   └── ulia/index.html
├── curiosita/               ← NUOVA SEZIONE (aprile 2026)
│   ├── index.html           ← Hub curiosità
│   ├── calchera/
│   │   └── index.html       ← La Calchera di Serina (IT + EN)
│   └── poiat/
│       └── index.html       ← Il Poiat – carbonaia (IT + EN)
├── contatti/
│   └── index.html
├── qrcode/
│   ├── a001/ … a012/        ← Redirect QR sentieri
│   └── p001/ … p005/        ← Redirect QR palestra
└── 404.html
```

---

## Design system

### Palette colori (da logo GESA)

```css
--color-primary:       #1b563f   /* verde scuro (bordo logo) */
--color-primary-light: #a6c539   /* verde lime (riempimento logo) */
--color-primary-dark:  #0f3020   /* verde molto scuro */
--color-accent:        #c8a800   /* giallo/oro (corda logo) */
--color-accent-light:  #fff101   /* giallo brillante logo */
--color-surface:       #f5f7ee   /* bianco caldo sfondo */
--color-white:         #ffffff
--color-text:          #231f20   /* quasi nero del logo */
--color-text-muted:    #4a5830
```

### Colori difficoltà sentieri

```css
Facilissimo: #0891b2 (azzurro)
Facile:      #16a34a (verde)
Medio:       #d97706 (arancione)
Impegnativo: #dc2626 (rosso)
```

### Tipografia

- Font: system-ui stack (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, …`)
- Nessun Google Fonts o font esterno

### Layout

- Max-width: `1200px` (`.container`)
- Mobile-first responsive
- Breakpoint principali: `480px`, `768px`, `1024px`
- Spacing scale: `--sp-1` (0.25rem) … `--sp-24` (6rem)

---

## Convenzioni HTML

### Template minimo per ogni pagina

```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titolo Pagina – GESA Selvino Aviatico</title>
  <meta name="description" content="…">
  <link rel="canonical" href="https://www.gruppoecologicoselvinoaviatico.it/PERCORSO/">
  <meta property="og:title"       content="…">
  <meta property="og:description" content="…">
  <meta property="og:url"         content="…">
  <link rel="icon" type="image/x-icon" href="/gesa/favicon.ico">
  <link rel="icon" type="image/png" sizes="192x192" href="/gesa/favicon.png">
  <link rel="apple-touch-icon" href="/gesa/favicon.png">
  <link rel="stylesheet" href="/gesa/assets/css/style.css">
</head>
<body>
  <!-- HEADER (uguale in tutte le pagine) -->
  <!-- NAV MOBILE (uguale in tutte le pagine) -->
  <!-- Contenuto pagina -->
  <!-- FOOTER (uguale in tutte le pagine) -->
  <script src="/gesa/assets/js/main.js"></script>
</body>
</html>
```

### Navigazione desktop (aggiornare in TUTTE le pagine se si aggiunge una sezione)

```html
<nav class="nav-desktop">
  <a href="/gesa/">Home</a>
  <a href="/gesa/sentieri/">Sentieri</a>
  <a href="/gesa/palestra/">Palestra</a>
  <a href="/gesa/contrade2/">Contrade</a>
  <a href="/gesa/curiosita/">Curiosità</a>
  <a href="/gesa/contatti/">Contatti</a>
</nav>
```

### Navigazione mobile (aggiornare in TUTTE le pagine)

```html
<nav class="nav-mobile" id="navMobile">
  <a href="/gesa/"><span class="nav-icon">🏠</span> Home</a>
  <a href="/gesa/sentieri/"><span class="nav-icon">🥾</span> Sentieri ad Anello</a>
  <a href="/gesa/palestra/"><span class="nav-icon">🧗</span> Palestra di Arrampicata</a>
  <a href="/gesa/contrade2/"><span class="nav-icon">🏘️</span> Contrade</a>
  <a href="/gesa/curiosita/"><span class="nav-icon">🏺</span> Curiosità</a>
  <a href="/gesa/contatti/"><span class="nav-icon">📞</span> Contatti</a>
</nav>
```

> **Regola:** se si aggiunge una nuova sezione, aggiornare con uno script Python la navigazione in tutti i file HTML esistenti.

### Componenti CSS principali

| Classe | Uso |
|--------|-----|
| `.page-hero` | Hero scuro con breadcrumb (pagine interne) |
| `.hero` | Hero homepage (split testo + foto) |
| `.section` | Sezione con padding standard |
| `.section-alt` | Sezione con sfondo alternato |
| `.features-grid` | Grid 1→2→3 colonne (cards sezioni) |
| `.feature-card` | Card con icona, titolo, testo, CTA |
| `.info-grid` | Grid 1→3 colonne (cards informative) |
| `.info-card` | Card informativa senza link |
| `.trail-grid` | Grid 2→4 colonne (sentieri) |
| `.trail-card` | Card sentiero con bordo colorato |
| `.cta-banner` | Banner CTA verde scuro prima del footer |
| `.reveal` | Elemento con animazione scroll-in |
| `.btn` | Bottone base |
| `.btn-primary` | Bottone verde primario |
| `.btn-ghost` / `.btn-outline` | Bottoni secondari |
| `.breadcrumb` | Breadcrumb navigazione |
| `.hero-badge` | Badge pill nell'hero |
| `.meta-pill` | Pill informativa hero |
| `.section-tag` | Tag sopra titolo sezione |

---

## Regole per nuove pagine

1. **Percorso:** usare slug senza accenti (es. `curiosita/` non `curiosità/`)
2. **Favicon:** sempre i 3 tag `favicon.ico`, `favicon.png`, `apple-touch-icon`
3. **Navigation active:** aggiungere `class="active"` al link della sezione corrente nella nav desktop
4. **Sitemap:** aggiungere le nuove URL in `sitemap.xml`
5. **Footer:** includere link alla nuova sezione nel footer di tutte le pagine principali
6. **Reveal:** aggiungere classe `.reveal` agli elementi che devono animarsi allo scroll

---

## Sezioni del sito

### Sentieri (A001–A012)
- Mappe: ArcGIS embed iframe
- Tracce 3D: link Relive.cc
- Livelli difficoltà: Facilissimo / Facile / Medio / Impegnativo

### Palestra
- Orario: Martedì e Giovedì 20:30–23:00
- Sede: Oratorio di Selvino
- Tariffe: Adulti 3€, Under 18 2€, Soci GESA gratis

### Contrade — versione poster (originale, `/contrade/`)
Brancane, Quatrì, Schene, Sort o Ca di Roc, Tes, Tirù, Tunù, Ulia
- Ogni contrada: card con immagine PNG poster full-size e link "Ingrandisci"
- Fonte: poster PNG in `assets/img/contrade/`

### Contrade — versione narrativa (`/contrade2/`, sezione primaria da aprile 2026)
Questa è la sezione principale accessibile da nav e homepage. La vecchia versione poster è nascosta in `/contrade/` e raggiungibile solo dal link interno "Versione poster (originale)".
Stessa struttura di 8 contrade ma con pagine individuali e testo HTML
- **Fonte testi**: estratti visivamente dai poster PNG originali (via lettura immagine AI)
- **Foto**: ritagliate dai poster con Pillow, salvate in `assets/img/contrade2/*-foto.jpg`
- **Componenti CSS** specifici: `.c2-layout`, `.c2-photo-wrap`, `.c2-card-grid`, `.c2-card`, `.fact-card`, `.ricerca-box`
- **Contenuto per contrada**: foto storica + testo HTML + sidebar fatti + link al poster originale + nav prev/next
- Contrade con testo minimo: Tes (nome sconosciuto, "?????"), Tirù (solo mappa aerea + "ora solo villeggianti")
- Genera pagine con: `../gen_contrade2.py` (script Python nella root del progetto)

### Curiosità (aggiunto aprile 2026)
- **Calchera:** forno per cottura pietra calcarea (IT+EN, sidebar dati tecnici)
- **Poiat:** carbonaia in dialetto lombardo (IT+EN, sidebar dati tecnici)
- Testo fonte: pannelli informativi originali (file `.pub` in `../curiosità/`)
- Crediti: GESA, CAI Valserina, Gruppo Alpini Selvino, Gruppo Cacciatori Selvino

---

## Workflow di sviluppo

```bash
# Sviluppo locale
cd "C:\Users\Alberto Grigis\MEGA\00_PERSONALE\15_gesa\sitoweb gesa\nuovo-sito"
python3 -m http.server 8080
# Apri: http://localhost:8080/gesa/

# Deploy
git add .
git commit -m "Descrizione modifiche"
git push origin main
# GitHub Pages si aggiorna in ~1-2 minuti
```

### Aggiornare navigazione su tutte le pagine (script Python)

```python
import os, re

base = r'C:\Users\Alberto Grigis\MEGA\00_PERSONALE\15_gesa\sitoweb gesa\nuovo-sito'
html_files = []
for root, dirs, files in os.walk(base):
    dirs[:] = [d for d in dirs if d not in ['.git', '.claude', 'qrcode']]
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    # Applica sostituzioni...
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
```

---

## Contatti progetto

- **Referente:** Massimo Grigis — 335 537 2168
- **Sviluppo:** Alberto Grigis (albo94 su GitHub)
- **Repository:** https://github.com/albo94/gesa

---

*Ultimo aggiornamento: aprile 2026 — Contrade2 promossa a sezione primaria (nav + homepage puntano a `/contrade2/`), vecchia versione poster nascosta, mappa contrade integrata in `contrade2/index.html`.*
