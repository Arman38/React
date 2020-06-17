import React from 'react'
import classes from './slide.module.scss'
import Seo1 from '../../assets/logo/seo1.png'
import Seo2 from '../../assets/logo/seo2.png'
import Seo3 from '../../assets/logo/seo3.png'
import Seo4 from '../../assets/logo/seo4.png'
import Seo5 from '../../assets/logo/seo5.png'
import Seo6 from '../../assets/logo/seo6.png'

function Slide() {
    const seoImages = [
        {src:Seo1,id:1},
        {src:Seo2,id:2},
        {src:Seo3,id:3},
        {src:Seo4,id:4},
        {src:Seo5,id:5},
        {src:Seo6,id:6}
    ] 
    return (
        <div className={classes.SlideContent}>
            <div className={`${classes.Slide} container`}>
                <div className={classes.Left}>
                    <h2>Our Services</h2> 
                    <div className={classes.Description}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                    </div>
                    <button className={`${classes.Button} btn btn-outline-primary`}>
                        Read ME
                    </button>
                </div>
                <div className={classes.Right}>
                    {seoImages.map(({src,id})=> {
                        return(
                            <div className={classes[`Seo${id}`]} key={src+id}>
                                 <img src={src} alt={`Seo${id}`}/>
                            </div>
                  )})}
                </div>
            </div>
        </div>
    )
}

export default Slide
