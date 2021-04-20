import React, { useState } from "react";

const CharCounter = () => {
  let [countVal, setCount] = useState(0);

  return (
    <div>
      <h2>Character Count</h2>
      <p>{countVal} characters</p>
      <textarea
        onChange={(e) => setCount(140 - e.target.value.length)}
        placeholder="Type here..."
      ></textarea>
    </div>
  );
};

export default CharCounter;
