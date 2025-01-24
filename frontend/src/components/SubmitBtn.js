import React from "react";

import "./SubmitBtn.css";

/**
 * 
 * @param {text} props - The text to display on the button 
 * @returns a button with the text passed as a parameter
 */
export default function SubmitBtn({ text }) {
  return (
    <button className="submit-btn" type="submit">{text}</button>
  )
}