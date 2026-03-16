import React from "react";

const Services = () => {
  return (
    <div className="container  mt-5 mb-5">
      {/* Page Heading */}
      <div className="text-center mb-5 ">
        <h2>Our Moving Services</h2>
        <p className="text-muted">
          We provide reliable and professional transportation services to make
          your moving experience safe and hassle-free.
        </p>
      </div>

      <div className="row g-4 ">
        {/* House Shifting */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center p-3 bg-primary text-white">
            <img
              src="https://cdn-icons-png.flaticon.com/512/619/619034.png"
              alt="house shifting"
              style={{ width: "80px", margin: "auto" }}
            />
            <div className="card-body">
              <h4 className="mt-3">House Shifting</h4>
              <p className="text-light">
                Safe and efficient relocation of household goods including
                packing, loading, transportation, unloading and unpacking.
              </p>
              <ul className="list-unstyled fs-5">
                <li>1 BHK / 2 BHK / 3 BHK Moving</li>
                <li>Villa Relocation</li>
                <li>Packing & Unpacking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Office Relocation */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center p-3 bg-primary text-white">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
              alt="office relocation"
              style={{
                width: "80px",
                margin: "auto",
              }}
            />
            <div className="card-body">
              <h4 className="mt-3">Office Relocation</h4>
              <p className="text-light ">
                Professional office moving services designed for businesses
                relocating furniture, equipment, and documents safely.
              </p>
              <ul className="list-unstyled fs-5">
                <li>Office Furniture Transport</li>
                <li>Computer & Equipment Handling</li>
                <li>Fast Business Relocation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vehicle Relocation */}
        <div className="col-md-4">
          <div className="card shadow-sm h-100 text-center p-3 bg-primary text-white">
            <i className="bi bi-truck fs-1 mb-3"></i>
            <div className="card-body">
              <h4 className="mt-3">Vehicle Relocation</h4>
              <p className="text-light">
                We transport cars and bikes safely to your destination using
                secure vehicle carriers and trained staff.
              </p>
              <ul className="list-unstyled fs-5">
                <li>Car Transportation</li>
                <li>Bike Transportation</li>
                <li>Safe Vehicle Handling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-5 text-center">
        <h3 className="mb-4">Why Choose Our Services?</h3>

        <div className="row">
          <div className="col-md-4">
            <h5>Reliable Transport</h5>
            <p className="text-muted">
              Professional movers ensuring safe and secure delivery of goods.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Affordable Pricing</h5>
            <p className="text-muted">
              Transparent pricing with no hidden charges.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Experienced Team</h5>
            <p className="text-muted">
              Skilled staff trained in packing, loading, and transportation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
