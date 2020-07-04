import { RuneWord, AllRuneWords } from "./data/AllRuneWords";
import { Reducer } from "react";
import { LocalStore } from "./storage/localStore";

export interface RuneWordsModel {
  allRuneWords: readonly RuneWord[];
  filteredRuneWords: readonly RuneWord[];
  selectedRunes: ReadonlySet<string>;
}

export const RuneWordsModelFunc = {
  default() {
    return {
      filteredRuneWords: RuneWordsModelFunc.filterByRunesOp(
        AllRuneWords,
        LocalStore.getSelectedRunes()
      ),
      selectedRunes: new Set<string>(LocalStore.getSelectedRunes()),
      allRuneWords: AllRuneWords,
    };
  },

  isArrayIncluded(sortedArray: string[], includedArray: string[]) {
    if (includedArray.length === 0) {
      return true;
    }

    if (includedArray.length > sortedArray.length) {
      return false;
    }

    let runeWordIndex = 0;
    let selectedRunesIndex = 0;

    while (
      selectedRunesIndex < includedArray.length &&
      runeWordIndex < sortedArray.length
    ) {
      if (sortedArray[runeWordIndex] === includedArray[selectedRunesIndex]) {
        runeWordIndex++;
        selectedRunesIndex++;
      } else {
        runeWordIndex++;
      }

      if (selectedRunesIndex === includedArray.length) {
        break;
      }
    }

    return selectedRunesIndex === includedArray.length;
  },

  filterByRunesOp(runeWords: readonly RuneWord[], selectedRunes: string[]) {
    const sortedSelectedRunes = [...selectedRunes].sort();

    return runeWords.map((runeWord) => {
      const isRuneWordVisible = RuneWordsModelFunc.isArrayIncluded(
        runeWord.sortedRunes,
        sortedSelectedRunes
      );

      return runeWord.isVisible === isRuneWordVisible
        ? runeWord
        : { ...runeWord, isVisible: isRuneWordVisible };
    });
  },

  toggleRuneSelection(model: RuneWordsModel, runeName: string): RuneWordsModel {
    const selectedRunes = new Set(model.selectedRunes);

    if (model.selectedRunes.has(runeName)) {
      selectedRunes.delete(runeName);
    } else {
      selectedRunes.add(runeName);
    }

    LocalStore.setSelectedRunes(Array.from(selectedRunes));

    return {
      ...model,
      selectedRunes,
    };
  },

  filterByRunes(model: RuneWordsModel): RuneWordsModel {
    return {
      ...model,
      filteredRuneWords: RuneWordsModelFunc.filterByRunesOp(
        AllRuneWords,
        Array.from(model.selectedRunes)
      ),
    };
  },
};

type RuneWordsModelActions =
  | { type: "toggelRuneSelection"; runeName: string }
  | { type: "filterByRunes" };

export const runeWordsReducer: Reducer<
  RuneWordsModel,
  RuneWordsModelActions
> = (state, action) => {
  switch (action.type) {
    case "toggelRuneSelection": {
      return RuneWordsModelFunc.toggleRuneSelection(state, action.runeName);
    }
    case "filterByRunes": {
      return RuneWordsModelFunc.filterByRunes(state);
    }
    default:
      return state;
  }
};
