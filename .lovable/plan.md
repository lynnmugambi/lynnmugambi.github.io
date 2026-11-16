# Two more story pages: sign-up and Hifadhi

## What you'll see
- /work/sign-up and /work/hifadhi turn from "Full story coming soon" into full story pages, with the same layout as the sign-in story. All text is your copy, unchanged.
- Case 3 has no italic note at the bottom, as your brief asks.
- The homepage and the sign-in story stay exactly as they are.

## Margin doodles (laptop and desktop only, hidden on phones and tablets)
- Both pages: the notebook star beside "How I got there".
- Sign-up story:
  - Beside "The challenge": a hand-drawn form field labelled "Name", with a teal line scribbled through it.
  - Beside "The outcome": a handwritten "+30%!" with a curved teal arrow pointing back at the results.
- Hifadhi story:
  - Beside "The challenge": a crumpled paper form, with a teal arrow that turns into a tick.
  - Beside "The outcome": a handwritten "3 hrs → 30 min" with a curved teal arrow pointing back at the results.
- Each doodle draws itself in once when you scroll to it, then stays still. If your device is set to reduce motion, the doodles just appear.

## Things to know
- The Hifadhi page label says "BUSINESS SENSE", as your brief says. The homepage card for this story still says "FOUNDER INSTINCT", because the brief says not to touch the homepage. Tell me if you'd like them to match.
- To give each story its own doodles, the shared page layout needs one small addition: a slot where each story passes in its own margin doodles. The layout, spacing and the sign-in story's doodles stay exactly as they are now.

## Technical details
- `CaseData` gets optional `challengeDoodle` and `outcomeDoodle` (ReactNode). The sign-in story moves its existing "f sign in" and "yay!" markup into those fields unchanged, so its page renders the same.
- New case data `signUpCase` and `hifadhiCase` in `src/components/featured-work.tsx`, without `note` for Hifadhi. The work.sign-up and work.hifadhi routes render `CaseStudy`. Their head() metadata uses the new summaries.
- New doodles in `src/components/doodles/index.tsx` (NameField, CrumpledForm, ResultNote) built on the existing `Doodle` component, which already draws once on scroll and respects reduced motion. All are wrapped with `hidden lg:block`.
- Tests: both new pages show all three sections and four steps; Hifadhi shows no note.
