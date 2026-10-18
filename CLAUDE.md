# CLAUDE.md — Guida al progetto sito GESA

Questo file documenta la struttura, le convenzioni e le regole di sviluppo del sito web del **Gruppo Ecologico Selvino Aviatico (GESA)**. Aggiornalo ogni volta che vengono apportate modifiche significative.

> ⚠️ **Questo file è pubblico**: viene pubblicato con il sito (`www.gruppoecologicoselvinoaviatico.it/CLAUDE.md`) e il repository GitHub è pubblico. Credenziali, accessi ai pannelli (Aruba, Search Console…), contatti personali non già presenti sul sito e note riservate vanno **solo** in `../CLAUDE.md` (cartella `sitoweb gesa/`, fuori dal repository), che contiene anche la mappa della cartella di lavoro e degli script.

---

## Identità del progetto

- **Nome:** GESA – Gruppo Ecologico Selvino Aviatico
- **URL produzione:** `https://www.gruppoecologicoselvinoaviatico.it/` (base path: `/`)
- **GitHub Pages fallback:** `https://albo94.github.io/gesa/` → redirect automatico al dominio custom
- **Repository:** `https://github.com/albo94/gesa.git` (branch `main`)
- **Hosting:** GitHub Pages con dominio custom (CNAME: `www.gruppoecologicoselvinoaviatico.it`)
- **DNS:** configurato su Aruba — CNAME `www` → `albo94.github.io`, A record apex → IP GitHub Pages
- **Stack:** HTML statico + CSS + JavaScript vanilla, nessun framework, nessun CMS
- **⚠️ Base path:** tutti i link usano `/` (radice) — NON più `/gesa/`

---

## Struttura del progetto

