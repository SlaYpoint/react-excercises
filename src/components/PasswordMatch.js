import React, { useState } from "react";

const PasswordMatch = () => {
  let [pswd, setPswd] = useState("");
  let [msg, showMsg] = useState(" ");
  let [btnDisable, setDisable] = useState(true);

  const checkAlphaNum = (pass) => {
    let digit = /\d/;
    if (!pass.match(digit) && pass.length !== 0) {
      showMsg("Password must be alpha-numeric!");
      setPswd("");
    } else {
      showMsg("");
      setPswd(pass);
    }
  };

  return (
    <div>
      <h2>Password Matching</h2>
      <input type="password" onChange={(e) => checkAlphaNum(e.target.value)} />
      <br />
      <br />
      <input
        type="password"
        onChange={(e) => {
          let confirm = e.target.value;

          if (pswd === confirm && pswd.length !== 0) {
            showMsg("Password Matched");
            setDisable(false);
          } else {
            showMsg("Password Unmatched!");
          }
        }}
      />
      <br />
      <br />
      <p>{msg}</p>
      <button disabled={btnDisable} onClick={console.log(pswd)}>
        Submit
      </button>
    </div>
  );
};

export default PasswordMatch;
