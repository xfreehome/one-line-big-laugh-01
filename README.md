# One Line, Big Laugh

[![make.fun · u-coral-404-one-line-big-laugh-328fb857](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![rank](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/xfreehome/one-line-big-laugh-01/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)
[![reward](https://make.fun/badge/u-coral-404-one-line-big-laugh-328fb857/xfreehome/one-line-big-laugh-01/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-big-laugh-328fb857)

Entry for the [make.fun One Line, Big Laugh bounty](https://make.fun/bounty/u-coral-404-one-line-big-laugh-328fb857): a program that writes one funny line, 200 characters or fewer, that lands entirely on its own.

## The line

> My grandma's Wi-Fi password is her first husband's name, so every guest has to ask about a man nobody mentions at dinner.

(121 characters.)

## How it works

`main.ts` (Node 22) writes that single line to `/output/entry.txt`, validating first that it is 1–200 characters, a single line with no line breaks, and not only white space.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
