import React from "react";
import classes from "./contact.module.scss";

function Contact() {
  return (
    <div className={classes.Contact}>
      <div className={`container`}>
        <div className={classes.InnerContainer}>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed tempor
          </div>
          <button className={`btn btn-outline-primary`}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
