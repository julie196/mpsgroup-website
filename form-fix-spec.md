# MPSGroup Form and Cache Correction Specification

## Situation field

The contact form will add a required `<select name="situation">` immediately before the free-text message. The blank placeholder will be disabled so a lead cannot be submitted without a meaningful choice.

The options will be **Foreclosure / Pre-Foreclosure**, **Behind on Payments**, **Probate / Inherited Property**, **Divorce / Separation**, **Property Needs Major Repairs**, **Need to Sell Quickly**, and **Other / Exploring Options**. The existing JSON submission property `situation` will then receive and email the selected value instead of `Not specified`.

## Notification wording

The FormSubmit destination `Doug.May@MPSGroup.info` will remain unchanged because it is Doug’s working email address. The visible email links will also remain. Notification subject and source text will change from `MPSGroup.info` to **MPS Group Inc Website** so the email no longer presents the inactive domain as the lead source.

The JavaScript will check `response.ok` and show the on-page success message only after the email service accepts the request. If submission fails, the form will remain visible, the submit button will return to its normal state, and the visitor will see a clear instruction to call or email Doug directly.

## Website-domain cleanup

The footer link to `https://mpsgroup.info` will be removed. Canonical, Open Graph, Twitter, alternate-language, structured-data, robots, and sitemap URLs will use `https://mpsgroup-inc.netlify.app` until a replacement custom domain is connected. The email address will not be treated as an obsolete website reference.

## Cache behavior

A Netlify `_headers` file will set HTML responses to `no-cache, no-store, must-revalidate, max-age=0`. Matching HTML cache metadata will be added to the page head. This reduces stale revision reuse, but anyone with an already-open page will still need to refresh that tab once.

## Preserved behavior

The phone number, email destination, TCPA consent, visual design, ARNI Realty Inc. disclosures, navigation, foreclosure content, and mobile action bar will remain unchanged.
