import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes.main_container}>
        <div className={classes.items}>
          <div>
            <div className={classes.company_legal_social}>COMPANY</div>
            <div className={classes.company_legal_social_items}>
              <Link to="aboutus">ABOUT US</Link>
            </div>
            <div className={classes.company_legal_social_items}>
              <Link to="faq">FAQ</Link>
            </div>
            <div className={classes.company_legal_social_items}>
              <a href="mailto:cmanishkumar193@gmail.com">CONTACT US</a>
            </div>
          </div>
        </div>

        <div className={classes.items}>
          <div>
            <div className={classes.company_legal_social}>LEGAL</div>
            <div className={classes.company_legal_social_items}>
              <Link to="conditions">TERMS & CONDITIONS</Link>
            </div>
            <div className={classes.company_legal_social_items}>
              <Link to="privacy">PRIVACY</Link>
            </div>
            <div className={classes.company_legal_social_items}>
              <Link to="disclaimer">DISCLAIMER</Link>
            </div>
          </div>
        </div>

        <div className={classes.items}>
          <div>
            <div className={classes.company_legal_social}>SOCIAL MEDIA</div>
            <div className={classes.company_legal_social_items}>
              <a href="https://www.instagram.com/manish_.96/" target="_blank">
                INSTAGRAM
              </a>
            </div>
            <div className={classes.company_legal_social_items}>
              <a
                href="https://www.linkedin.com/in/manishkumarchoudhary/"
                target="_blank"
              >
                LINKEDLN
              </a>
            </div>
            <div className={classes.company_legal_social_items}>
              <a
                href="https://github.com/Manishkumarchoudhary2003"
                target="_blank"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.copy}>
        COPYRIGHT © 2023 TAP LAPTOPGALAXY LTD. | ALL RIGHTS RESERVED
      </div>
    </React.Fragment>
  );
};

export default Footer;
