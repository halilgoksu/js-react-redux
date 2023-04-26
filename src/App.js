import React from "react";
import { Counter } from "./features/counter/Counter";
import "./app.css";

function App() {
  return (
    <div className="appjs">
      <header className="App-header">
        <Counter />
        <ul>
          <li>app/store.js:icinde configureStore var</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
