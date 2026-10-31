# Food Villa, Nalhati: website

The website for **Food Villa (ফুড ভিলা)**, East Market, Netaji Road, near Style Baazar, Nalhati.
It's a single static page (`index.html` plus the `images/` folder) served by GitHub Pages, with no build step.

## Editing (all inside `index.html`)
- **Menu**: the `MENU` object near the bottom. Each line is `["Dish name", price, "v" or "n"]`, and a line like `"# Veg"` adds a sub-heading.
- **Reviews**: the `REVIEWS` list. Copy new ones word for word from Google Maps.
- **Photos**: drop new files into `images/` and update the `src="images/..."` paths.
- **Hours / phones**: search for `11:30` and `8942804671` / `6295736811`.

Edit right on GitHub (open the file → pencil icon → Commit). The site updates in about a minute.

## Live Google rating
The rating and review count show fixed fallback numbers (`FALLBACK` in `index.html`) until you add a key:
1. In [Google Cloud Console](https://console.cloud.google.com/), create a project, enable **Places API (New)**, and create an **API key**.
2. Restrict the key: *Application restrictions → Websites →* `https://<username>.github.io/*`, and *API restrictions →* Places API (New) only.
3. Paste it into `GOOGLE_API_KEY` in `index.html`.

Each page view makes one small request. A restaurant site's traffic normally stays inside Google's monthly free usage.
