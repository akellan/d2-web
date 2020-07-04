import React, { FC } from "react";
import { RuneList as RuneListData } from "../../data";
import { RuneListItem } from "./RuneLitsItem";

interface RuneFilterProps {
  selectedRunes: ReadonlySet<string>;
  toggleRuneSelection: (runeName: string) => void;
}

export const RuneList: FC<RuneFilterProps> = function RuneList({
  selectedRunes,
  toggleRuneSelection,
}) {
  return (
    <>
      {RuneListData.map((rune) => (
        <RuneListItem
          key={rune}
          runeName={rune}
          selected={selectedRunes.has(rune)}
          toggleSelection={toggleRuneSelection}
        />
      ))}
    </>
  );
};
