import React, { useCallback, FC } from "react";

interface RuneListItemProps {
  toggleSelection: (runeName: string) => void;
  selected: boolean;
  runeName: string;
}

export const RuneListItem: FC<RuneListItemProps> = function RuneListItem({
  runeName,
  selected,
  toggleSelection,
}) {
  const selectedClass = selected ? "badge-warning" : "badge-secondary";

  const toggle = useCallback(() => {
    toggleSelection(runeName);
  }, [runeName, toggleSelection]);

  return (
    <span
      role="button"
      onClick={toggle}
      className={`badge ${selectedClass} m-1`}
    >
      {runeName}
    </span>
  );
};
