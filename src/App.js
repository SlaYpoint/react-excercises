import "./styles.css";
import React from "react";
import { Counter } from "./components/Counter";
import CharCounter from "./components/CharCounter";
import PasswordMatch from "./components/PasswordMatch";

export default function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CharCounter /> */}
      <PasswordMatch />
    </div>
  );
}
