import React, { memo, useCallback } from "react";

interface RuneListItemProps {
  toggleSelection: (runeName: string) => void;
  selected: boolean;
  runeName: string;
}

export const RuneListItem = memo<RuneListItemProps>(function RuneListItem({
  runeName,
  selected,
  toggleSelection,
}) {
  const selectedClass = selected ? "btn-warning" : "btn-secondary";

  const toggle = useCallback(() => {
    toggleSelection(runeName);
  }, [runeName, toggleSelection]);

  return (
    <button
      type="button"
      onClick={toggle}
      className={`btn ${selectedClass} m-1 btn-sm`}
    >
      {runeName}
    </button>
  );
});
