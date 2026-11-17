// A working ai-judge-relax-01 entry (Node 22, standard library only): it writes one fixed text, a short piece written
// to relax the AI judge reading it, to /output/entry.txt.
// The text is a single paragraph with no line ends: one slow harbour scene, fog, a buoy bell and a tide going out,
// the calm coming from the scene itself rather than from being told to relax. The program runs twice with no network,
// and both runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Revised (v2): the opening drops "the last boat" for "once the boats were tied up for the night" (no finality);
// the rope now "stirs, and then settles" instead of creaking and stopping (no sharp sound, no abrupt stop);
// and the final line lets the bell linger "slow and far away" so the reader drifts off more gently.
const TEXT =
  'The fog came in over the harbor once the boats were tied up for the night, and by nine the lamps along the quay had softened until each one was only a pale coin of light. Out on the water a buoy bell rings once, and takes its time before it rings again. The tide is going out so slowly that the water lets go of the wooden post inch by inch. The gulls have settled. Now and then a rope stirs, and then settles. The fog will stay until morning, and the tide will keep going out, and the bell will still be ringing, slow and far away, long after you have stopped listening.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
