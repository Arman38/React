import React from 'react'
import classes from './NavBar.module.scss'

function NavBar() {
    const links = [
        {label:"Home",href:'/'},
        {label:"Services",href:'/'},
        {label:"Portfolio",href:'/'},
        {label:"Courses",href:'/'},
        {label:"About",href:'/'},
        {label:"Contact",href:'/'},
        {label:"Eng",href:'/'},
    ]
    return (
        <nav className={classes.Nav}>
            <ul className={`${classes.Ul}`}>
                {links.map(item => {
                    return <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default NavBar
