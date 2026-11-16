# Seat Finder

Guests scan a QR code, type the first few letters of their name, tap their name and a glowing die rolls to reveal their table. It runs as a plain website, so GitHub Pages hosts it for free.

## What's in this folder

| File | What it does |
|---|---|
| `index.html` | The guest app. Don't edit unless you're comfortable with code. |
| `config.js` | Event details, floor plan, colours and settings. Edit this for each event. |
| `guests.js` | The guest list the app reads: 278 guests across 28 tables. |
| `guest-list.csv` | The same list as a spreadsheet file (name, table), for checking or for a Google Sheet. |
| `qr.html` | Printable A5 sign with the QR code. |
| `assets/` | The celebrant photos and the QR code library. |
| `google-apps-script/checkins.gs` | Optional script that logs check-ins in a Google Sheet. |

## 1. Try it on your computer

Open `index.html` in Chrome, Safari or Edge, tap the glowing button and type:

| Type | You should see |
|---|---|
| osas | Osas (table 6), Osasu Adediran (table 3), Pst Osas Micheals (table 27) |
| bles | Five guests named Blessing, each with who they're seated with |
| osifo | All eight Osifo guests across tables 8, 14 and 21 |
| zzz | "No name matches" message |

Tap a name to roll the die. Tap the die to roll again. "I've arrived" checks the guest in on that phone.

## 2. Put it on GitHub Pages

1. Sign in at github.com and click **New repository**. Name it, for example `seat-finder`, set it to **Public** and click **Create repository**.
2. Click **uploading an existing file**. Drag in everything inside this folder (the files and the `assets` and `google-apps-script` folders), then click **Commit changes**.
3. Go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the page shows your address, for example `https://your-username.github.io/seat-finder/`. Open it on your phone and search for your own name.

Free GitHub accounts only publish public repositories, so anyone with the address can see the guest names and table numbers. The list holds nothing else.

## 3. Change the guest list

How search works: a guest types 2 or more letters. The app matches the start of any word in their name (first name, middle name or surname) and ignores titles such as Mr, Mrs, Dr and Pastor. Each result shows who else is at that table, so guests with the same first name can tell which entry is theirs.

Choose one way to keep the list.

### Option A: edit guests.js (simplest)

Open `guests.js` on GitHub, click the pencil icon and edit the lines. Each line is `name,table`, for example `Mary Okoh,29`. Click **Commit changes**. The live site updates in a minute or two.

### Option B: Google Sheet (easiest to change on the day)

Your RSVP sheet is laid out like the room, so the app can't read it directly. Use a second tab or sheet in list form:

1. In Google Sheets choose **File > Import > Upload** and pick `guest-list.csv`. You get two columns: `name` and `table`.
2. Choose **File > Share > Publish to web**. Pick that tab, choose **Comma-separated values (.csv)**, click **Publish** and copy the link.
3. On GitHub, open `config.js`, click the pencil icon, paste the link between the quotes on the `googleSheetCsvUrl` line and click **Commit changes**.

Changes in the Sheet reach the app within about 5 minutes; Google refreshes published sheets on its own schedule. If the Sheet can't be reached, the app falls back to `guests.js`.

### If you add or move tables

Update the `floorPlan` block in `config.js` so the new table number sits in the right spot. A table that's in the guest list but missing from the floor plan still shows as an extra dot at the end.

## 4. Optional: see check-ins in a Google Sheet

1. In a Google Sheet, choose **Extensions > Apps Script**.
2. Paste in the contents of `google-apps-script/checkins.gs` and click **Save**.
3. Click **Deploy > New deployment**, type **Web app**, execute as **Me**, access **Anyone**. Click **Deploy** and approve the permissions.
4. Copy the **Web app URL** into `config.js` on the `checkinUrl` line and commit.

Each "I've arrived" tap now adds a row to a **Checkins** tab: time, name and table.

## 5. Print the QR sign

Open `https://your-username.github.io/seat-finder/qr.html`. Check the address in the box at the top, then click **Print sign**. In the print settings choose A5 (or A4 and scale to fit) and turn on **Background graphics**. Scan the printed code with your phone before the event.

## 6. Settings in config.js

| Setting | What it changes |
|---|---|
| `celebrant`, `occasion`, `shortTitle`, `date`, `time`, `venue`, `address` | Text on the screens and the QR sign |
| `searchBy` | `'name'` for name search. `'mobile'` for the last 5 digits of a mobile; the list then needs a `mobile_last5` column |
| `floorPlan` | Where each table sits on the mini floor plan |
| `diceRoll` | `false` shows the table straight away |
| `showSeat`, `showPlusOne` | Show a seat number or plus-one; the list then needs `seat` or `plus_one_name` columns |
| `accent`, `accent2` | Glow and button colours |
| `credit`, `creditEmail` | The credit line and contact email at the bottom of every screen |
| `googleSheetCsvUrl` | Published Google Sheet link (step 3, option B) |
| `checkinUrl` | Apps Script link for check-ins (step 4) |

To reuse it for another event, replace the two photos in `assets` (keep the same file names), update `config.js` and load the new guest list.

## Good to know

- Works on any recent iPhone or Android browser. No app to install.
- The fonts load from Google Fonts. Without internet the app still works with standard fonts, but the Google Sheet and check-in features need a connection.
- Guests who use reduced motion settings on their phone see the table straight away, without the roll or confetti.
- The QR code library in `assets/qrcode.js` is by Kazuhiko Arase, MIT licence.
