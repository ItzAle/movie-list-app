import React from "react";
import style from "./error.module.css";

function Error() {
  return (
    <div>
      <h1>
        Error <span>404</span>{" "}
      </h1>
      <h1>Not Found</h1>
      <h1 className={style.sad_face}>:c</h1>
    </div>
  );
}

export default Error;
