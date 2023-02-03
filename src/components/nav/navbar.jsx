import React from "react";
import style from "./navbar.module.css";
import logo from "../logo.png";
import "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <section>
        <nav>
          <Link to={"/"}>
            <img className={style.logo} src={logo} alt="logo" />
          </Link>
          <div className={style.nav}>
            <Link to={"/"}>
              <h2>INICIO</h2>
            </Link>
            <Link to={"/favorites"}>
              <h2>FAVORITOS</h2>
            </Link>
          </div>
          <input type="text" placeholder="Buscar..." />
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
