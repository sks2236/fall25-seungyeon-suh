# fall25-seungyeon-suh

# Mom Tips App - Architecture Decision Document

## 1. Chosen Architecture Option

I chose the **Multi-Page Option (Option A)** because my project has distinct pages like Home, Daily Tips, Add Tip, Favorites, and Profile. Using separate HTML files makes it easier to maintain the site and organize content logically.

---

## 2. Pages/Sections

The pages/sections my project needs are:

- `index.html` → Home page
- `dailytips.html` → Daily Tips page
- `addtip.html` → Add Tip page
- `favorites.html` → Favorites page
- `profile.html` → Profile page

---

## 3. Navigation

The **footer navigation is consistent** across all pages, allowing users to easily move between sections:

| Icon        | Page             |
| ----------- | ---------------- |
| 🏠 Home     | `index.html`     |
| ＋ Add Tip  | `addtip.html`    |
| ♡ Favorites | `favorites.html` |
| 👤 Profile  | `profile.html`   |

The Daily Tips link on the Home page also takes users to `dailytips.html`.

---

## 4. Anticipated Challenges

- Making sure **assets (images, icons, etc.) load correctly** on all pages.
- Ensuring that users feel **connected across pages**, since navigation involves full page reloads.
