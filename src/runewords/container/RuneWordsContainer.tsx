import { memo, ReactElement, useReducer, useCallback } from "react";
import {
  RuneWordsModel,
  runeWordsReducer,
  RuneWordsModelFunc,
} from "../../RuneWordsModel";

interface RuneWordsContainerApi {
  state: RuneWordsModel;
  toggleRuneSelection: (runName: string) => void;
}

interface RuneWordsContainerProps {
  children: (api: RuneWordsContainerApi) => ReactElement;
}

export const RuneWordsContainer = memo<RuneWordsContainerProps>(
  function RuneWordsContainer({ children }) {
    const [state, dispatch] = useReducer(runeWordsReducer, null, () =>
      RuneWordsModelFunc.default()
    );

    const toggleRuneSelection = useCallback((runeName: string) => {
      setTimeout(() => {
        dispatch({ type: "toggelRuneSelection", runeName });
      }, 10);
      setTimeout(() => {
        dispatch({ type: "filterByRunes" });
      }, 10);
    }, []);

    return children({ state, toggleRuneSelection });
  }
);
