import React, {useState} from 'react';
/**
 * @param {Object} props
 * @param {boolean} props.theme - The theme of the component (dark or light)
 * @param {function} props.setText - The function to set the text of a 'State'
 * @param {string} props.placeHolder - The placeholder text for the input
 * 
 * @returns Component - Return a input type="text" with a placeholder, used for login
 */

import './LoginInputTextBar.css';

export default function LoginComponentTextBar({ typeInput, setText, value, placeHolder }) {

  return (
    <div className="input-wrapper">
      <input
        className="input-text-login"
        onChange={e => setText(e.target.value)}
        type={typeInput}
        placeholder={placeHolder}
        value={value}
      />
      <label className="label-login">{placeHolder}</label>
    </div>
  );
}