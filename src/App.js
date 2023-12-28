import "./bootstrap.min.css";
import "./App.css";
import images from "./img/carousel-1.jpg";
import images2 from "./img/carousel-2.jpg";
import image3 from "./img/download__1_-removebg-preview.png";
import image4 from "./img/about.jpg";
import team2 from "./img/team-2.jpg";
import team3 from "./img/team-3.jpg";
import team4 from "./img/team-4.jpg";
import team5 from "./img/team-5.jpg";

function App() {
  return (
    <div className="App">
      <div>
        <meta charSet="utf-8" />
        <title>Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Free HTML Templates" name="keywords" />
        <meta content="Free HTML Templates" name="description" />
        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        {/* Icon Font Stylesheet */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Libraries Stylesheet */}
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />

        {/* Topbar Start */}
        <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <small className="py-2">
                  <i className="far fa-clock text-primary me-2" />
                  Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed{" "}
                </small>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div
                className="position-relative d-inline-flex align-items-center  text-white top-shape px-5"
                style={{ backgroundColor: "green" }}
              >
                <div className="me-3 pe-3 border-end py-2">
                  <p className="m-0">
                    <i className="fa fa-envelope-open me-2" />
                    info@example.com
                  </p>
                </div>
                <div className="py-2">
                  <p className="m-0">
                    <i className="fa fa-phone-alt me-2" />
                    +012 345 6789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
          <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0 " style={{ color: "green" }}>
              <img src={image3} style={{ width: "100px" }} alt="etc" />
              easyIME
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="!#" className="nav-item nav-link active">
                Home
              </a>
              <a href="!#" className="nav-item nav-link">
                About
              </a>
              <a href="!#" className="nav-item nav-link">
                Service
              </a>
              <div className="nav-item dropdown">
                <a
                  href="!#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  <a href="!#" className="dropdown-item">
                    Pricing Plan
                  </a>
                  <a href="!#" className="dropdown-item">
                    Our Dentist
                  </a>
                  <a href="!#" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="!#" className="dropdown-item">
                    Appointment
                  </a>
                </div>
              </div>
              <a href="!#" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <button
              type="button"
              className="btn text-dark"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fa fa-search" />
            </button>
            <a
              href="appointment.html"
              className="btn btn-primary py-2 px-4 ms-3"
              style={{ backgroundColor: "green" }}
            >
              Appointment
            </a>
          </div>
        </nav>
        {/* Navbar End */}
        {/* Full Screen Search Start */}
        <div className="modal fade" id="searchModal" tabIndex={-1}>
          <div className="modal-dialog modal-fullscreen">
            <div
              className="modal-content"
              style={{ background: "rgba(9, 30, 62, .7)" }}
            >
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn bg-white btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center">
                <div className="input-group" style={{ maxWidth: "600px" }}>
                  <input
                    type="text"
                    className="form-control bg-transparent border-primary p-3"
                    placeholder="Type search keyword"
                  />
                  <button className="btn btn-primary px-4">
                    <i className="bi bi-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Full Screen Search End */}
        {/* Carousel Start */}
        <div className="container-fluid p-0">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100" src={images} alt="team" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      Choosing easyIME for Immigration Lawyer
                    </h5>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                      My friends told me that{" "}
                      <b style={{ color: "green" }}>Green Card</b>
                      Medical
                    </h1>
                    <a
                      href="!#"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      style={{ backgroundColor: "green" }}
                    >
                      Appointment
                    </a>
                    <a
                      href="!#"
                      className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src={images2} alt="etc" />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      SETTING UP APPOINTMENTS NOW EASY FOR APPLICANTS!
                    </h5>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                      SETTING UP APPOINTMENTS NOW EASY FOR APPLICANTS!
                    </h1>
                    <a
                      href="!#"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Appointment
                    </a>
                    <a
                      href="!#"
                      className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* Carousel End */}
        {/* Banner Start */}
        <div className="container-fluid banner mb-5">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                <div
                  className=" d-flex flex-column p-5"
                  style={{ height: "300px", backgroundColor: "green" }}
                >
                  <h3 className="text-white mb-3">Opening Hours</h3>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0">Mon - Fri</h6>
                    <p className="mb-0"> 8:00am - 9:00pm</p>
                  </div>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0">Saturday</h6>
                    <p className="mb-0"> 8:00am - 7:00pm</p>
                  </div>
                  <div className="d-flex justify-content-between text-white mb-3">
                    <h6 className="text-white mb-0">Sunday</h6>
                    <p className="mb-0"> 8:00am - 5:00pm</p>
                  </div>
                  <a className="btn btn-light" href="!#">
                    Appointment
                  </a>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                <div
                  className="d-flex flex-column p-5"
                  style={{ height: "300px", backgroundColor: "#2f425c" }}
                >
                  <h3 className="text-white mb-3">Search A Doctors</h3>
                  <div
                    className="date mb-3"
                    id="date"
                    data-target-input="nearest"
                  >
                    <input
                      type="text"
                      className="form-control bg-light border-0 datetimepicker-input"
                      placeholder="Appointment Date"
                      data-target="#date"
                      data-toggle="datetimepicker"
                      style={{ height: "40px" }}
                    />
                  </div>
                  <select
                    className="form-select bg-light border-0 mb-3"
                    style={{ height: "40px" }}
                  >
                    <option selected>Select A Service</option>
                    <option value={1}>Service 1</option>
                    <option value={2}>Service 2</option>
                    <option value={3}>Service 3</option>
                  </select>
                  <a className="btn btn-light" href>
                    Search Doctor
                  </a>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                <div
                  className="bg-secondary d-flex flex-column p-5"
                  style={{ height: "300px", backgroundColor: "#ef6f07" }}
                >
                  <h3 className="text-white mb-3">Make Appointment</h3>
                  <p className="text-white">
                    Ipsum erat ipsum dolor clita rebum no rebum dolores labore,
                    ipsum magna at eos et eos amet.
                  </p>
                  <h2 className="text-white mb-0">+012 345 6789</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner Start */}
        {/* About Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title mb-4">
                  <h5
                    className="position-relative d-inline-block  text-uppercase"
                    style={{ color: "green" }}
                  >
                    About Us
                  </h5>
                  <h1 className="display-5 mb-0">Welcome to easyIME!</h1>
                </div>
                <h4 className="text-body fst-italic mb-4">
                  What We Do to Make Our Clients Happy easyIME is the
                  one-stop-solution for Immigrants looking to get in touch with
                  Immigration Professionals.
                </h4>
                <p className="mb-4">
                  This user-friendly free service for immigrants schedules them
                  with USCIS authorized Civil Surgeons for their immigration
                  medical exam and with authorized Immigration Lawyers for their
                  immigration needs, right near their zip code. easyIMEs trained
                  and motivated staff redefines the immigration industrys
                  standards through excellent support that meets all our clients
                  immediate needs. For Immigration Professionals, easyIME is a
                  marketplace for Immigration Services. Simply get in touch with
                  us to know how easyIME can network you and help you grow your
                  practice.
                </p>
                <div className="row g-3">
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                    <h5 className="mb-3">
                      <i
                        className="fa fa-check-circle text-primary me-3"
                        style={{ color: "green" }}
                      />
                      Professional Staff
                    </h5>
                  </div>
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3" />
                      24/7 Opened
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check-circle text-primary me-3" />
                      Fair Prices
                    </h5>
                  </div>
                </div>
                <a
                  href="appointment.html"
                  className="btn btn-primary py-3 px-5 mt-4 wow zoomIn"
                  data-wow-delay="0.6s"
                  style={{ backgroundColor: "green" }}
                >
                  Make Appointment
                </a>
              </div>
              <div className="col-lg-5" style={{ minHeight: "500px" }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                    data-wow-delay="0.9s"
                    src={image4}
                    style={{ objectFit: "cover" }}
                    alt="etc"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Appointment Start */}
        <div
          className="container-fluid  bg-appointment my-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ backgroundColor: "green" }}
        >
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 py-5">
                <div className="py-5">
                  <h1 className="display-5 text-white mb-4">
                    We Are A Certified and You Can Trust
                  </h1>
                  <p className="text-white mb-0">
                    Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                    kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo
                    ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea
                    et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr
                    ut dolores magna sit. Sea dolore sanctus sed et. Takimata
                    takimata sanctus sed.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <h1 className="text-white mb-4">Make Appointment</h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select bg-light border-0"
                          style={{ height: "55px" }}
                        >
                          <option selected>Select A Service</option>
                          <option value={1}>Service 1</option>
                          <option value={2}>Service 2</option>
                          <option value={3}>Service 3</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select bg-light border-0"
                          style={{ height: "55px" }}
                        >
                          <option selected>Select Doctor</option>
                          <option value={1}>Doctor 1</option>
                          <option value={2}>Doctor 2</option>
                          <option value={3}>Doctor 3</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control bg-light border-0"
                          placeholder="Your Name"
                          style={{ height: "55px" }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control bg-light border-0"
                          placeholder="Your Email"
                          style={{ height: "55px" }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="date"
                          id="date1"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control bg-light border-0 datetimepicker-input"
                            placeholder="Appointment Date"
                            data-target="#date1"
                            data-toggle="datetimepicker"
                            style={{ height: "55px" }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="time"
                          id="time1"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control bg-light border-0 datetimepicker-input"
                            placeholder="Appointment Time"
                            data-target="#time1"
                            data-toggle="datetimepicker"
                            style={{ height: "55px" }}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn  w-100 py-3"
                          type="submit"
                          style={{ backgroundColor: "#2f425c", color: "white" }}
                        >
                          Make Appointment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Appointment End */}
        {/* Service Start */}
        {/* Team Start */}
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                <div className="section-title bg-light rounded h-100 p-5">
                  <h5
                    className="position-relative d-inline-block  text-uppercase"
                    style={{ color: "green" }}
                  >
                    Our USCIS Doctors
                  </h5>
                  <h1 className="display-6 mb-4">
                    Meet Our Certified &amp; Experienced USCIS Doctors
                  </h1>
                  <a
                    href="!#"
                    className="btn  py-3 px-5"
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    Appointment
                  </a>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src={team2}
                      alt="etc"
                    />
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-instagram fw-normal" />
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                    <h2 className=" m-0" style={{ color: "green" }}>
                      $39
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src={team2}
                      alt="team2"
                    />
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                      <a
                        className="btn btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-instagram fw-normal" />
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                    <h2 className="m-0" style={{ color: "green" }}>
                      $49
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src={team3}
                      alt="etc"
                    />
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-instagram fw-normal" />
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                    <h2 className=" m-0" style={{ color: "green" }}>
                      $69
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src={team4}
                      alt="etc"
                    />
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a
                        className="btn btn-primary btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a
                        className="btn btn-primary btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a
                        className="btn btn-primary btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-instagram fw-normal" />
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                    <h2 className=" m-0" style={{ color: "green" }}>
                      $89
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                <div className="team-item">
                  <div
                    className="position-relative rounded-top"
                    style={{ zIndex: 1 }}
                  >
                    <img
                      className="img-fluid rounded-top w-100"
                      src={team5}
                      alt="etc"
                    />
                    <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-twitter fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-facebook-f fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-linkedin-in fw-normal" />
                      </a>
                      <a
                        className="btn  btn-square m-1"
                        href="!#"
                        style={{ backgroundColor: "green", color: "white" }}
                      >
                        <i className="fab fa-instagram fw-normal" />
                      </a>
                    </div>
                  </div>
                  <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                    <h4 className="mb-2">Dr. John Doe</h4>
                    <p className="text-primary mb-0">Implant Surgeon</p>
                    <h2 className=" m-0" style={{ color: "green" }}>
                      $19
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}

        {/* Testimonial Start */}
        <div
          className="container-fluid bg-testimonial py-5 my-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ backgroundColor: "green" }}
        >
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div
                  className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="testimonial-item text-center text-white">
                    <img
                      className="img-fluid mx-auto rounded mb-4"
                      src="img/testimonial-1.jpg"
                      alt="etc"
                    />
                    <p className="fs-5">
                      Dolores sed duo clita justo dolor et stet lorem kasd
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                      labore diam erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="mx-auto w-25" />
                    <h4 className="text-white mb-0">Client Name</h4>
                  </div>
                  <div className="testimonial-item text-center text-white">
                    <img
                      className="img-fluid mx-auto rounded mb-4"
                      src="img/testimonial-2.jpg"
                      alt="etc"
                    />
                    <p className="fs-5">
                      Dolores sed duo clita justo dolor et stet lorem kasd
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                      labore diam erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="mx-auto w-25" />
                    <h4 className="text-white mb-0">Client Name</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}

        {/* Newsletter Start */}
        <div
          className="container-fluid position-relative pt-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ zIndex: 1 }}
        >
          <div className="container">
            <div className=" p-5" style={{ backgroundColor: "green" }}>
              <form className="mx-auto" style={{ maxWidth: "600px" }}>
                <div className="input-group">
                  <h2 style={{ color: "white" }}>
                    FOR IMMIGRATION LAWYER SIGN-UP
                  </h2>
                  <input
                    type="text"
                    className="form-control border-white p-3"
                    placeholder="Your Email"
                  />
                  <button
                    className="btn  px-4"
                    style={{ backgroundColor: "#2f425c", color: "white" }}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Newsletter End */}
        {/* Footer Start */}
        <div
          className="container-fluid  text-light py-5 wow fadeInUp"
          data-wow-delay="0.3s"
          style={{ marginTop: "-75px", backgroundColor: "#2f425c" }}
        >
          <div className="container pt-5">
            <div className="row g-5 pt-4">
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Quick Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Home
                  </a>
                  <a className="text-light mb-2" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    About Us
                  </a>
                  <a className="text-light mb-2" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Faq Green Card Medical Exam
                  </a>
                  <a className="text-light mb-2" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Latest Blog
                  </a>
                  <a className="text-light" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Popular Links</h3>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-light mb-2" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Find A Civil Surgeon
                  </a>
                  <a className="text-light mb-2" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Find An Immigration
                  </a>
                  <a className="text-light mb-2" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Lawyer
                  </a>
                  <a className="text-light mb-2" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    News & Event
                  </a>
                  <a className="text-light" href="!#">
                    <i className="bi bi-arrow-right text-primary me-2" />
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Get In Touch</h3>
                <p className="mb-2">
                  <i className="bi bi-geo-alt text-primary me-2" />
                  123,usa della
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope-open text-primary me-2" />
                  info@example.com
                </p>
                <p className="mb-0">
                  <i className="bi bi-telephone text-primary me-2" />
                  +012 345 67890
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h3 className="text-white mb-4">Follow Us</h3>
                <div className="d-flex">
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                    href="!#"
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    <i className="fab fa-twitter fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                    href="!#"
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    <i className="fab fa-facebook-f fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                    href="!#"
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    <i className="fab fa-linkedin-in fw-normal" />
                  </a>
                  <a
                    className="btn btn-lg btn-primary btn-lg-square rounded"
                    href="!#"
                    style={{ backgroundColor: "green", color: "white" }}
                  >
                    <i className="fab fa-instagram fw-normal" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid text-light py-4"
          style={{ background: "#051225" }}
        >
          <div className="container">
            <div className="row g-0">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-md-0">
                  ©{" "}
                  <a className="text-white border-bottom" href="!#">
                    easyime.com
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a
          href="!#"
          className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
        {/* JavaScript Libraries */}
        {/* Template Javascript */}
      </div>
    </div>
  );
}

export default App;
