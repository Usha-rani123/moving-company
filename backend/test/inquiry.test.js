const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server"); // path to server.js

chai.use(chaiHttp);
const expect = chai.expect;

describe("Inquiry API", () => {
  describe("POST /inquiries", () => {
    it("should create a new inquiry", (done) => {
      chai
        .request(app)
        .post("/inquiries")
        .send({
          name: "Test User",
          email: "test123@gmail.com",
          mobile: "9191919191",
          service: "Relocation",
          fromLocation: "Vizag",
          toLocation: "Bangalore",
          houseType: "2BHK",
          moveDate: "2026-03-20",
          message: "Need moving service",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.have.property("message");
          expect(res.body.message).to.equal("Inquiry created successfully");
          expect(res.body).to.have.property("data");
          expect(res.body.data).to.have.property("_id");
          done();
        });
    });
  });
});
