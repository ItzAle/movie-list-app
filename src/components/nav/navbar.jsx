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
          <h2> inicio</h2>
          <h2>favoritos</h2>
          <input type="text"  placeholder='buscar'/>
        </nav>
        </section>
    </div>
  )
} 

export default Navbar