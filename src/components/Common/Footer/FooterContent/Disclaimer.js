import { Fragment } from "react";
import classes from "./Disclaimer.module.css";
import FooterCard from "../../../UI/FooterCard";

const Disclaimer = () => {
  return (
    <Fragment>
      <div className={classes.disclaimer}>
        <h1>DISCLAIMER</h1>
      </div>
      <FooterCard className={classes.style}>
        <div>
          <h1>Copyrights:</h1>
          <hr />
          <p>
            Laptop Galaxy grants you permission to view this website and to
            print individual pages from this website for your own personal,
            non-commercial use, provided that you agree to and accept without
            modification the notices, terms, and conditions set forth in this
            agreement. You may not modify, copy (except as set forth in the
            preceding sentence), distribute, transmit, display, perform,
            reproduce, publish, license, create derivative works from, transfer,
            or sell any information, material, software, products, or services
            from this website.
          </p>
          <p>
            Your use of this website constitutes your agreement and acceptance
            without modification of the notices, terms, and conditions set forth
            herein. In addition, as a condition of your use of this website, you
            represent and warrant to Laptop Galaxy that you will not use this
            website for any purpose that is unlawful, immoral, or prohibited by
            these terms, conditions, and notices. If you do not agree and accept
            without modification the notices, terms, and conditions set forth
            herein, do not use this website. Other than this agreement, Laptop
            Galaxy will not enter into any agreement with you or obligation to
            you through this website, and no attempt to create such an agreement
            or obligation will be effective.
          </p>
        </div>

        <div>
          <h1>Franchise Information::</h1>
          <hr />
          <p>
            Galaxy TechWorks Limited is the Master Franchisee of Laptop Galaxy
            in India, Bangladesh, Sri Lanka, and Nepal with sole and exclusive
            rights to own and operate Laptop Galaxy showrooms in these
            territories. For any franchise-related queries, kindly email us
            directly at cmanishkumar193@gmail.com.
          </p>
          <p>
            We have come across a few instances of fraudsters posing as Galaxy
            TechWorks and asking for payment from gullible investors against the
            promise of a Laptop Galaxy franchise. We, therefore, caution and
            urge all interested parties to be careful and vigilant and interact
            only with the email ID mentioned above. Anyone dealing with such
            fraudsters shall be doing so at their own peril, risk, and
            consequences.
          </p>
          <p>
            Neither Galaxy TechWorks nor its Directors/Officers shall be
            responsible for any loss, harm, damage, or fraud that occurs or may
            occur or arise to any person who decides to access such fake
            websites or deal with them.
          </p>
        </div>

        <div>
          <h1>Beware of Phishing::</h1>
          <hr />
          <p>
            This is for the information and knowledge of the General Public that
            it has been brought to our notice that there have been instances of
            frauds being committed by various unscrupulous elements in order to
            extort money from unsuspecting individuals through fake
            communications asking to share user confidential information. The
            Public at large is cautioned not to share these details with anyone
            over the phone or email as this could lead to fraud. Laptop Galaxy
            never asks for any confidential information. It is further notified
            that no Director, Shareholder, Officer, Employee, Partner, or any
            other Associated Staff of Galaxy TechWorks shall be accountable for
            any loss, harm, damage, or fraud that occurs or may occur or arise
            due to sharing of their aforesaid user confidential information over
            fake communications or any other medium. The individual/entity shall
            be solely responsible for the consequences of any such act and
            decision.
          </p>
        </div>
      </FooterCard>
    </Fragment>
  );
};

export default Disclaimer;
