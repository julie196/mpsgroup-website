# MPSGroup Form and Domain Correction Deployment

## Netlify

The correction was deployed to the existing `mpsgroup-inc` project, site ID `8805bdb4-1faa-4165-8d8e-75c2596da6fb`. Production deploy `6a8f34497e018091e5fad361` reached **ready** state without an error.

Live URL: https://mpsgroup-inc.netlify.app

The live `index.html`, `robots.txt`, and `sitemap.xml` each match the verified source byte-for-byte. Their SHA-256 values are:

| File | SHA-256 |
|---|---|
| `index.html` | `66eec612e474b3be9e920b10577b91c841fde3814e71f460a997d9c9a5ad8e3d` |
| `robots.txt` | `e51f1a87fd556b3eb5db844b5c65754c1c87c879868cfe2c2b6b65afc16393b2` |
| `sitemap.xml` | `249a8248f65da11fe50ed1f9deec96a2f693e1fcc3745055f3d371c88188ac13` |

The live page contains one required `name="situation"` field, zero inactive `https://mpsgroup.info` website URLs, and six ARNI Realty Inc. references. Doug’s active `Doug.May@MPSGroup.info` email address remains the visible contact and FormSubmit destination.

The live HTML response now returns `Cache-Control: no-cache, no-store, must-revalidate, max-age=0`, `Pragma: no-cache`, `Expires: 0`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`, and `X-Frame-Options: SAMEORIGIN`.

## GitHub

The corrected source, SEO files, `_headers`, Vitest configuration, targeted tests, and verification records are ready for synchronization to the existing public repository `https://github.com/julie196/mpsgroup-website`.

The synchronization completed successfully as commit `b1a9719` with message **“Fix lead situation field and remove obsolete site domain.”**
