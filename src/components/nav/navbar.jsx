import React from "react";
import style from "./navbar.module.css";
import logo from "../logo.png";
import "./navbar.module.css";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

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
            <Link to={"/newmovie"}>
              <h2>
                <FiPlus className={style.icon} />
              </h2>
            </Link>
            <Link to={"/favorites"}>
              <h2>FAVORITOS</h2>
            </Link>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
