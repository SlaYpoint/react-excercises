import React, { useState } from "react";

const PasswordMatch = () => {
  let [pswd, setPswd] = useState("");
  let [match, showMatch] = useState(" ");

  return (
    <div>
      <h2>Password Matching</h2>
      <input type="password" onChange={(e) => setPswd(e.target.value)} />
      <br />
      <br />
      <input
        type="password"
        onChange={(e) => {
          let confirm = e.target.value;

          if (pswd === confirm) {
            showMatch("Password Matched");
          } else {
            showMatch("Password Unmatched!");
          }
        }}
      />
      <br />
      <br />
      <p>{match}</p>
    </div>
  );
};

export default PasswordMatch;
