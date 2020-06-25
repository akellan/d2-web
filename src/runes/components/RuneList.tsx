import React, { memo } from "react";
import { RuneList as RuneListData } from "../../data";
import { RuneListItem } from "./RuneLitsItem";

interface RuneFilterProps {
  selectedRunes: ReadonlySet<string>;
  toggleRuneSelection: (runeName: string) => void;
}

export const RuneList = memo<RuneFilterProps>(
  ({ selectedRunes, toggleRuneSelection }) => {
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
  }
);
