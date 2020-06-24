import React, { useMemo } from "react";
import "./App.css";
import { Runewords } from "./data/runewords";

function App() {
  const runelist = useMemo(
    () =>
      Array.from(
        Runewords.reduce((previous, current) => {
          current.runes.forEach((rune) => previous.add(rune));
          return previous;
        }, new Set<string>())
      ).sort(),
    []
  );

  return (
    <div className="App">
      <div className="container pt-5 pb-5">
        <div className="row h4 mb-5">
          {runelist.map((rune) => (
            <span className="badge badge-info m-1">{rune}</span>
          ))}
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {Runewords.map((runeword, index) => (
            <div key={index} className="col">
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
        </div>
      </div>
    </div>
  );
}

export default App;
