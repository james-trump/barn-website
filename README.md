# Coton Park Barn — website

Everything you need is in this folder: `index.html`, `styles.css`, `script.js`, and an `images` folder with the 17 photos (resized/compressed for web speed — colours untouched, exactly as uploaded).

## 1. Set up the enquiry form (5 minutes, free)

The form on the site needs a place to send enquiries. It's wired up for **Formspree**, a free service (50 submissions/month, no credit card):

1. Go to https://formspree.io and create a free account.
2. Create a new form, using the email address you want enquiries sent to.
3. Formspree will give you a form URL like `https://formspree.io/f/abcd1234`.
4. Open `index.html`, find this line (search for `YOUR_FORM_ID`):
   ```
   <form id="enquiryForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your actual ID (e.g. `abcd1234`), save.

Until this is done, the form will show a friendly message telling whoever fills it in that it isn't connected yet, rather than silently failing.

## 2. Add real contact details (optional but recommended)

I didn't invent a phone number or email address since I didn't have your real ones. If you'd like a direct phone/email shown in the footer or enquiry section, just send them over and I'll add them in — or you can add a line yourself in the `<footer>` section of `index.html`.

## 3. Publish the site

This is a plain, static website — no server or database needed. Easiest free options:

- **Netlify Drop** (netlify.com/drop) — drag this whole folder into the browser, live in seconds, free.
- **GitHub Pages** — if you're comfortable with GitHub, push this folder to a repo and enable Pages.
- Or hand the folder to any standard web host / your domain provider's file manager.

## 4. Reviews

The "What guests say" section shows your real ratings (Cleanliness 4.9, Equipment 4.9, Comfort 5.0, Location 4.8) and two paraphrased guest impressions, with a small plain-text line at the bottom noting they're summarised from your holidaycottages.co.uk reviews — no link, as requested. If you get more reviews you're happy to feature, send them over and I'll rotate them in.

## 5. About live availability

We deliberately left out a live booking calendar for now (scraping holidaycottages.co.uk isn't reliable or allowed), and the site now only collects direct enquiries — no links out to holidaycottages.co.uk anywhere. If you can get an iCal export link from your holidaycottages.co.uk owner account later, bring it back and we can add a real availability calendar.

## 6. Photos

These are your original, unedited photos — nothing colour-graded. If you want the brighter/warmer edited versions later, just ask and I can swap them back in.
