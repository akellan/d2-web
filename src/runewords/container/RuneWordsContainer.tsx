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
  ({ children }) => {
    const [state, dispatch] = useReducer(runeWordsReducer, null, () =>
      RuneWordsModelFunc.default()
    );

    const toggleRuneSelection = useCallback((runeName: string) => {
      dispatch({ type: "toggelRuneSelection", runeName });
    }, []);

    return children({ state, toggleRuneSelection });
  }
);
