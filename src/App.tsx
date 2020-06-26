import React from "react";
import "./App.css";
import { RuneList } from "./runes/components/RuneList";
import { RuneWordsContainer } from "./runewords/container/RuneWordsContainer";
import { RuneWordsList } from "./runewords/container/components/RuneWordsList";

function App() {
  return (
    <RuneWordsContainer>
      {({ state, toggleRuneSelection }) => (
        <div className="App">
          <div className="container pt-5 pb-5">
            <div className="row h4 mb-5 ml-3 mr-3">
              <RuneList
                selectedRunes={state.selectedRunes}
                toggleRuneSelection={toggleRuneSelection}
              />
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              <RuneWordsList runeWords={state.filteredRuneWords} />
            </div>
          </div>
        </div>
      )}
    </RuneWordsContainer>
  );
}

export default App;
