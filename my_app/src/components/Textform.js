import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Upper Case Was Clicked")
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handlelowClick=()=>{
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
  }
  const handleonChange = (event) => {
    // console.log("ONChange")
    setText(event.target.value);
  };
  const clearBox = () => {
    setText("");
  };

  return (
    <>
      <div className="container">
        <h4 className="my-3">{props.heading}</h4>
        <div className="form-floating">
          <textarea
            className="form-control"
            onChange={handleonChange}
            placeholder="Leave a comment here"
            value={text}
            id="floatingTextarea2"
            style={{ height: "150px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2"></label>
        </div>
        <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary my-3 my-1">
          UpperCase
        </button>
        <button disabled={text.length===0} onClick={handlelowClick} className="btn btn-primary my-3 mx-3">
          LowerCase
        </button>
        <button disabled={text.length===0} onClick={handleCopy} className="btn btn-warning my-3 mx-3">
          Copy Text
        </button>
        <button disabled={text.length===0} onClick={clearBox} className="btn btn-danger my-3 mx-3">
          Clear
        </button>
      </div>
      <div className="container my-3">
          <h5>Your Text Summary</h5>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
      </div>
    </>
  );
}