```
nuovo-sito/                  ← root del sito
├── index.html               ← Homepage
├── favicon.ico              ← Favicon dal logo GESA reale (16/32/48px)
├── favicon.png              ← Favicon PNG 192×192 per Apple touch icon
├── favicon.svg              ← SVG approssimativo (non referenziato nei link)
├── robots.txt               ← Consente esplicitamente i crawler dei motori generativi (vedi "SEO e GEO")
├── sitemap.xml              ← Con lastmod; aggiornare quando si aggiungono pagine
├── llms.txt                 ← Sintesi del sito per gli assistenti AI (aggiornare a mano)
├── 2277fcd37b87f3d614e676de0a97268c.txt ← Chiave IndexNow: NON cancellare (sembra un residuo, non lo è)
├── CNAME                    ← www.gruppoecologicoselvinoaviatico.it (NON svuotare: toglie il dominio)
├── .nojekyll                ← Disabilita Jekyll su GitHub Pages
├── CLAUDE.md                ← Questo file (pubblico!)
├── README.md                ← Panoramica breve per chi apre il repository
├── assets/
│   ├── css/style.css        ← Foglio di stile unico
│   ├── js/main.js           ← JavaScript vanilla
│   └── img/
│       ├── logo-gesa.png        ← Logo GESA 192×170 (mostrato a 48px; l'originale grande è in ../02_Materiali/foto/originali-sito/)
│       ├── og-gesa.jpg          ← Immagine 1200×630 per le anteprime social (og:image predefinita)
│       ├── mappa-contrade.jpeg  ← Mappa geografica delle 8 contrade
│       ├── palestra-gruppo.jpg  ← 1600×1200 (era 4896×3672, 4 MB)
│       ├── selvino-statica.jpg  ← Foto hero della homepage
│       ├── qrcode-sign.jpg      ← Cartello con QR code (homepage)
│       ├── loghi/               ← Loghi partner/collaboratori
│       │   ├── logo-cai.png         ← CAI Valserina (224px, mostrato a 56px)
│       │   ├── logo-alpini.jpg      ← Gruppo Alpini Selvino
│       │   └── logo-cacciatori.jpg  ← Sezione Cacciatori Selvino
│       ├── contrade/            ← 8 poster contrade in JPG 1132×1600 (erano PNG da ~2 MB)
│       ├── contrade2/           ← 8 JPG foto ritagliate per la versione narrativa
│       └── notizie/
│           ├── 2026-05-16/      ← 3 foto Bus de la Scabla (censurate: 1.jpg, 4.jpg, 7.jpg)
│           ├── 2026-04-18/      ← 5 foto uscita quinta elementare (censurate, 901×1600)
│           └── 2026-03-28/      ← 1 foto uscita prima media (censurata)
├── assets/pdf/
│   └── geologia-altopiano-prima-media-2026.pdf  ← Presentazione geologia (non linkata in nav)
├── sentieri/
│   ├── index.html           ← Elenco 12 sentieri
│   └── a001/ … a012/        ← Pagine dettaglio sentieri (ArcGIS embed)
├── palestra/
│   └── index.html
├── contrade/
│   └── index.html           ← Versione poster (nascosta, noindex, link solo da contrade2)
├── contrade2/               ← Sezione Contrade PRIMARIA (nav + homepage)
│   ├── index.html           ← Hub con mappa + 8 card con foto storiche
│   ├── brancane/index.html
│   ├── quatri/index.html
│   ├── schene/index.html
│   ├── sort/index.html
│   ├── tes/index.html
│   ├── tiru/index.html
│   ├── tunu/index.html
│   └── ulia/index.html
├── curiosita/
│   ├── index.html           ← Hub curiosità (con loghi partner reali)
│   ├── calchera/
│   │   └── index.html       ← La Calchera di Selvino (IT + EN)
│   └── poiat/
│       └── index.html       ← Il Poiat – carbonaia (IT + EN)
├── notizie/
│   ├── index.html           ← Elenco notizie (news-grid, 2 card per ora)
│   ├── 2026-04-18-uscita-scolastica/
│   │   └── index.html       ← Quinta elementare: Calchera, Poiat, cartelli
│   └── 2026-03-28-uscita-prima-media/
│       └── index.html       ← Prima media: geologia dell'Altopiano
├── contatti/
│   └── index.html           ← Mappa: Oratorio Selvino, Via Scuole 8
├── qrcode/
│   ├── a001/ … a012/        ← Redirect QR sentieri
│   ├── p001/ … p005/        ← Redirect QR palestra
│   ├── calchera/            ← Redirect QR → /curiosita/calchera/
│   └── poiat/               ← Redirect QR → /curiosita/poiat/
└── 404.html
```

### Cartella di lavoro (fuori dal repository)

Foto originali, loghi, testi sorgente, **script** (`04_Strumenti/`) e archivio stanno nella cartella superiore `sitoweb gesa/`. La mappa completa è in `../CLAUDE.md` (privato).

**Regola:** le foto con minori entrano nel sito **solo** da `censurate/` o `selezionate-per-sito/`, mai da `originali/`.

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
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png">
  <link rel="apple-touch-icon" href="/favicon.png">
  <link rel="stylesheet" href="/assets/css/style.css">
  <!-- Open Graph, Twitter, JSON-LD: NON scriverli a mano, li aggiunge geo_build.py -->
</head>
<body>
  <!-- HEADER (uguale in tutte le pagine) -->
  <!-- NAV MOBILE (uguale in tutte le pagine) -->
  <!-- <main id="contenuto"> lo aggiunge geo_build.py -->
  <!-- Contenuto pagina, con <nav class="breadcrumb"> e un solo <h1> -->
  <!-- FOOTER (uguale in tutte le pagine) -->
  <script src="/assets/js/main.js"></script>
</body>
</html>
```

### Navigazione desktop (aggiornare in TUTTE le pagine se si aggiunge una sezione)

```html
<nav class="nav-desktop">
  <a href="/">Home</a>
  <a href="/sentieri/">Sentieri</a>
  <a href="/palestra/">Palestra</a>
  <a href="/contrade2/">Contrade</a>
  <a href="/curiosita/">Curiosità</a>
  <a href="/notizie/">Notizie</a>
  <a href="/contatti/">Contatti</a>
