# Step 1: Design system, navigation and hero (poster x notebook)

This replaces the current page. Only the design system, nav and hero are built; the other sections become empty anchors.

## Design system
- Colors as theme tokens: paper `#F4F1EA` background, ink `#141414` text, `#5A5650` secondary text, purple `#5B2FD1` (buttons/links only), dark teal `#0B5F58` (doodles/handwriting only), white cards with 1.5px ink border.
- Fonts from Google Fonts: Anton (uppercase, huge, tight headlines), Caveat (handwritten notes), JetBrains Mono (uppercase letter-spaced labels), Inter (body).
- Reusable doodles: squiggle, arrow, underline, star — uneven 2.5px teal stroke, no fill, draw themselves in once when scrolled into view.
- Reusable handwritten note (rotated a few degrees), purple button with small hover lift, visible focus outlines on every link/button.
- All motion turns off with reduced-motion settings. Built mobile first, checked at 375px.

## Navigation
- Left: "LYNN MUGAMBI" mono label. Right: Work, Skills, Beyond code, Before you ask, Contact with smooth scrolling.
- On mobile these collapse into a menu button that opens a panel.

## Hero
- Mono label "PRODUCT ENGINEER · 8 YEARS SHIPPING", then Anton headline "HELLO!," / "I'M LYNN." with a teal hand-drawn underline under "LYNN".
- Large Inter line: "Engineer by trade. Product thinker by nature."
- Purple "See my work" button (to #work) and "Get in touch" text link (to #contact).
- Your photo, cropped waist-up, to the right on desktop (slightly overlapping the headline) and below on mobile, with teal squiggles and a note "hi, that's me" with an arrow pointing at it. Alt text included.

## Empty anchors
- #skills, #work, #beyond, #ask, #contact — no content yet.

## Removed for now
- Current sample cards, about, contact form and footer are removed, per "build ONLY" this step. Earlier ideas (CV journey page, resume link, footer line, icons) wait for later steps.

## Technical details
- Upload photo via lovable-assets; crop waist-up with CSS (object-position top, fixed aspect container) to keep the original file.
- Tokens in src/styles.css (oklch equivalents), fonts via link in __root head.
- Doodles in src/components/doodles/ using an IntersectionObserver + stroke-dashoffset draw-in hook.
- Update project design memory to the new palette/fonts (replacing the scrapbook rule).
