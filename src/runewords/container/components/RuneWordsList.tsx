import { RuneWord } from "../../../data/AllRuneWords";
import React, { memo } from "react";

interface RuneWordsListProps {
  runeWords: readonly RuneWord[];
}

export const RuneWordsList = memo<RuneWordsListProps>(function RuneWordsList({
  runeWords,
}) {
  return (
    <>
      {runeWords.map((runeword) => (
        <div key={runeword.name} className="col">
          <div className="card mb-5">
            <div className="card-header bg-light text-primary h4">
              {runeword.name}
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-center h5">
                {runeword.runes.map((rune, index) => (
                  <span key={index} className="badge badge-warning ml-1">
                    {rune}
                  </span>
                ))}
              </div>
              <div>
                {runeword.types.map((type, index) => (
                  <span key={index} className="badge badge-info ml-1">
                    {type}
                  </span>
                ))}
              </div>
              <ul className="list-group list-group-flush mt-4">
                {runeword.stats.map((stat, index) => (
                  <li key={index} className="list-group-item p-1">
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
});
