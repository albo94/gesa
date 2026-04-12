# GESA – Gruppo Ecologico Selvino Aviatico

Sito ufficiale del Gruppo Ecologico Selvino Aviatico.  
Sviluppato con HTML/CSS/JS puro, ospitato su **GitHub Pages**.

## Struttura

```
/
├── index.html                  Homepage
├── sentieri/
│   ├── index.html              Elenco tutti i sentieri
│   ├── a001/ … a012/           Pagine individuali dei 12 sentieri
├── palestra/index.html         Palestra di arrampicata
├── contrade/index.html         Le 8 contrade storiche
├── qrcode/
│   ├── a001/ … a012/           Redirect QR → /sentieri/aXXX/
│   └── p001/ … p005/           Redirect QR → /palestra/
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── favicon.svg
├── 404.html
├── CNAME                       Dominio custom
├── robots.txt
└── sitemap.xml
```

## Deploy su GitHub Pages (prima volta)

### 1. Crea il repository `albo94.github.io`

> **Usa esattamente questo nome**: `albo94.github.io`  
> Questo attiva il sito a `https://albo94.github.io/` con path assolute funzionanti.

1. Vai su https://github.com/new
2. Repository name: **`albo94.github.io`**
3. Visibilità: **Public**
4. Non aggiungere README (il repository deve essere vuoto)
5. Crea il repository

### 2. Push da questa cartella

Apri il terminale in questa cartella (`nuovo-sito/`) ed esegui:

```bash
git init
git add .
git commit -m "Primo commit – sito GESA completo"
git branch -M main
git remote add origin https://github.com/albo94/albo94.github.io.git
git push -u origin main
```

### 3. Abilita GitHub Pages

1. Vai su https://github.com/albo94/albo94.github.io/settings/pages
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Salva

Il sito sarà attivo a: **https://albo94.github.io/** entro 1-2 minuti.

---

## Associare il dominio ufficiale (quando sei pronto)

1. **Nel registrar del dominio** (`gruppoecologicoselvinoaviatico.it`):
   - Aggiungi un record **CNAME**: `www` → `albo94.github.io`
   - Oppure record **A** (apex) verso i 4 IP di GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

2. **Su GitHub Pages** (settings/pages):
   - Campo "Custom domain": `www.gruppoecologicoselvinoaviatico.it`
   - Spunta "Enforce HTTPS"

3. Il file `CNAME` in questo repo è già configurato correttamente.

4. **I redirect QR code continuano a funzionare** automaticamente perché i percorsi `/qrcode/a001/` etc. esistono come file HTML nel repository.

---

## Aggiornare il sito

Dopo aver modificato i file:

```bash
git add .
git commit -m "Descrizione delle modifiche"
git push
```

GitHub Pages si aggiorna automaticamente entro 1-2 minuti.

---

## Sviluppo locale

Per vedere il sito in locale con tutti i link funzionanti:

```bash
# Dalla cartella nuovo-sito/
python -m http.server 8080
```

Poi apri: http://localhost:8080/

---

## Redirect QR code

I QR code fisici sul territorio puntano a:
`http://www.gruppoecologicoselvinoaviatico.it/qrcode/aXXX`

Dopo il deploy questi URL vengono serviti direttamente dalle pagine in `/qrcode/aXXX/index.html`
che reindirizzano istantaneamente alla pagina del sentiero corrispondente.

| QR code | Redirect a |
|---------|-----------|
| /qrcode/a001 | /sentieri/a001/ |
| /qrcode/a002 | /sentieri/a002/ |
| … | … |
| /qrcode/a012 | /sentieri/a012/ |
| /qrcode/p001–p005 | /palestra/ |

---

## Link risorse esterne (salvati in `link-sentieri.md`)

Tutti i link alle mappe ArcGIS, video Google Drive e tracce Relive sono salvati in:  
`../link-sentieri.md`
