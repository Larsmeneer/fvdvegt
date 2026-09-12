# Glazenwasserij F. van der Vegt

Nieuwe website voor Glazenwasserij F. van der Vegt uit Zoetermeer, als vervanging van de
oude PantherCMS-site op [fvdvegt.com](https://www.fvdvegt.com/). Alle teksten, klanten,
foto's en contactgegevens komen van die site; alleen de vormgeving, de techniek en de
opbouw zijn nieuw.

Er zit geen bouwstap in: het zijn losse HTML-bestanden met één stylesheet. Open
`index.html` in je browser om het te bekijken.

| Bestand | Wat het is |
| --- | --- |
| `index.html` | home: diensten, werkwijze, waarom, klanten |
| `klanten.html` | klantenlijst en foto's van werk en materieel |
| `over-ons.html` | wat er gewassen wordt en hoe een offerte tot stand komt |
| `contact.html` | adres, telefoon, e-mail, KvK en de kaart |
| `404.html` | foutpagina (GitHub Pages pakt deze automatisch) |
| `stijl.css` | de hele vormgeving, licht en donker |
| `script.js` | thema-knop, mobiel menu, meelopende kop, blokken die in beeld komen |
| `afbeeldingen/` | foto's van de oude site |

## Wat er nieuw is

- Eén responsieve opzet die op telefoon net zo werkt als op een breed scherm
  (de oude site draaide op Bootstrap 3 uit 2016).
- Licht en donker: standaard volgt de site het systeemthema, met een knop om te wisselen.
  De keuze blijft in `localStorage` staan.
- Vaste belknop onderaan het scherm op de telefoon.
- Geen jQuery, geen Bootstrap, geen externe CDN's: alles staat in de repo zelf.
- Toegankelijkheid: echte koppenstructuur, `alt`-teksten, zichtbare focusrand,
  `aria-current` op het menu, en animaties gaan uit bij `prefers-reduced-motion`.
- Zoekmachines: eigen `title`/`description` per pagina, Open Graph-tags en
  `LocalBusiness`-structuurdata op de homepagina.

De bestandsnamen (`index.html`, `klanten.html`, `over-ons.html`, `contact.html`) zijn
gelijk aan die van de oude site, dus bestaande links blijven werken.

## Hosting via GitHub Pages

De site is volledig statisch met alleen relatieve paden, dus GitHub Pages is genoeg:

1. Repo → **Settings** → **Pages**
2. Source: **GitHub Actions** (de workflow `.github/workflows/static.yml` staat klaar
   en publiceert bij elke push naar `main`)
3. Of, net zo goed: **Deploy from a branch**, branch `main`, map `/ (root)`

Na een minuut staat de site op `https://larsmeneer.github.io/fvdvegt/`.

Voor het eigen domein `www.fvdvegt.com`: zet de domeinnaam bij **Custom domain**, laat
GitHub het `CNAME`-bestand aanmaken en zet bij de domeinboer een `CNAME`-record naar
`larsmeneer.github.io`. Vink daarna **Enforce HTTPS** aan.

## Gegevens die in de pagina's staan

- Bermudablauw 26, 2718 JJ Zoetermeer
- 06 - 555 444 68 · info@fvdvegt.com
- KvK 27273218
- Facebook `fvdvegt` en LinkedIn (Ferry van der Vegt)

## Nog te doen

- **Foto's**: de galerijfoto's komen van de oude site en zijn deels kleine of onscherpe
  afbeeldingen (een enkele is een foto van een beeldscherm). Nieuwe foto's van het werk
  zouden de grootste verbetering zijn — ze kunnen zo in `afbeeldingen/` en in
  `klanten.html`.
- **Contactformulier**: bewust weggelaten, want GitHub Pages heeft geen backend. Kan later
  via een formulierdienst of via een eigen endpoint.
- **Openingstijden** ontbreken; als die er zijn, horen ze op `contact.html` en in de
  structuurdata.
