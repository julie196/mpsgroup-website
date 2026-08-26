# MPSGroup Contact and Cache Audit

## Contact form root cause

The live contact form contains fields named `name`, `phone`, `email`, `address`, and `message`. It does **not** contain any input or select with `name="situation"`. The submission handler nevertheless sends `data.situation || 'Not specified'`, so every lead email necessarily shows **Situation: Not specified**. The correct fix is to add a required situation select and preserve the existing FormSubmit destination.

The form currently posts through FormSubmit to Doug May’s working email address. That endpoint and visible email address should remain intact unless Doug separately changes his email. The notification subject and body should stop describing the source as `MPSGroup.info` and should instead say **MPS Group Inc website**.

## Obsolete website domain

The live page contains 26 `mpsgroup.info` references. They include canonical, Open Graph, Twitter, alternate-language, structured-data, footer website, submission-subject, and email-address occurrences. The inactive website references should be replaced with the current live URL `https://mpsgroup-inc.netlify.app`. The standalone footer website link should be removed. The email address `Doug.May@MPSGroup.info` must be preserved because it is the active notification destination and visible contact email, not a website link.

The `robots.txt` sitemap reference and all six `sitemap.xml` URLs also point to the inactive domain and should be changed to the current Netlify URL.

## Brokerage verification

The current live deployment already identifies **ARNI Realty Inc.** six times. It includes the About-page affiliation, a dedicated Illinois Brokerage Disclosure section, the ARNI office address, an ARNI website link, footer disclosure language, and structured data. Doug is likely seeing an older open tab or cached document if those disclosures are absent on his device.

## Cache behavior

The current Netlify response already returns `Cache-Control: public,max-age=0,must-revalidate`, which directs caches to revalidate. To make the correction more explicit for the homepage, the update will add project-owned Netlify header rules using `no-cache, no-store, must-revalidate` for `/` and `/index.html`, plus matching HTML cache metadata. Users with an already-open page will still need to refresh that tab once.

## Netlify traffic

Netlify’s current official path is **Project dashboard → Logs & Metrics → Analytics → Enable Analytics**. Once enabled, Netlify begins collecting server-side traffic data and can backfill up to 30 days. The dashboard reports pageviews, unique visitors, top locations, top pages, top sources, 404s, and bandwidth. Current-day data updates hourly.

Source: https://docs.netlify.com/manage/monitoring/web-analytics/overview/
