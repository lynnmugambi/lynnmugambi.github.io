# Featured work section and case pages

## Homepage: Featured work (at #work, under Skills)
- Headline "FEATURED WORK" with the teal handwritten note "three stories, picked on purpose" beside it.
- Three cards in a row on desktop, stacked on phones: a small pill tag in the top-left (tiny mono uppercase letters like the label above your hero headline, thin ink border, light teal tint), headline, one line, purple "Read the story →". The whole card is clickable and lifts a little on hover.
  1. TECHNICAL DEPTH: The sign-in that was quietly failing, linking to /work/sign-in
  2. PRODUCT SENSE: The shortest way to the first order, linking to /work/sign-up
  3. BUSINESS SENSE: The pitch that stalled, and the product that didn't, linking to /work/hifadhi
- A teal "quick wins" label, then a slim row of three stats (592%, 5%, 3 days) with your lines.
- All wording is taken exactly from your brief. No images or extra numbers.

## Case page (one shared layout)
From top to bottom, reading straight down like a short article with generous spacing: "Back to featured work" link (goes to /#work), mono label plus a read-time estimate in the same style (e.g. "2 MIN READ"), big title, one-sentence summary, "My role", then three sections all visible one after another (The challenge, My approach, The outcome) with a small heading and paragraph each, no tabs or clicking. "HOW I GOT THERE" lists all four steps down the page, each with a large number, bold title and text, joined by a teal squiggle running down beside the numbers. Then tool chips and an optional italic note. Text stays about 760px wide.

- /work/sign-in: full Case 1 content, word for word.
- /work/sign-up and /work/hifadhi: simple placeholder pages with the back link, the card's tag and title, and "Full story coming soon."

## Technical details
- `src/components/featured-work.tsx` (section + case data) and `src/components/case-study.tsx` (template; read time worked out from the word count).
- Routes: `src/routes/work.sign-in.tsx`, `work.sign-up.tsx`, `work.hifadhi.tsx`, each with its own head() metadata. Cards use typed `<Link>`.
- Replace the empty #work placeholder in `src/routes/index.tsx` and render the section after Skills. Nothing else on the page changes.
- Small tests: three cards link to the right pages; the case page shows all three sections and all four steps without clicking.
