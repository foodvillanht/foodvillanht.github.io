# Food Villa, Nalhati: website

The website for **Food Villa (ফুড ভিলা)**, East Market, Netaji Road, near Style Baazar, Nalhati.
It's a single static page (`index.html` plus the `images/` folder) served by GitHub Pages, with no build step.

## Editing
- **Menu and prices**: `menu.js`. Each line is `["Dish name", price, "v" or "n"]`, and a line like `"# Veg"` adds a sub-heading. The website and the waiter page both read it.

Everything else is inside `index.html`:
- **Reviews**: the `REVIEWS` list. Copy new ones word for word from Google Maps.
- **Photos**: drop new files into `images/` and update the `src="images/..."` paths.
- **Hours / phones**: search for `11:30` and `8942804671` / `6295736811`.

Edit right on GitHub (open the file → pencil icon → Commit). The site updates in about a minute.

## WhatsApp ordering
Guests tap **Add** / **+** on any dish in the menu, then **View order → Send order on WhatsApp**.
WhatsApp opens with the items, quantities, prices, total, order type, name and notes filled in:
- **Dine-in**: table number. **Takeaway**: pickup time.
- **Delivery**: delivery time (blank = as soon as possible), address, and a map link for the rider, either from **Use my current location** (live GPS, works on the https site) or a pasted Google Maps link. An address or a location is required.
Orders go to `ORDER_PHONE` in `index.html` (currently 89428 04671). Change that one line to send them elsewhere.
Prices come from `menu.js`, so a price change there updates ordering too.

## Waiter order page
**https://foodvillanht.github.io/waiter/** is for staff. It isn't linked from the website and is hidden from Google.
1. Make a WhatsApp group (for example "FV Kitchen") with the kitchen phone and both restaurant numbers.
2. On each waiter's phone, open the link, then use **Add to Home screen** so it opens like an app. Enter the waiter's name once.
3. Tap a table, search or browse dishes, tap **ADD** and **+**, and use **✎ Note** for "less spicy" and similar. Then **Review → Send to kitchen**, choose WhatsApp, and pick the group.
- A second order for the same table is sent as **ADD-ON #1, #2…** with the table's running total.
- Green tables already have orders. **Send bill summary** sends one combined list with the total for the counter, and **Close table (paid)** clears the table.
- Running totals are kept on that waiter's phone only, and reset after 16 hours.
- **Settings**, at the top of the script in `waiter/index.html`: `FLOORS` (table counts per floor), `EXTRA` (Takeaway/Parcel), `QUICK_NOTES`, and `KITCHEN_PHONE` (used only on devices without a share menu).

## Live Google rating
The rating and review count show fixed fallback numbers (`FALLBACK` in `index.html`) until you add a key:
1. In [Google Cloud Console](https://console.cloud.google.com/), create a project, enable **Places API (New)**, and create an **API key**.
2. Restrict the key: *Application restrictions → Websites →* `https://<username>.github.io/*`, and *API restrictions →* Places API (New) only.
3. Paste it into `GOOGLE_API_KEY` in `index.html`.

Each page view makes one small request. A restaurant site's traffic normally stays inside Google's monthly free usage.
