# Beyond code section

## What you'll see
- Under Featured work, at #beyond (already in the menu): the headline "BEYOND CODE" in the site's headline font.
- One long teal squiggle runs across the section behind the notes, like a pen path in a notebook margin. It draws itself in once when you scroll to it.
- Four torn-notebook notes sit along the line: off-white paper, faint ruled lines, a strip of tape at the top, each tilted a few degrees a different way.
  - Paper plane: TRAVEL
  - Light bulb: SIDE PROJECTS
  - Heart: MY HEART
  - Paintbrush: ART
- The front shows the teal doodle and the title. Hover or tap: the note lifts, straightens and shows your text in the handwriting font (Homemade Apple). Tap again to close. Keyboard: Tab to a note, Enter or Space opens and closes it.
- Layout: four in a row on desktop, two by two on tablet, stacked on phones. On phones and tablets the squiggle runs down behind the notes instead of across.
- Your text is used exactly. No photos and no extra notes.
- With reduce motion on, the line and doodles simply appear, and the notes open without the lift animation.

## Things to know
- The handwriting font is quite wide, so the longer notes (Travel, Art) will be in a smaller size to fit on the note.

## Technical details
- New `src/components/beyond.tsx` with the note data and a `Note` button (`aria-expanded`, toggles on click; CSS hover reveals on pointer devices). It replaces the "beyond" placeholder in `src/routes/index.tsx`. The "ask" and "contact" placeholders stay.
- New doodles PaperPlane, Bulb and Paintbrush in the doodles file, plus the existing Heart. The line uses the existing draw-in `Doodle`.
- Paper, ruled lines and tape are drawn with existing design tokens in a small `.note-paper` style in styles.css.
- Test: four notes with the exact titles. Clicking a note opens it, and clicking again closes it.