</nav>
```

### Navigazione mobile (aggiornare in TUTTE le pagine)

```html
<nav class="nav-mobile" id="navMobile">
  <a href="/"><span class="nav-icon">🏠</span> Home</a>
  <a href="/sentieri/"><span class="nav-icon">🥾</span> Sentieri ad Anello</a>
  <a href="/palestra/"><span class="nav-icon">🧗</span> Palestra di Arrampicata</a>
  <a href="/contrade2/"><span class="nav-icon">🏘️</span> Contrade</a>
  <a href="/curiosita/"><span class="nav-icon">🏺</span> Curiosità</a>
  <a href="/notizie/"><span class="nav-icon">📰</span> Notizie</a>
  <a href="/contatti/"><span class="nav-icon">📞</span> Contatti</a>
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
4. **Sitemap:** aggiungere le nuove URL in `sitemap.xml` con `<lastmod>`; se la pagina è nuova o importante, aggiungerla anche a `llms.txt`
5. **Footer:** includere link alla nuova sezione nel footer di tutte le pagine principali
6. **Reveal:** aggiungere classe `.reveal` agli elementi che devono animarsi allo scroll
7. **Descrizione:** `<meta name="description">` entro **160 caratteri** (oltre, Google la taglia)
8. **Immagini:** lato lungo massimo 1600px (loghi: 4× la misura a cui sono mostrati), JPG per le foto; `width`/`height` li aggiunge lo script
9. **Prima del commit**, dalla cartella `sitoweb gesa/`:
   ```
   python -I 04_Strumenti/geo_build.py
   python -I 04_Strumenti/geo_check.py
   ```
10. **Dopo il push** (pagina nuova o cambiata davvero): `python -I 04_Strumenti/indexnow.py <percorso>/`
11. Pagine di servizio o nascoste: `<meta name="robots" content="noindex, follow">`, niente sitemap, niente link dal menu

---

## Sezioni del sito

### Sentieri (A001–A012)
- Mappe: ArcGIS embed iframe
- Tracce 3D: link Relive.cc
- Livelli difficoltà: Facilissimo / Facile / Medio / Impegnativo

### Palestra
- Orario: Martedì e Giovedì 20:30–23:00 (sabato 14–18 occasionalmente)
- Sede: Oratorio di Selvino, Via Scuole 8
- Tariffe: Adulti 3€, Under 18 2€, Soci GESA gratis
- **Domande frequenti** (`#faq`, dal 18/10/2026): 6 `<details>` fra `<!-- FAQ:INIZIO -->` e `<!-- FAQ:FINE -->`, scritte **solo** con fatti già nella pagina. Lo schema `FAQPage` è generato da questo markup: si modifica la pagina e si rilancia `geo_build.py`
- ⚠️ Se cambiano orari o tariffe: aggiornare pagina, FAQ, `llms.txt` **e** `nodo_palestra()` in `04_Strumenti/geo_build.py` (lo script si ferma da solo se non ritrova i valori attesi nella pagina)

### Contrade — versione poster (originale, `/contrade/`)
Brancane, Quatrì, Schene, Sort o Ca di Roc, Tes, Tirù, Tunù, Ulia
- Ogni contrada: card con il poster e link "Ingrandisci"
- Poster in `assets/img/contrade/*.jpg` (convertiti dai PNG originali il 18/10/2026; i PNG sono in `../02_Materiali/foto/originali-sito/contrade/`)
- `noindex, follow`: i contenuti sono già in `/contrade2/`, la pagina non va in sitemap

