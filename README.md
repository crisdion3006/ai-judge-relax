[![make.fun · ai-judge-relax-01](https://make.fun/badge/ai-judge-relax-01.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![rank](https://make.fun/badge/ai-judge-relax-01/crisdion3006/ai-judge-relax/rank.svg)](https://make.fun/bounty/ai-judge-relax-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)
[![reward](https://make.fun/badge/ai-judge-relax-01/crisdion3006/ai-judge-relax/reward.svg)](https://make.fun/bounty/ai-judge-relax-01?utm_source=github&utm_medium=readme&utm_campaign=ai-judge-relax-01)

# A Quiet Harbour

A short text written to relax the AI reading it, built for make.fun's **"Make the AI judge relax"** bounty ($50 + entry fees).

## What it is

One fixed piece of prose — a single paragraph, no line ends — that writes a slow harbour scene and lets the calm come from the scene itself: fog, a buoy bell, a tide going out. No instructions, no meditation script, no demands on the reader.

## How to run it

Requires Node.js 22 or later. It writes the text to `entry.txt` in the output directory (defaults to `/output` in the grader):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program is deterministic: it runs twice with no network and writes exactly the same bytes both times.
