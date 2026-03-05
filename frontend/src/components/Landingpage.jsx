import "./Landingpage.css";
import React from "react";
import { Link } from "react-router-dom";
import moving1 from "../assets/moving1.jpg";

const Landingpage = () => {
  return (
    <>
      <div>
        <div className="container-fluid hero-section ">
          <div className="row align-items-center">
            <div className="col-md-6 hero-text">
              <h1>Moving Company</h1>
              <h1>India’s Trusted Packers & Movers Service</h1>
              <p>
                <strong>Moving Company's</strong> Packers and Movers Service is
                one of India’s most reliable and professional relocation
                companies offering home shifting, office relocation, vehicle
                transport and door-to-door moving solutions.
              </p>
            </div>
            <div className="col-md-6 hero-image">
              <img src={moving1} alt="Moving Service" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="move-section text-white text-center">
          <div className="container">
            <h2 className="mt-4">Select where to move ?</h2>

            <div className="row">
              <div className="col-md-4 mb-3">
                <i className="bi bi-truck fs-1 mb-3"></i>
                <h6>Within city</h6>
                <p className="small">
                  We make exchanging and returning simple.
                </p>
              </div>

              <div className="col-md-4 mb-3">
                <i className="bi bi-building fs-1 mb-3"></i>
                <h6>Outside city</h6>
                <p className="small">
                  All orders over $50 delivered within outside.
                </p>
              </div>

              <div className="col-md-4 mb-3">
                <i className="bi bi-globe fs-1 mb-3"></i>
                <h6>Internationally</h6>
                <p className="small">International delivery available.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Packers and MoversProcess  */}

        <div className="process-section py-5">
          <div className="container">
            {/* Main Heading */}
            <h2 className="text-center mb-4">
              Moving Company Packers and Movers Shifting Process
            </h2>

            {/* Sub Heading */}

            <ul className="process-list">
              <li>
                <strong>Packing Process – </strong>
                Contact our Packers and Movers to get a free estimate of your
                relocation process from our field officer. Feel free to ask any
                questions related to the process. Or simply fill out an online
                enquiry form to get an estimate.
              </li>

              <li>
                <strong>Chapp Van – </strong>
                With our best-in-class Movers Chapp Van, you can be sure of safe
                and timely delivery of your valuables like 4-wheelers,
                2-wheelers, domestic articles, precious artefacts, pets, and
                plants.
              </li>

              <li>
                <strong>Double Home Carrier - </strong>
                With our most innovative creation - Double Door Home Carrier, we
                can move two homes in one vehicle, ensuring quick delivery and
                reducing moving costs.
              </li>

              <li>
                <strong>Tracking -</strong>
                With our real-time online tracking, you can keep a tab on your
                consignment.
              </li>

              <li>
                <strong>Delivery - </strong>
                Our dedicated delivery experts will unload and unpack the
                deliverables. You will be asked to fill a feedback form to
                ensure an even better customer experience going forward.
              </li>
            </ul>
          </div>
        </div>
        {/* Testimonials */}
        <div className="testimonial-section py-5">
          <div className="container">
            <h2 className="text-center mb-5">
              Some Words from Our Happy Customers!
            </h2>

            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0 p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="initial-circle">V</div>
                    <div className="ms-3">
                      <h6 className="mb-0">Vikas</h6>
                      <small className="text-muted">Packers and Movers</small>
                    </div>
                  </div>
                  <div className="mb-2">
                    ⭐ 5.0 Rating
                    <br />
                    <small className="text-muted">Bangalore</small>
                  </div>
                  <p className="small">
                    "Porter's team was punctual, caring, and highly
                    professional. Their self-sufficiency and humility impressed
                    me, along with great customer support. Thank you!"
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0 p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="initial-circle">S</div>
                    <div className="ms-3">
                      <h6 className="mb-0">Syamantak Mitra</h6>
                      <small className="text-muted">Packers and Movers</small>
                    </div>
                  </div>
                  <div className="mb-2">
                    ⭐ 4.0 Rating
                    <br />
                    <small className="text-muted">Hyderabad</small>
                  </div>
                  <p className="small">
                    "Smooth experience with Porter's packers and movers! The
                    team was fantastic, handling every detail. Highly recommend
                    their services!"
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0 p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="initial-circle">P</div>
                    <div className="ms-3">
                      <h6 className="mb-0">Praveen Ketoli</h6>
                      <small className="text-muted">Packers and Movers</small>
                    </div>
                  </div>
                  <div className="mb-2">
                    ⭐ 5.0 Rating
                    <br />
                    <small className="text-muted">Pune</small>
                  </div>
                  <p className="small">
                    "Grateful for the punctuality and enthusiasm of the team.
                    They handled items gently, took great care, and placed
                    everything perfectly."
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm border-0 p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div className="initial-circle">V</div>
                    <div className="ms-3">
                      <h6 className="mb-0">Virat Maun</h6>
                      <small className="text-muted">Packers and Movers</small>
                    </div>
                  </div>
                  <div className="mb-2">
                    ⭐ 5.0 Rating
                    <br />
                    <small className="text-muted">Delhi</small>
                  </div>
                  <p className="small">
                    "Top-notch service! Packing, dismantling, handling,
                    transportation, and re-assembling were excellent. Shifting
                    homes felt incredibly easy."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Footer */}

        <footer className="footer-section">
          <div className="container py-3">
            <div className="row">
              {/* Logo + Social */}
              <div className="col-md-3 mb-3">
                <h2 className="footer-logo">Moving Company</h2>
                {/* <hr className="footer-line" /> */}
                {/* <p className="mt-3">Follow us on</p> */}
                <div className="social-icons">
                  {/* <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-youtube"></i> */}
                </div>
              </div>

              {/* Company */}
              <div className="col-md-3 mb-2 mt-2">
                <h5>Company</h5>
                <ul className="footer-links">
                  <li>About Us</li>
                  <li>Careers</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="col-md-3 mb-2 mt-2">
                <h5>Quick Links</h5>
                <ul className="footer-links">
                  <li>Packers & Movers</li>
                  <li>Two Wheelers</li>
                  <li>Trucks</li>
                </ul>
              </div>

              {/* Support */}
              <div className="col-md-3 mb-2 mt-2">
                <h5>Support</h5>
                <ul className="footer-links">
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div className=" text-white  p-2 text-center">
                <div className="container">
                  <p className="mb-0">
                    &copy; 2026 Moving Company, Inc. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landingpage;
