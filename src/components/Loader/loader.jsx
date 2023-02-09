import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import style from "./loader.module.css";

function Loader() {
  return (
    <div className={style.loader}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
