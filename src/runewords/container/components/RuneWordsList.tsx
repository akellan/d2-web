import { RuneWord } from "../../../data/AllRuneWords";
import React, { memo } from "react";
import { RuneWordItem } from "./RuneWordItem";

interface RuneWordsListProps {
  runeWords: readonly RuneWord[];
}

export const RuneWordsList = memo<RuneWordsListProps>(function RuneWordsList({
  runeWords,
}) {
  return (
    <>
      {runeWords.map((runeword) => (
        <RuneWordItem runeword={runeword} key={runeword.name} />
      ))}
    </>
  );
});
