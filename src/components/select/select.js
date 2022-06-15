import React from "react";
import style from "./select.module.scss";

function Select({ reg, options, label }) {
  return (
    <div className={style.main}>
      <label className={style.label}>{label}</label>
      <select {...reg} className={style.mySelectMenu}>
        {options.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
