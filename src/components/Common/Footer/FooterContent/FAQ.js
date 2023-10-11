import { Fragment } from "react";
import classes from "./FAQ.module.css";
import FooterCard from "../../../UI/FooterCard";

const FAQ = () => {
  return (
    <Fragment>
      <div className={classes.faq}>
        <h1>FAQ</h1>
      </div>
      <FooterCard className={classes.style}>
        <div>
          <h3>1. What is Laptop Galaxy?</h3>
          <p>
            Laptop Galaxy is a digital platform dedicated to showcasing a wide
            range of laptops from various brands. It helps you explore, compare,
            and find the perfect laptop for your needs.
          </p>
          <hr />
        </div>
        <div>
          <h3>2. How can I browse laptops on Laptop Galaxy?</h3>
          <p>
            You can easily browse laptops by visiting our website and navigating
            through our user-friendly interface. Use filters, sorting options,
            and search features to find your desired laptop.
          </p>
          <hr />
        </div>
        <div>
          <h3>3. Do you offer laptops from all brands?</h3>
          <p>
            Yes, Laptop Galaxy offers laptops from a diverse range of renowned
            brands, ensuring you have a wide selection to choose from.
          </p>
          <hr />
        </div>
        <div>
          <h3>4. How can I contact Laptop Galaxy customer support?</h3>
          <p>
            You can reach our customer support team by emailing
            cmanishkumar193@gmail.com We're here to assist you with any
            questions or concerns.
          </p>
          <hr />
        </div>
        <div>
          <h3>5. Is my personal information safe on Laptop Galaxy?</h3>
          <p>
            We take your privacy seriously. Your personal information is secure,
            and we follow strict data protection measures. You can review our
            privacy policy for more details.
          </p>
          <hr />
        </div>
        <div>
          <h3>
            6. Are there any discounts or promotions available on Laptop Galaxy?
          </h3>
          <p>
            We regularly update our platform with information on discounts and
            promotions from various retailers. Check our listings for the latest
            deals.
          </p>
          <hr />
        </div>
        <div>
          <h3>
            7. Can I track the delivery of a laptop purchased through Laptop
            Galaxy?
          </h3>
          <p>
            Tracking information for your laptop purchase can be obtained from
            the retailer you made the purchase from. They will provide you with
            shipping details.
          </p>
          <hr />
        </div>
        <div>
          <h3>
            8. Can I request recommendations for laptops based on my specific
            needs?
          </h3>
          <p>
            Yes, you can contact our customer support team, and we'd be happy to
            provide personalized laptop recommendations.
          </p>
          <hr />
        </div>
        <div>
          <h3>9. Can I sell my old laptop on Laptop Galaxy?</h3>
          <p>
            Laptop Galaxy focuses on showcasing new laptops. However, you can
            explore other platforms for selling used laptops.
          </p>
          <hr />
        </div>
        <div>
          <h3>10. Is there a mobile app for Laptop Galaxy?</h3>
          <p>
            Currently, Laptop Galaxy is accessible through a web browser. We are
            exploring the possibility of a mobile app in the future.
          </p>
        </div>
      </FooterCard>
    </Fragment>
  );
};

export default FAQ;
