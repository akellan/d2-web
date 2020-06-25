import { RuneWords } from "./Runewords";

export const RuneList = Array.from(
  RuneWords.reduce((previous, current) => {
    current.runes.forEach((rune) => previous.add(rune));
    return previous;
  }, new Set<string>())
).sort();
