import React from 'react'
import style from './navbar.module.css'
import logo from '../logo.png'
import './navbar.module.css'

function Navbar() {
  return (
    <div>
      <section>
        <nav>
           <img className={style.logo} src={logo} alt="logo" />
          <h2>INICIO</h2>
          <h2>FAVORITOS</h2>
          <input type="text"  placeholder='Buscar...'/>
        </nav>
        </section>
    </div>
  )
} 

export default Navbar