### Contrade — versione narrativa (`/contrade2/`, sezione primaria da aprile 2026)
Questa è la sezione principale accessibile da nav e homepage. La vecchia versione poster è nascosta in `/contrade/` e raggiungibile solo dal link interno "Versione poster (originale)".
Stessa struttura di 8 contrade ma con pagine individuali e testo HTML
- **Fonte testi**: estratti visivamente dai poster PNG originali (via lettura immagine AI)
- **Foto**: ritagliate dai poster con Pillow, salvate in `assets/img/contrade2/*-foto.jpg`
- **Componenti CSS** specifici: `.c2-layout`, `.c2-photo-wrap`, `.c2-card-grid`, `.c2-card`, `.fact-card`, `.ricerca-box`
- **Contenuto per contrada**: foto storica + testo HTML + sidebar fatti + link al poster originale + nav prev/next
- Contrade con testo minimo: Tes (nome sconosciuto, "?????"), Tirù (solo mappa aerea + "ora solo villeggianti")
- Genera pagine con: `../04_Strumenti/gen_contrade2.py` (percorsi relativi, nav con Notizie). ⚠️ Le pagine pubblicate sono state ritoccate a mano dopo la generazione: dopo averlo lanciato controllare `git diff contrade2/` e scartare ciò che non serve

### Curiosità (aggiunto aprile 2026)
- **Calchera di Selvino:** forno per cottura pietra calcarea (IT+EN, sidebar dati tecnici)
- **Poiat:** carbonaia in dialetto lombardo (IT+EN, sidebar dati tecnici)
- Testo fonte: pannelli informativi originali (file `.pub` in `../02_Materiali/pannelli curiosità (pub)/`)
- Crediti hub page: loghi reali in `assets/img/loghi/` (CAI, Alpini, Cacciatori) — sostituiscono le emoji nelle feature-card
- ⚠️ Il nome corretto è **Calchera di Selvino** (non "di Serina") — aggiornato in tutto il sito ad aprile 2026

### Notizie (aggiunto aprile 2026)
- Hub: `/notizie/index.html` — griglia di card notizie (news-grid, ordine cronologico inverso)
- Ogni articolo ha: hero image, corpo testo, sidebar con info giornata + approfondimenti
- Foto con volti di minori: **obbligatoriamente censurate** prima di pubblicare
- ⚠️ Le foto sorgente stanno in `../01_Foto notizie/<data> <tema>/` — usare solo `censurate/` o `selezionate-per-sito/`
- Sfocatura volti: `../04_Strumenti/sfoca-volti/dist/SfocaVolti.exe`, poi ritocco manuale dove serve
- Collegamento homepage: sezione "Ultime notizie" prima del CTA banner

**Articoli pubblicati:**

| Data | Slug | Classe | Tema |
|------|------|--------|------|
| 16 mag 2026 | `2026-05-16-bus-de-la-scabla` | Terza elementare Selvino | Visita al Bus de la Scabla (area archeologica Aviatico): età del Rame, Bronzo, età romana |
| 18 apr 2026 | `2026-04-18-uscita-scolastica` | Quinta elementare Selvino | Calchera, Poiat, installazione cartelli con GESA + Alpini + Cacciatori |
| 28 mar 2026 | `2026-03-28-uscita-prima-media` | Prima media Selvino | Geologia dell'Altopiano (lezione in aula + uscita sul campo con geologo) |


**Componenti CSS specifici articolo:**
- `.article-layout` — grid 1fr + 280px sidebar (da 900px)
- `.article-hero-img` — max-height 480px, object-fit cover
- `.article-meta` — tag + data
- `.article-sidebar` / `.sidebar-card` — sidebar con bordo verde sinistro
- `.photo-gallery` — griglia 2→3 colonne con lightbox JS (openLb/closeLb)
- `.news-card` / `.news-grid` — card elenco notizie nella hub page

### Contatti (aggiornato aprile 2026)
- Mappa Google Maps: **Oratorio di Selvino, Via Scuole 8** (embed con query per indirizzo)
- Referente: Massimo Grigis — 335 537 2168

---

## SEO e GEO (motori di ricerca e assistenti AI)

Intervento del 18/10/2026, con la stessa impostazione dei siti CISAC e Ambulanza.

