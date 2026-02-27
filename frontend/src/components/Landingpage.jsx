import "./Landingpage.css";
const Landingpage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow-sm ">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
              alt="logo"
              width="36"
              height="36"
            />
            <span className="fw-semibold fs-5">Moving Company</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link-custom active " href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link-custom" href="#">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link-custom" href="#">
                  Prices
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link-custom" href="#">
                  Contacts
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link-custom" href="#">
                  Quick Quote
                </a>
              </li>

              <li className="nav-item ms-lg-3">
                <a className="btn btn-outline-light px-4" href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Landingpage;
