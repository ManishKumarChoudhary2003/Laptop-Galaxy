import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg-dark text-light py-5 mt-5">
        <div className="row">
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">COMPANY</h5>
            <ul className="list-unstyled mb-5">
              <li className=" mb-2">
                <Link to="aboutus" className="text-light text-decoration-none">
                  ABOUT US
                </Link>
              </li>
              <li className=" mb-2">
                <Link to="faq" className="text-light text-decoration-none">
                  FAQ
                </Link>
              </li>
              <li className=" mb-2">
                <a
                  href="mailto:cmanishkumar193@gmail.com"
                  className="text-light text-decoration-none"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">LEGAL</h5>
            <ul className="list-unstyled">
              <li className=" mb-2">
                <Link
                  to="conditions"
                  className="text-light text-decoration-none"
                >
                  TERMS & CONDITIONS
                </Link>
              </li>
              <li className=" mb-2">
                <Link to="privacy" className="text-light text-decoration-none">
                  PRIVACY
                </Link>
              </li>
              <li className=" mb-2">
                <Link
                  to="disclaimer"
                  className="text-light text-decoration-none"
                >
                  DISCLAIMER
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-4">SOCIAL MEDIA</h5>
            <ul className="list-unstyled">
              <li className=" mb-2">
                <a
                  href="https://www.instagram.com/manish_.96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  INSTAGRAM
                </a>
              </li>
              <li className=" mb-2">
                <a
                  href="https://www.linkedin.com/in/manishkumarchoudhary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  LINKEDIN
                </a>
              </li>
              <li className=" mb-2">
                <a
                  href="https://github.com/Manishkumarchoudhary2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  GITHUB
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light py-3 text-center">
        <p className="m-0">
          COPYRIGHT © 2023 TAP LAPTOPGALAXY LTD. | ALL RIGHTS RESERVED
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;

// import React from "react";
// import classes from "./Footer.module.css";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <React.Fragment>
//       <div className={classes.main_container}>
//         <div className={classes.items}>
//           <div>
//             <div className={classes.company_legal_social}>COMPANY</div>
//             <div className={classes.company_legal_social_items}>
//               <Link to="aboutus">ABOUT US</Link>
//             </div>
//             <div className={classes.company_legal_social_items}>
//               <Link to="faq">FAQ</Link>
//             </div>
//             <div className={classes.company_legal_social_items}>
//               <a href="mailto:cmanishkumar193@gmail.com">CONTACT US</a>
//             </div>
//           </div>
//         </div>

//         <div className={classes.items}>
//           <div>
//             <div className={classes.company_legal_social}>LEGAL</div>
//             <div className={classes.company_legal_social_items}>
//               <Link to="conditions">TERMS & CONDITIONS</Link>
//             </div>
//             <div className={classes.company_legal_social_items}>
//               <Link to="privacy">PRIVACY</Link>
//             </div>
//             <div className={classes.company_legal_social_items}>
//               <Link to="disclaimer">DISCLAIMER</Link>
//             </div>
//           </div>
//         </div>

//         <div className={classes.items}>
//           <div>
//             <div className={classes.company_legal_social}>SOCIAL MEDIA</div>
//             <div className={classes.company_legal_social_items}>
//               <a href="https://www.instagram.com/manish_.96/" target="_blank">
//                 INSTAGRAM
//               </a>
//             </div>
//             <div className={classes.company_legal_social_items}>
//               <a
//                 href="https://www.linkedin.com/in/manishkumarchoudhary/"
//                 target="_blank"
//               >
//                 LINKEDLN
//               </a>
//             </div>
//             <div className={classes.company_legal_social_items}>
//               <a
//                 href="https://github.com/Manishkumarchoudhary2003"
//                 target="_blank"
//               >
//                 GITHUB
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={classes.copy}>
//         COPYRIGHT © 2023 TAP LAPTOPGALAXY LTD. | ALL RIGHTS RESERVED
//       </div>
//     </React.Fragment>
//   );
// };

// export default Footer;
