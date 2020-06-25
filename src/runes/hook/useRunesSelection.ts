import { useState, useCallback } from "react";

type SelectedItems = ReadonlySet<string>;
type ToggleSelection = (item: string) => void;

export const useRunesSelection = (): [SelectedItems, ToggleSelection] => {
  const [selectedItems, setSelectedItems] = useState(new Set<string>());

  const toggleRuneSelection = useCallback(
    (runeName: string) => {
      if (selectedItems.has(runeName)) {
        selectedItems.delete(runeName);
        setSelectedItems(new Set(selectedItems));
      } else {
        selectedItems.add(runeName);
        setSelectedItems(new Set(selectedItems));
      }
    },
    [selectedItems]
  );

  return [selectedItems, toggleRuneSelection];
};
