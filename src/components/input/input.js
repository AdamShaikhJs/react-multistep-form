import React from "react";
import { regexStrings } from "../../constants/constant";

import style from "./input.module.scss";

const Input = (props) => {
  const { reg, label, type, placeHolder} = props;
  const {regexOnlyNumber} = regexStrings


const handle = (value) => {
    if (new RegExp(regexOnlyNumber).test(value)) {
      console.log("2 value regexp",value)
    }else{
        value=""
    }
   
  };
  return (
    <div>
      <label className={style.label}>{label}</label>
      <input
        className={style.input}
        {...reg}
        type={type}
        placeholder={placeHolder}
        onChange={(e) => {
            handle(e.target.value);
          }}
      />
    </div>
  );
};
export default Input;
