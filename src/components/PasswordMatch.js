import React, { useState } from "react";

const PasswordMatch = () => {
  const [pswd, setPswd] = useState("");
  const [msg, showMsg] = useState(" ");
  const [btnDisable, setDisable] = useState(true);
  const [passType, setType] = useState("password");
  const [show, setShow] = useState("Show");

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

  const hideHandler = () => {
    if (passType === "password") {
      setType("text");
      setShow("Hide");
    } else {
      setType("password");
      setShow("Show");
    }
  };
  return (
    <div>
      <h2>Password Matching</h2>
      <input type={passType} onChange={(e) => checkAlphaNum(e.target.value)} />
      <br />
      <br />
      <input
        type={passType}
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
      <p> {msg} </p>
      <small onClick={hideHandler}> {show} </small>

      <button disabled={btnDisable} onClick={console.log(pswd)}>
        {" "}
        Submit
      </button>
    </div>
  );
};

export default PasswordMatch;
