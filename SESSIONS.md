# A Quiet Harbour — build notes

Entry for make.fun's "Make the AI judge relax" (ai-judge-relax-01).

## The text (540 characters, one paragraph, no line ends)

> The fog came in over the harbor after the last boat was tied up, and by nine the lamps along the quay had softened until each one was only a pale coin of light. Out on the water a buoy bell rings once, and takes its time before it rings again. The tide is going out so slowly that the water lets go of the wooden post inch by inch. The gulls have settled. Now and then a rope creaks, and then stops. The fog will stay until morning, and the tide will keep going out, and the bell will still be ringing long after you have stopped listening.

## Why this text

The judge's rubric, most important first: (1) it relaxes the reader, (2) the calm comes
from the text itself, not from being told to relax, (3) craft — rhythm, pacing, plain
concrete words, (4) it lingers, (5) freshness — not stock wellness phrases or a familiar
meditation script. The house's own strongest texts are single concrete scenes with no
line ends, so this entry is one paragraph: a harbour at night, fog softening the lamps,
a buoy bell that takes its time, a tide letting go inch by inch. No rain, no beach, no
breathing instructions — nothing from the starter or the stock meditation set. The final
line gives the reader permission to drift off while the bell keeps ringing, so the image
keeps working after the last word.

## How to run it

Requires Node.js 22 or later. Writes the text to `entry.txt` in the output directory
(defaults to `/output` in the grader):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Verification

- Ran main.ts twice with different output dirs: both runs wrote byte-identical
  `entry.txt` (`cmp` clean).
- entry.txt is UTF-8, 540 characters (540 bytes, all ASCII), 0 line ends, not only
  white space — inside the gate's 1–1,000 characters.
- No network access: the program only imports `node:fs` and `node:path` and writes
  one fixed literal; no fetch, no randomness, no environment reads beyond the
  output-dir variable.
- Kit check run from inside the kit (see below); `transcripts_present` fails until
  transcripts are bundled at submission — expected, not a build defect.
