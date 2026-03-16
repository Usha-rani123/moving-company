import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Help Center</h2>

      <p className="text-center">
        Need assistance? We're happy to help. Reach us through the appropriate
        channels below.
      </p>

      <div className="mt-4">
        {/* Customer Support */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5>CUSTOMER SUPPORT</h5>
            <p>
              For support with your bookings and other queries, email us at{" "}
              <a href="mailto:help@movingcompany.com">help@movingcompany.com</a>{" "}
              or call us at <a href="tel:02244104410">022 4410 4410</a>
            </p>
          </div>
        </div>

        {/* Driver Partnership */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5>DRIVE WITH US</h5>
            <p>
              Are you a truck owner? Increase your earnings by partnering with
              us. Contact us at <a href="tel:97144242323">97144242323</a>
            </p>
          </div>
        </div>

        {/* Packers and Movers */}
        <div className="card mb-3 shadow-sm">
          <div className="card-body">
            <h5>PACKERS AND MOVERS</h5>
            <p>
              For house shifting queries, email us at{" "}
              <a href="mailto:packermover@movingcompany.com">
                packermover@movingcompany.com
              </a>{" "}
              or call us at <a href="tel:02244104444">022 4410 4444</a> or{" "}
              <a href="tel:02262684444">022 6268 4444</a>
            </p>
          </div>
        </div>

        {/* Enterprise Services */}
        <div className="card shadow-sm">
          <div className="card-body">
            <h5>ENTERPRISE SERVICES</h5>
            <p>
              If your business requires goods transportation services, email us
              at{" "}
              <a href="mailto:enterprise@movingcompany.com">
                enterprise@movingcompany.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
