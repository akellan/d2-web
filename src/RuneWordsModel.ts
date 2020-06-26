import { RuneWord, AllRuneWords } from "./data/AllRuneWords";
import { Reducer } from "react";

export interface RuneWordsModel {
  allRuneWords: readonly RuneWord[];
  filteredRuneWords: readonly RuneWord[];
  selectedRunes: Set<string>;
}

export const filterBySelectedRunes = (selectedRunes: string[]) => ({
  runes,
}: RuneWord) =>
  selectedRunes.every((rune) => runes.includes(rune)) ||
  selectedRunes.length === 0;

export const RuneWordsModelFunc = {
  default() {
    return {
      filteredRuneWords: AllRuneWords,
      selectedRunes: new Set<string>(),
      allRuneWords: AllRuneWords,
    };
  },

  toggleRuneSelection(model: RuneWordsModel, runeName: string): RuneWordsModel {
    const selectedRunes = new Set(model.selectedRunes);

    if (model.selectedRunes.has(runeName)) {
      selectedRunes.delete(runeName);
    } else {
      selectedRunes.add(runeName);
    }

    return Object.assign({}, model, {
      filteredRuneWords: model.allRuneWords.filter(
        filterBySelectedRunes(Array.from(selectedRunes))
      ),
      selectedRunes,
    });
  },
};

type RuneWordsModelActions =
  | {
      type: "filterByRunes";
      selectedRunes: readonly string[];
    }
  | { type: "toggelRuneSelection"; runeName: string };

export const runeWordsReducer: Reducer<
  RuneWordsModel,
  RuneWordsModelActions
> = (state, action) => {
  switch (action.type) {
    case "filterByRunes": {
      return state;
    }
    case "toggelRuneSelection": {
      return RuneWordsModelFunc.toggleRuneSelection(state, action.runeName);
    }
    default:
      return state;
  }
};
