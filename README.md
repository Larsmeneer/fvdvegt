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
| `klanten/index.html` | klantenlijst met logo's en foto's van werk en materieel |
| `over-ons/index.html` | wat er gewassen wordt en hoe een offerte tot stand komt |
| `contact/index.html` | adres, telefoon, e-mail, KvK en de kaart |
| `klanten.html` e.d. | doorverwijzers van de oude adressen naar de nieuwe map |
| `404.html` | foutpagina (GitHub Pages pakt deze automatisch) |
| `stijl.css` | de hele vormgeving, licht en donker |
| `script.js` | thema-knop, mobiel menu, meelopende kop, blokken die in beeld komen |
| `afbeeldingen/` | foto's van de oude site |
| `afbeeldingen/logos/` | logo's van de klanten, van hun eigen website gehaald |

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

## Adressen

De pagina's staan als `index.html` in een eigen map, dus de adressen zijn
`/klanten/`, `/over-ons/` en `/contact/` zonder `.html`. De oude adressen
(`/klanten.html` en zo) bestaan nog als kleine doorverwijspagina's met een canonical,
zodat bestaande links en zoekresultaten blijven werken. Die bestandjes mogen weg zodra
de oude site echt uit de lucht is.

## Logo's van de klanten

De logo's in `afbeeldingen/logos/` komen van de websites van de bedrijven zelf. Ze staan
op een witte tegel, want de meeste zijn donker en zouden anders wegvallen in het donkere
thema. Het logo van Van der Kooy was wit (bedoeld voor hun eigen donkere kop); daarvan is
de letterkleur naar hun huisblauw `#0055A4` gezet zodat het op wit leesbaar is.

Twee dingen om te weten:

- **Auto Ambacht Zoetermeer** heeft geen website meer: `autoambacht.nl` bestaat niet meer
  als domein. Die tegel heeft daarom geen logo en geen link, alleen de naam. Het bedrijf
  bestaat nog wel, als Vakgarage met een Facebook-pagina; als Ferry daarheen wil linken,
  kan dat er zo in.
- Logo's van klanten gebruik je met hun medeweten. Ferry heeft ze naar eigen zeggen als
  klant, maar het blijft netjes om even te melden dat ze op de site staan.

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
