import { Fragment } from "react";
import classes from "./Privacy.module.css";
import FooterCard from "../../../UI/FooterCard";

const Privacy = () => {
  return (
    <Fragment>
      <div className={classes.privacy}>
        <h1>PRIVACY POLICY</h1>
      </div>
      <FooterCard>
        <div>
          <h1>Privacy Policy</h1>
          <p>
            Welcome to Laptop Galaxy, owned by Galaxy TechWorks. At Laptop
            Galaxy, we understand the importance of privacy. This Privacy Policy
            is designed to inform you about our practices concerning the
            collection, use, and disclosure of information you may provide
            through this website. We encourage you to carefully read this entire
            Privacy Policy before using or submitting any information to this
            site.
          </p>
          <hr />
        </div>
        <div>
          <h1>Consent</h1>
          <p>
            By using this site, you agree to the terms outlined in this Privacy
            Policy. When you submit information through this site, you consent
            to the collection, use, and disclosure of the information as
            described in this Privacy Policy.
          </p>
          <hr />
        </div>
        <div>
          <h1>Use and Disclosure</h1>
          <p>
            Information collected through this site may be used to enhance our
            website's content, tailor it to your preferences, communicate
            information to you (if requested), and for other specified purposes.
          </p>
          <hr />
        </div>
        <div>
          <h1>Access, Accuracy, and Security</h1>
          <p>
            Laptop Galaxy will take reasonable steps to ensure that collected
            personal information is accurate, complete, and up-to-date. You can
            access, correct, or request deletion of your personal information at
            any time.
          </p>
          <p>
            Laptop Galaxy will also take reasonable steps to protect personal
            information from misuse, loss, unauthorized access, modification, or
            disclosure.
          </p>
          <hr />
        </div>
        <div>
          <h1>Sensitive Information</h1>
          <p>
            Laptop Galaxy will not collect, use, or disclose sensitive
            information without your specific consent.
          </p>
          <h3>Click Stream Data</h3>
          <p>
            Our server collects anonymous click-stream data, including browser
            type, system information, referral sources, visit dates and times,
            and server IP addresses. This information is used for statistical
            purposes to improve website usage and navigation. Cookies
          </p>
          <p>
            Laptop Galaxy may use cookies to enhance your browsing experience.
            Cookies help us recognize you when you return to our site and
            remember your preferences. You can manage your cookie settings in
            your browser. Changes
          </p>
        </div>
      </FooterCard>
    </Fragment>
  );
};

export default Privacy;
