# Maison Rouge – Guide (FR/EN) for GitHub Pages

This folder contains a small **static website** with a **language toggle (FR/EN)** and a **tap-to-check** departure checklist that persists on each guest’s device.

## Files
- `index.html` — structure and content (with i18n hooks).
- `style.css` — responsive styles.
- `script.js` — language logic (saved preference), checklist persistence, and menu behavior.
- `README.md` — this file.

## Deploy on GitHub Pages
1. Create a public repo (e.g., `maison-rouge`).
2. Upload all files to the repo root and commit.
3. In **Settings → Pages**: set **Build and deployment** = *Deploy from a branch*, pick **main / root**, **Save**.
4. Share the Pages URL with your guests.

### Notes
- **Language preference** is stored in `localStorage` under `maisonrouge:lang`.
- **Checklist** state is stored under keys like `maisonrouge:fridge`, per browser/device.
- Section anchors (`#checklist`, `#serrures`, etc.) stay stable across languages; only visible labels change.
