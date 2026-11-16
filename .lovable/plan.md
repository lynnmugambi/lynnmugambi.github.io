# Before you ask, Contact and footer

## Before you ask (at #ask, under Beyond code)
- The headline "BEFORE YOU ASK", then six questions as a list that opens one row at a time.
- Each row has a small mono number (01 to 06), the question in the headline font, and a plus that turns into a minus when the row is open. The answer shows below it in large body text.
- Row 01 is open when the page loads. Opening another row closes the one that's open.
- Thin ink lines sit between the rows. You can open rows with the keyboard (Tab, then Enter or Space).
- Your six questions and answers are used exactly.

## Contact (at #contact)
- A full-width solid purple band with off-white text. This is the only place purple is used as a background.
- The headline "GOT A PROBLEM WORTH SOLVING? LET'S TALK."
- One off-white button with purple text, "Get in touch", which opens an email to lynnlmugambi@gmail.com.
- A hand-drawn off-white arrow pointing at the button.
- No contact form.

## Footer (under the band, on the off-white page)
- A row of small mono links: LinkedIn, GitHub, Email, Resume. LinkedIn and GitHub open in a new tab. The links come from one list, so more can be added later without a redesign.
- The line "Built with ❤️, 💻 and 🥨 by Lynn Mugambi ©".
- A "Back to top" link.

## Things to know
- **Resume:** your brief mentions an attached resume PDF, but no PDF came with it. Until you send it, the Resume link stays hidden. Once you upload it, I'll add it.
- The line uses ❤️ for heart, 💻 for code and 🥨 for snack, matching the footer you asked for earlier. Tell me if you want different ones.

## Technical details
- New `src/components/faq.tsx` (data and a single-open accordion with `aria-expanded` and `aria-controls` buttons) and `src/components/contact.tsx` (band and footer with a `footerLinks` array; `resume` entry included only once a file exists).
- Replace the remaining "ask" and "contact" placeholders in `src/routes/index.tsx`. Earlier sections stay untouched.
- The off-white arrow reuses the existing `Arrow` doodle with the background colour.
- Tests: 01 opens by default, opening 03 closes 01, and the button links to the right email address.
