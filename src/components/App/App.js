import React from 'react'
import Header from '../Header/Header'
import SliderContent from '../SliderContent/SliderContent'
import Slide from '../Slide/Slide'
import classes from './app.module.scss'
import Globus from '../../assets/images/bigGlobus.png'
import Media from '../Media/Media'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
const App = () => {
    return (
        <div  className={classes.Wrapper}>
            <Header/>
            <div className={classes.GlobusContainer}>
            <img src={Globus} alt="globus images"/>
               <SliderContent/>
               <Slide/>
            </div>
            <Media/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App