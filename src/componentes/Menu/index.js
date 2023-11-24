import React from 'react'
import styles from './Menu.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function Menu() {
const location = useLocation();
console.log(location)

  return (
    <header>
        <nav className={styles.navegacao}>
            <Link className={`${styles.link}${location.pathname === '/' ?
                                styles.linkDestacado : ''}`} to='/'>
                Início
            </Link>
            <Link className={styles.link} to='/sobremim'>
                Sobremim
            </Link>
        </nav>
    </header>
  )
}
