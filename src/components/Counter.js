import React, { useState } from "react";

export const Counter = () => {
  let [countVal, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(countVal - 1)}> - </button>
      {countVal}
      <button onClick={() => setCount(countVal + 1)}> + </button>
    </div>
  );
};
