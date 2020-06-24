import React from "react";
import "./App.css";
import { Runewords } from "./data/runewords";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {Runewords.map((runeword) => (
            <div className="col">{runeword.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
