import { Fragment } from "react";
import FooterCard from "../../../UI/FooterCard";
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <Fragment>
      <div className={classes.about}>
        <h1>ABOUT</h1>
      </div>
      <FooterCard>
        <div>
          <h1>Laptop Galaxy: Empowering Tech Enthusiasts</h1>
          <hr />
          <p>
            What's better than exploring the galaxy of laptops and tech gadgets,
            you ask?
          </p>
          <p>
            Exploring that galaxy from the comfort of your home, surrounded by
            the tech enthusiasts you love, we say.
          </p>
          <p>
            At Laptop Galaxy, we understand that your laptop is more than just a
            device; it's your gateway to innovation, knowledge, and connection.
            We're dedicated to delivering happiness through a vast collection of
            laptops from renowned brands, and we're here to redefine your tech
            experience.
          </p>
        </div>

        <div>
          <h1>What We Offer - More Choice. More Fun.</h1>
          <hr />
          <p>
            No matter what your tech needs, Laptop Galaxy is here to make your
            journey enjoyable. Especially when it comes to choosing the perfect
            laptop – from sleek ultrabooks, powerful workstations, versatile
            2-in-1s, gaming beasts, lightweight Chromebooks, and more – the
            options are nearly limitless. We believe in putting the power of
            choice in your hands.
          </p>
          <p>
            Laptop Galaxy empowers you to explore a vast galaxy of laptops
            tailored to your specific requirements. From performance-driven
            machines for professionals to sleek and stylish laptops for
            students, we offer a universe of possibilities to cater to your
            unique tech cravings.
          </p>
          <p>
            Whether you're a tech enthusiast, a creative professional, or
            someone in need of reliable computing power, Laptop Galaxy is your
            destination for discovering the ideal laptop that suits your
            lifestyle. Our diverse selection ensures that you'll find the laptop
            of your dreams.
          </p>
        </div>

        <div>
          <h1>The Promise Of Fast Delivery</h1>
          <hr />
          <p>
            The icing on the cake, or more aptly, the speedy delivery of your
            tech is what sets Laptop Galaxy apart. We're committed to getting
            your chosen laptop into your hands quickly. Don't believe us? Time
            it if you please.
          </p>
          <p>
            With our widespread network and efficient delivery services, you can
            have your desired tech device delivered to your doorstep in record
            time. With multiple delivery hubs across the country, you can
            receive your tech even while traveling or in the midst of your busy
            day.
          </p>
          <p>
            So, there's no need to search for tech stores near you. Order from
            Laptop Galaxy, and you can expect your tech to arrive promptly,
            whether you're at home, at work, or on the move.
          </p>
          <p>
            Experience the speed of Laptop Galaxy's delivery service and get
            your hands on the latest tech faster than ever.
          </p>
        </div>

        <div>
          <h1>Franchise Information</h1>
          <hr />
          <p>
            Laptop Galaxy is a project of Galaxy TechWorks, dedicated to
            bringing the galaxy of laptops and technology closer to enthusiasts
            worldwide. We're excited to offer franchise opportunities to
            individuals who share our passion for tech and want to be a part of
            our journey.
          </p>
          <p>
            Galaxy TechWorks is the sole owner and operator of Laptop Galaxy
            franchises, with exclusive rights to manage and expand the brand
            globally. For any franchise-related inquiries or information, please
            reach out to us directly at
            <a href="/"> cmanishkumar193@gmail.com</a>  
          </p>
          <p>
            Galaxy TechWorks and its team are committed to maintaining the
            highest standards of security and integrity. We take fraudulent
            activities seriously and disclaim any responsibility for losses,
            harm, or damages resulting from interactions with unauthorized
            individuals or fake websites.
          </p>
          <p>
            Your trust and security are paramount to us, and we're dedicated to
            ensuring a safe and legitimate franchise experience for all
            interested parties.
          </p>
        </div>
      </FooterCard>
    </Fragment>
  );
};
export default AboutUs;