**Blocco gestito nel `<head>`** — fra `<!-- SEO:INIZIO -->` e `<!-- SEO:FINE -->`, scritto da `04_Strumenti/geo_build.py` su tutte le 32 pagine: Open Graph completo (`og:url`, `og:site_name`, `og:image` con dimensioni e `alt`), Twitter Card, un `<noscript>` che rende visibili gli elementi `.reveal` senza JavaScript e **un unico JSON-LD a `@graph`**. **Non si modifica a mano**: si cambia la pagina e si rilancia lo script. Lo script toglie anche eventuali meta `og:`/`twitter:` e JSON-LD scritti a mano, per non averli doppi.

**Dati strutturati ricavati dal contenuto visibile** (una sola fonte, così pagina e schema non divergono):

| Pagina | Nodi |
|---|---|
| Home | `Organization` completa (`@id` `/#organizzazione`), `WebSite` (`/#sito`), `WebPage` |
| Contatti | `Organization` completa con `contactPoint`, `ContactPage` |
| Sentieri A001–A012 | `TouristAttraction` con le righe della scheda come `additionalProperty` (difficoltà, km, dislivello, tempo, partenza…), `hasMap` = mappa ArcGIS |
| Contrade2 | `Place` con `containedInPlace` = il fatto «Comune» della scheda |
| Palestra | `SportsActivityLocation` (indirizzo, orari, prezzi) + `FAQPage` |
| Notizie | `NewsArticle` (data dallo slug, foto della galleria) |
| Calchera, Poiat | `Article` con `about` = `LandmarksOrHistoricalBuildings` |
| Elenchi (sentieri, contrade2, curiosità, notizie) | `CollectionPage` + `ItemList` delle pagine figlie |
| Tutte le interne | `BreadcrumbList` letta da `<nav class="breadcrumb">` |

- `dateModified` = data dell'**ultimo commit che ha toccato la pagina**: va spostata solo quando cambia il contenuto, non per ritocchi tecnici. Stesso criterio per `<lastmod>` in `sitemap.xml` (aggiornato a mano).
- ⚠️ **Telefono** (`+39 335 537 2168`) controllato cifra per cifra con i link `tel:` di contatti e palestra: se cambia, va cambiato in `geo_build.py` (costanti `TELEFONO`), nelle pagine e in `llms.txt`. È la lezione del sito ambulanza, dove il JSON-LD aveva una cifra in più senza che nessuno se ne accorgesse.
- `og:image`: specifica della pagina quando c'è (contrade2 = foto storica, palestra = foto del gruppo, contrade = mappa, notizie = voce in `IMMAGINI` di `geo_build.py` o, per le notizie nuove, la prima foto della galleria), altrimenti `og-gesa.jpg`. Per cambiarla si modifica `IMMAGINI` / `immagine_pagina()` nello script, non il meta.

**`<main id="contenuto">`** su tutte le pagine (anche la 404), fra il menu mobile e il footer: dice ai crawler dove sta il contenuto. **`width`/`height`** su tutte le `<img>` locali (il CSS ha `img { height: auto }`): niente salti di layout mentre le foto caricano.

**`robots.txt`** — oltre a `User-agent: *` elenca in `Allow` i crawler AI (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot, CCBot…). È una scelta: farsi leggere è il presupposto per essere citati; consente anche l'addestramento. Per escluderne uno, `Disallow` nel suo blocco.

**`llms.txt`** — sintesi in markdown per gli assistenti: chi è il GESA, palestra, tabella dei 12 sentieri (dati presi dalle schede), elenco pagine, contatti. **Va aggiornato a mano** se cambiano sentieri, orari, tariffe o recapiti. Solo fatti presenti nel sito.

**IndexNow** — il file `2277fcd37b87f3d614e676de0a97268c.txt` nella radice è la chiave con cui il sito avvisa Bing, Yandex, Seznam e Naver delle pagine nuove o cambiate (Bing alimenta anche la ricerca di ChatGPT e Copilot). **Non cancellarlo.** Dopo il push: `python -I 04_Strumenti/indexnow.py` (tutta la sitemap) o con i percorsi cambiati (`palestra/ notizie/`).

