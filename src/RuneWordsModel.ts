import { RuneWord, AllRuneWords } from "./data/AllRuneWords";
import { Reducer } from "react";
import { getSelectedRunes, setSelectedRunes } from "./storage/localStore";

export interface RuneWordsModel {
  allRuneWords: readonly RuneWord[];
  filteredRuneWords: readonly RuneWord[];
  selectedRunes: ReadonlySet<string>;
}

export const RuneWordsModelFunc = {
  default() {
    return {
      filteredRuneWords: RuneWordsModelFunc.filterByRunes(
        AllRuneWords,
        getSelectedRunes()
      ),
      selectedRunes: new Set<string>(getSelectedRunes()),
      allRuneWords: AllRuneWords,
    };
  },

  filterByRunes(
    runeWords: readonly RuneWord[],
    selectedRunes: readonly string[]
  ) {
    return runeWords.filter(
      ({ runes }) =>
        selectedRunes.every((rune) => runes.includes(rune)) ||
        selectedRunes.length === 0
    );
  },

  toggleRuneSelection(model: RuneWordsModel, runeName: string): RuneWordsModel {
    const selectedRunes = new Set(model.selectedRunes);

    if (model.selectedRunes.has(runeName)) {
      selectedRunes.delete(runeName);
    } else {
      selectedRunes.add(runeName);
    }

    setSelectedRunes(Array.from(selectedRunes));

    return Object.assign({}, model, {
      filteredRuneWords: RuneWordsModelFunc.filterByRunes(
        AllRuneWords,
        Array.from(selectedRunes)
      ),
      selectedRunes,
    });
  },
};

type RuneWordsModelActions = { type: "toggelRuneSelection"; runeName: string };

export const runeWordsReducer: Reducer<
  RuneWordsModel,
  RuneWordsModelActions
> = (state, action) => {
  switch (action.type) {
    case "toggelRuneSelection": {
      return RuneWordsModelFunc.toggleRuneSelection(state, action.runeName);
    }
    default:
      return state;
  }
};
