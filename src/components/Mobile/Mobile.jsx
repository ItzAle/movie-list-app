import React from "react";
import { BiHomeAlt, BiStar } from "react-icons/bi";
import style from "./Mobile.module.css";
import { Link } from "react-router-dom";

function Mobile() {
  return (
    <div className={style.mobile__menu}>
      <Link to={"/"}>
        <BiHomeAlt />
      </Link>
      <Link to={"/favorites"}>
        <BiStar />
      </Link>
    </div>
  );
}

export default Mobile;
