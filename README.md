# Japan Recon Car Gallery

An interactive demo showroom based on the latest Gemini build. All inventory, prices, specifications, photos and videos are demonstration content, not verified stock. No enquiry, booking or payment is submitted.

## GitHub Pages

Open `index.html` for the gallery and `audi.html` for the Audi tour. Pages are static; the demo editor saves changes in the current browser only. Shared uploads and settings require the Node server. The editor is linked as **Manage demo** in the footer.

## Run locally

```bash
npm install
npm start
```

Open http://localhost:3000/. The server provides `/audi`, `/admin`, config persistence and uploads. Runtime files and dependencies are ignored by Git. The editor APIs are intended for a local demo and are not authenticated; add access control before hosting that backend publicly.

## Improvements

- Search by make/model and filter by body, year, mileage and power; clear empty-result filters in one click.
- Mobile navigation, feature shortcuts, explicit zoom buttons, and cancellable viewer transitions.
- Loading feedback and photo fallback for video failures; gallery arrows and keyboard navigation.
- Original image dimensions retained in high-quality JPEGs; videos use browser-compatible H.264 with fast-start playback. Clips load on demand.

## Verification

`npm test` checks JavaScript syntax and referenced local assets. Browser regression checks in `tests/browser-smoke.cjs` cover searching, comparisons, media cancellation/recovery, gallery navigation and mobile layout.
