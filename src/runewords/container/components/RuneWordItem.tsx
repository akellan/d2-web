import React, { FC, memo } from "react";
import { RuneWord } from "../../../data/AllRuneWords";

export const RuneWordItem: FC<{ runeword: RuneWord }> = memo(
  function RuneWordItem({ runeword }) {
    if (!runeword.isVisible) {
      return null;
    }
    return (
      <div
        key={runeword.name}
        className="col"
        // style={{ display: runeword.isVisible ? "block" : "none" }}
      >
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
              {runeword.types.map((type) => (
                <span key={type} className="badge badge-info ml-1">
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
    );
  }
);
