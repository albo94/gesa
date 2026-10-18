# GESA – Gruppo Ecologico Selvino Aviatico

Sito ufficiale del Gruppo Ecologico Selvino Aviatico: **https://www.gruppoecologicoselvinoaviatico.it/**

HTML/CSS/JavaScript puro, nessun framework. Ospitato su **GitHub Pages** dal repository
[`albo94/gesa`](https://github.com/albo94/gesa) (branch `main`), con dominio custom.

> Per le convenzioni di sviluppo, il design system e la cronologia delle scelte vedi **[CLAUDE.md](CLAUDE.md)**.

## Sezioni

| Percorso | Contenuto |
|---|---|
| `/` | Homepage |
| `/sentieri/` · `/sentieri/a001/` … `a012/` | 12 sentieri ad anello (mappa ArcGIS, traccia Relive) |
| `/palestra/` | Palestra di arrampicata (Oratorio di Selvino) |
| `/contrade2/` · `/contrade2/<contrada>/` | Le 8 contrade storiche — versione narrativa (sezione principale) |
| `/contrade/` | Versione poster originale (non in menu) |
| `/curiosita/` · `calchera/` · `poiat/` | Calchera di Selvino e Poiat (IT + EN) |
| `/notizie/` · `/notizie/<data-slug>/` | Notizie e uscite scolastiche |
| `/contatti/` | Sede e referente |
| `/qrcode/…` | Redirect dei QR code fisici sul territorio |

## Sviluppo locale

```bash
python -m http.server 8080      # oppure, dalla cartella superiore: python -m http.server 8124 --directory nuovo-sito
```

Poi apri http://localhost:8080/ (i link usano percorsi assoluti da `/`, quindi serve un server: aprire i file con doppio clic non funziona).

## Pubblicare le modifiche

Prima di pubblicare si rigenerano meta tag e dati strutturati e si lanciano i controlli
(gli script stanno fuori dal repository, in `../04_Strumenti/`; comandi dalla cartella superiore):

```bash
python -I 04_Strumenti/geo_build.py
python -I 04_Strumenti/geo_check.py
```

Poi, dalla cartella del sito:

```bash
git add .
git commit -m "Descrizione delle modifiche"
git push
```

GitHub Pages si aggiorna in 1-2 minuti. Se si aggiunge una pagina, aggiungerla anche a `sitemap.xml`
(con `lastmod`) e, se importante, a `llms.txt`. Dopo la pubblicazione:
`python -I 04_Strumenti/indexnow.py <percorso>/` avvisa Bing e gli altri motori.

## File da non cancellare

- `CNAME` — senza, il dominio smette di funzionare
- `2277fcd37b87f3d614e676de0a97268c.txt` — chiave IndexNow
- `google54564db78cc022e4.html` — verifica Google Search Console
- `robots.txt`, `sitemap.xml`, `llms.txt` — letti da motori di ricerca e assistenti AI

## Dominio

- File `CNAME`: `www.gruppoecologicoselvinoaviatico.it`
- DNS su Aruba: CNAME `www` → `albo94.github.io`; record A dell'apex verso gli IP di GitHub Pages
  (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
- Su GitHub → Settings → Pages: custom domain impostato, "Enforce HTTPS" attivo
- `https://albo94.github.io/gesa/` reindirizza automaticamente al dominio

## Redirect QR code

I QR code fisici puntano a `…/qrcode/<codice>` e reindirizzano alla pagina giusta.
**Non rinominare né spostare le pagine di destinazione**: i cartelli sul territorio non si possono ristampare facilmente.

| QR code | Destinazione |
|---|---|
| `/qrcode/a001` … `/qrcode/a012` | `/sentieri/a001/` … `/sentieri/a012/` |
| `/qrcode/p001` … `/qrcode/p005` | `/palestra/` |
| `/qrcode/calchera` | `/curiosita/calchera/` |
| `/qrcode/poiat` | `/curiosita/poiat/` |

## Materiale sorgente

Foto originali, loghi, testi dei pannelli, script e archivio del vecchio sito stanno **fuori dal repository**, nella cartella superiore `sitoweb gesa/` (struttura descritta in [CLAUDE.md](CLAUDE.md)). I link alle risorse esterne dei sentieri sono in `../02_Materiali/link-sentieri.md`.
