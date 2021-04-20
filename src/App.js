import "./styles.css";
import React from "react";
import { Counter } from "./components/Counter";
import CharCounter from "./components/CharCounter";

export default function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <CharCounter />
    </div>
  );
}
