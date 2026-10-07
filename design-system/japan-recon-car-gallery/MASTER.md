# Japan Recon Car Gallery UI

Reviewed with UI UX Pro Max, 7 October 2026.

## Product and constraints
Static recon-car photo catalog for customers. Keep the homepage compact with a small featured photo and inventory visible on arrival. Car interaction belongs only on the separately shareable `audi.html` page. Preserve demonstration labels, existing vehicle data, filtering, comparison and video/gallery behavior.

## Applied recommendations
- Automotive dealership query: minimal grid, premium slate surfaces and an action-red accent. Use red for primary actions and selected controls, with white button labels.
- Retain the bundled sans-serif font for readable model names and specifications. Use a consistent 12/14/16/24/30px hierarchy, 16px mobile form inputs, tabular prices and natural heading wrapping.
- Use native labeled controls and visible keyboard focus. Primary touch actions are at least 44px high; label selected states in text.
- Separate filters from results with a surface and border. Keep advanced filters progressively disclosed, show their selected count, and expand them inline on phones.
- Keep photos static, preserve media dimensions, avoid decorative entrance and pulsing animations, and respect reduced motion.
- Verify light and dark themes independently, including image overlays and modals.

## User constraints take priority
The generator proposed a large hero and futuristic display/monospace typography. These do not fit the approved compact photo catalog, so the layout remains catalog-first and uses its existing local sans-serif font. The automotive palette and minimal style are verified matches; the automatic hero pattern is not applied. A stack search did not return a verified match for this native CSS filter layout; implementation uses general CSS guidance from the skill's Quick Reference rather than adding Tailwind.

## Source
`showroom.css` contains shared catalog and tour styling. Homepage car media stays non-interactive. The Audi viewer and Copy link keep the dedicated customer route.
