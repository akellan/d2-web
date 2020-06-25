import { AllRuneWords } from "./AllRuneWords";

export const AllRunes = Array.from(
  AllRuneWords.reduce((previous, current) => {
    current.runes.forEach((rune) => previous.add(rune));
    return previous;
  }, new Set<string>())
).sort();