**Controlli** — `04_Strumenti/geo_check.py`: JSON-LD valido e senza `@id` doppi, canonical giusto, descrizioni ≤160 caratteri, `<main>` e tag bilanciati, immagini esistenti con dimensioni, link interni non rotti, sitemap completa e senza pagine nascoste. Esce con errore se qualcosa non va: lanciarlo prima di ogni commit.

**HTTPS** — forzato e funzionante (verificato il 18/10/2026: `http://` e il dominio senza `www` rimandano con 301 a `https://www.`).

**Da fare con gli account dell'associazione** (non si può fare da qui):
- **Google Search Console**: proprietà non verificata (né file `google….html` né TXT nel DNS Aruba). Verificarla, inviare la sitemap e chiedere l'indicizzazione di home, sentieri e palestra. Il file di verifica, una volta messo in radice, **non va più cancellato**. Se si usa il TXT su Aruba: **aggiungere** il record, non sostituire quello SPF già presente (`v=spf1 include:_spf.aruba.it ~all`), che serve alla posta.
- **Bing Webmaster Tools**: importare da Search Console.
- **Scheda Google** (Profilo dell'attività) per la palestra, se l'associazione la vuole.

---

## Workflow di sviluppo

```bash
# Sviluppo locale
cd "G:\Il mio Drive\00_PERSONALE\08_Volontariato\Gesa\sitoweb gesa\nuovo-sito"
python -m http.server 8080
# Apri: http://localhost:8080/

# Prima del commit (dalla cartella sitoweb gesa/)
python -I 04_Strumenti/geo_build.py
python -I 04_Strumenti/geo_check.py

# Deploy
git add .
git commit -m "Descrizione modifiche"
git push origin main
# GitHub Pages si aggiorna in ~1-2 minuti

# Dopo la pubblicazione, se sono cambiate pagine vere (dalla cartella sitoweb gesa/)
python -I 04_Strumenti/indexnow.py palestra/
```

### Aggiornare navigazione su tutte le pagine (script Python)

```python
import os, re

base = r'G:\Il mio Drive\00_PERSONALE\08_Volontariato\Gesa\sitoweb gesa\nuovo-sito'
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

## Da fare

- [ ] Contrada **Tes**: nome italiano ancora sconosciuto ("?????")
- [ ] Valutare una notizia/curiosità dal materiale `Gesa/2026_05_18_presentazione turismo/`

---

## Registro modifiche

| Data | Modifica |
|---|---|
| 12–19/04/2026 | Primo sito, reskin logo, contrade2, curiosità, notizie, migrazione al dominio custom |
| 18/10/2026 | Integrato l'articolo del 16/05 (Bus de la Scabla, pubblicato a maggio da un'altra sessione e trovato al momento del push): foto a 1600px, blocco SEO, sitemap |
| 18/10/2026 | Ottimizzazione come CISAC e Ambulanza: immagini da 50,6 a 5,6 MB (9 foto inutilizzate tolte, palestra e notizie a 1600px, logo a 192px, poster contrade in JPG); `geo_build.py` con Open Graph, Twitter Card, JSON-LD a `@graph`, `<main>` e `width`/`height` su tutte le pagine; FAQ della palestra; `robots.txt` con i crawler AI; `llms.txt`; `lastmod` in sitemap; IndexNow; `/contrade/` in `noindex`; 4 descrizioni accorciate sotto i 160 caratteri; `geo_check.py`; `CLAUDE.md` privato in `sitoweb gesa/` |
| 27/09/2026 | Riorganizzata la cartella sorgente (`01_`…`99_`); `gen_contrade2.py` con percorsi relativi e nav aggiornata; sitemap con notizie e contatti; README riscritto; corretti qui CNAME, template senza `/gesa/`, percorsi Google Drive al posto di MEGA. Il modulo digitale di manleva Sciesopoli **non** va sul sito GESA ma sul sito dell'ambulanza |

*Ultimo aggiornamento: 18 ottobre 2026.*
