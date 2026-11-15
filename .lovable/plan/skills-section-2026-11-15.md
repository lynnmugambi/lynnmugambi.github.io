# Skills section

Added at the #skills anchor, directly under the hero. The hero and navigation stay as they are. It uses the existing colors, fonts and doodles.

## Part A: Sticker banner
- Headline above the band: "FRAMEWORK AGNOSTIC. PRODUCT OBSESSED."
- A slim band of 14 stickers drifts slowly from right to left in an endless loop. It follows a gentle wave, not a straight line.
- Each sticker has a white background, a thin ink border, rounded corners and its own small tilt. The tool name sits underneath in the small mono labels.
- When you hover over or tap a sticker, it wiggles and the whole band pauses.
- Order: React, React Native, TypeScript, Vue, Tailwind CSS, GraphQL, Supabase, Figma, Claude Code, Codex, Git, Storybook, Grafana, Vercel.
- The logos are official brand icons from Simple Icons. React Native uses the React logo, because that is its official mark. Codex has no logo of its own there, so its sticker shows only its name. Any other missing logo will also get a name-only sticker. No logos will be made up.
- A teal handwritten note "AI in my daily workflow" with a small arrow sits next to the Claude Code and Codex stickers and moves with them.
- If a visitor has turned off motion on their device, the stickers show as a still row that wraps onto more lines.

## Part B: Skills explorer
- Three pill tabs: Build, Think, AI. Each has a small teal dot before its label. The active tab is solid purple with off-white text. The other tabs have a thin ink border.
- The entries for the active tab show in two columns on desktop and one on phones. Each entry has a bold title and one line of text.
- Your copy is used word for word, with no extra skills, percentages or progress bars.
- The tabs work with arrow keys, Home and End, and screen readers announce them as tabs.

## Technical details
- Add the `simple-icons` package and pull in only these 13 icons.
- New file `src/components/skills.tsx`, rendered in place of the empty #skills anchor in `src/routes/index.tsx`.
- Marquee: two copies of the list side by side, scrolled with a CSS translateX loop. Each sticker gets a sine-based vertical offset plus a slow bob animation, which together make the wave. `:hover` / `:focus-within` / touch sets `animation-play-state: paused`.
- Under the reduced-motion setting, the band becomes a single static flex-wrap list.
- Tabs follow the WAI-ARIA tablist pattern with roving tabindex.
- Add a small test that checks the 14-tool order and the tab keyboard switching.
