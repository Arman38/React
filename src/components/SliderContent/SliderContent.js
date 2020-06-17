import React from 'react'
import classes from './sliderContent.module.scss'
import Globus from '../../assets/images/globus.png'
function SliderContent() {
    return (
        <div className={classes.SliderContent}>
            <div className={`${classes.Slider} container`}>
                    <img src={Globus} className={classes.LittleGlobus} alt={'big globus imagess'} />
                    <h1>We help you turn your product into reality and reach your desired audience</h1>
                    <div className={classes.Description}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod temp labore et dolore magna aliquyam erat,
                        Z sed diam voluptua. At vero eos et accusam et justo duo dolores ea
                    </div>
                    <button className="btn btn-primary">Read more</button>
                    <section className={classes.Discover}>
                        <div>Discover</div>
                        <i className="fa fa-arrow-down" aria-hidden="true"></i>
                    </section>
            </div>
        </div>
    )
}

export default SliderContent
