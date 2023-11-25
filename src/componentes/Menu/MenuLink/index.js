import React from 'react'
import styles from './MenuLink.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function MenuLink({children, to}) {

    // const localizacao = useLocation();

    return (
        <>
            {/* <Link className={`${styles.link} ${localizacao.pathname === to ?
                                        styles.linkDestacado : ''}`} to={to}>
                        {children}
            </Link> */}
            <NavLink to={to} 
                     className={({isActive}) => `
                                ${styles.link}
                                ${isActive? styles.linkDestacado : ''}`} 
                     end>
                {children}
            </NavLink>
        </>
    )
}
