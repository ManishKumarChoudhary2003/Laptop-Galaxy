import { Fragment } from "react";
import classes from "./Conditions.module.css";
import FooterCard from "../../../UI/FooterCard";

const Conditions = () => {
  return (
    <Fragment>
      <div className={classes.conditions}>
        <h1>TERMS AND CONDITIONS</h1>
      </div>
      <FooterCard>
        <div>
          <h1>Terms and Conditions</h1>
          <p>
            By using the Laptop Galaxy Service, you agree to accept and adhere
            to the following terms and conditions as well as our Privacy Policy,
            accessible on the Laptop Galaxy website ("Terms"). Laptop Galaxy
            reserves the right to revise these Terms periodically, and any
            modifications shall take immediate effect. Your continued use of the
            Laptop Galaxy Service constitutes your acceptance of these updated
            Terms. For detailed terms, please refer to our website.
          </p>
          <hr />
        </div>
        <div>
          <h1>Using Laptop Galaxy</h1>
          <p>
            Laptop Galaxy is a platform designed to help users explore and
            discover laptops. We provide information and links to reputable
            retailers for laptop purchases. Laptop Galaxy does not sell laptops
            directly.
          </p>
          <p>
            Users must take reasonable care when providing their details to
            Laptop Galaxy and ensure that the provided information is accurate
            and complete at the time of laptop exploration.
          </p>
          <p>
            Users warrant that the credit or debit card details they provide for
            purchases are legitimate and belong to them.
          </p>
          <p>
            Laptop Galaxy is responsible for maintaining quality standards and
            addressing any quality-related issues or concerns directly with the
            user, such as labeling of laptops as veg or non-veg.
          </p>
          <p>
            Users should be aware that certain laptops may have age restrictions
            or suitability requirements. It is the user's responsibility to
            verify if a laptop is suitable for the intended recipient.
          </p>
          <hr />
        </div>
        <div>
          <h1>Prices and Payments</h1>
          <p>
            Prices listed on the Laptop Galaxy website for laptops are accurate
            at the time of publication and sourced from participating retailers.
            While Laptop Galaxy strives to keep them up-to-date, the final price
            charged may vary based on the latest menu and prices from retailers.
          </p>
          <p>
            Laptop Galaxy reserves the right to modify the available laptop
            listings and remove options from the menu if necessary.
          </p>
          <p>
            In case of a price change, Laptop Galaxy and its employees will not
            be liable for any discrepancies.
          </p>
          <p>
            The total price for laptops and related costs, including charges,
            taxes, and fees, will be displayed on the Laptop Galaxy website
            during the ordering process. Full payment is required for all items
            specified in the order.
          </p>
          <p>
            If online payment is chosen, the payment process is secure, and
            credit/debit card details are encrypted to protect against
            unauthorized access.
          </p>
          <hr />
        </div>
        <div>
          <h1>Refund Policy</h1>
          <p>
            Requests for refunds typically take 7-10 business days to reflect in
            the customer's account, depending on the bank/wallet used for
            payment.
          </p>
          <hr />
        </div>
        <div>
          <h1>Ownership of Intellectual Property</h1>
          <p>
            All intellectual property rights related to Laptop Galaxy, including
            but not limited to copyright, logos, names, trademarks, service
            marks, design, text, and more, are the exclusive property of Galaxy
            TechWorks.
          </p>
          <p>
            Any unauthorized reproduction, transmission, publication,
            performance, alteration, or use of Laptop Galaxy's intellectual
            property is strictly prohibited.
          </p>
          <hr />
        </div>
        <p>
          By using the Laptop Galaxy Service, you acknowledge and agree to these
          Terms and Conditions. If you have any questions or concerns, please
          contact us at cmanishkumar193@gmail.com.
        </p>
      </FooterCard>
    </Fragment>
  );
};

export default Conditions;
