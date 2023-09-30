import { Fragment } from "react";
import classes from "./Contact.module.css";
import FooterCard from "../../../UI/FooterCard";

const Contact = () => {
  return (
    <Fragment>
      <div className={classes.contact}>
        <h1>CONTACT</h1>
      </div>
      <FooterCard>
        <div>
          <h1>For Any Query, Please Mail :- </h1>
          <p> cmanishkumar193@gmail.com</p>
          <hr />
        </div>
        <div>
          <h1>Another Mail :- </h1>
          <p> manishchoudhary9650@gmail.com</p>
        </div>
      </FooterCard>
    </Fragment>
  );
};

export default Contact;
