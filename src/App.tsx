import React from "react";
import "./App.css";
import { Runewords } from "./data/runewords";

function App() {
  return (
    <div className="App">
      <div className="container pt-5 pb-5">
        <div className="row row-cols-3">
          {Runewords.map((runeword, index) => (
            <div key={index} className="col">
              <div className="card m-2">
                <div className="card-header bg-primary text-light h5">
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
