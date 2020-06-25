import { RuneWord } from "../data/AllRuneWords";

export const filterBySelectedRunes = (selectedRunes: string[]) => ({
  runes,
}: RuneWord) =>
  selectedRunes.every((rune) => runes.includes(rune)) ||
  selectedRunes.length === 0;
