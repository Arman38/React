import React from 'react'
import LogoImg from '../../../assets/logo/logo-final.png'
import classes from './logo.module.scss'

function Logo() {
    return (
        <div className={`${classes.LogoContainer}`} >
            <img src={LogoImg} alt='logo'/>
        </div>
    )
}

export default Logo
