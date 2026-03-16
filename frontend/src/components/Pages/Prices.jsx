import React from "react";

const Prices = () => {
  return (
    <div className="container mt-3">
      <h2 className="text-center mb-4">Our Pricing</h2>
      <p className="text-center">
        Below are the estimated prices for different moving services.
      </p>

      <div className="row mt-4">
        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4>1 BHK Shifting</h4>
              <p className="mt-3">Local shifting within city</p>
              <h3 className="text-primary">₹3,000 - ₹5,000</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4>2 BHK Shifting</h4>
              <p className="mt-3">Local shifting within city</p>
              <h3 className="text-primary">₹5,000 - ₹8,000</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4>3 BHK Shifting</h4>
              <p className="mt-3">Local shifting within city</p>
              <h3 className="text-primary">₹8,000 - ₹10,000</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h4>Villa Shifting</h4>
              <p className="mt-3">Large house relocation</p>
              <h3 className="text-primary">₹10,000 - ₹15,000</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Other Services */}
      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card shadow-sm text-center p-4">
            <h4>Office Relocation</h4>
            <p>Office shifting services</p>
            <h3 className="text-primary">Starting from ₹3000</h3>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm text-center p-4">
            <h4>Vehicle Relocation</h4>
            <p>Car & Bike transport</p>
            <h3 className="text-primary">Starting from ₹2000</h3>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p>
          Prices may vary depending on distance, goods quantity, and additional
          services such as packing and storage.
        </p>
      </div>
    </div>
  );
};

export default Prices;
