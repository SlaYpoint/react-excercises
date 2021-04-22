import React, {useState} from "react";
import './dark.css';
const DarkMode = () =>{
  const [theme, setTheme] = useState("light");
  const [color, setColor] = useState([
    {background : #243133, color: #ffffff},
    {}
  ])
  return(
    <div className="container" style={{background : }}>
      <h1>Theme Toggler</h1>
      <button className="btn">Toggle</button>
      <p className={theme}> This how text looks </p>
    </div>
  );
}
 export default DarkMode;
