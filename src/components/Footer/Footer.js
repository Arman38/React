import React from 'react'
import classes from './footer.module.scss'

function Footer() {
    return (
       <footer className={classes.Footer}>
           <div className={`container ${classes.InnerFooter}`}>
                <div className = {classes.Location}>
                    <h4>Where to find us</h4>
                    <div className={classes.IconContainer}>
                        <i className="fa fa-map-marker" aria-hidden="true"/>
                        <div>Adress</div>
                    </div>
                    <div className={classes.IconContainer}>
                        <i className="fa fa-phone" aria-hidden="true"/>
                        <div>Phone</div> 
                    </div>
                    <div className={classes.IconContainer}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        <div>Email</div> 
                    </div>
                </div>
              
                <div className = {classes.Location}>
                    <h4>Services</h4>
                    <div style={{marginTop:"20px"}}>
                        Web Development
                    </div>
                    <div className={classes.Service}>
                        Mobile App
                    </div>
                    <div className={classes.Service}>
                        Ui/UX Design
                    </div>
                    <div className={classes.Service}>
                       Graphic Design
                    </div>
                    <div className={classes.Service}>
                        Courses
                    </div>
                </div>
                <div className = {classes.Location}>
                    <h4>Legal</h4>
                    <div style={{marginTop:"20px"}}>
                        Terms and Conditions
                    </div>
                    <div className={classes.Service}>
                        Privacy Policy
                    </div>
                </div>
                <div className={classes.Follow}>
                   <div>
                    <div>Follow Us</div>
                        <i className="fa fa-arrow-right" aria-hidden="true"/>
                        <i className="fa fa-instagram" aria-hidden="true"/>
                        <i className="fa fa-facebook" aria-hidden="true"/>
                    </div>
                </div>
                
           </div>
       </footer> 
    )
}

export default Footer
