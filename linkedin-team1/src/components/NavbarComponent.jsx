import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Form,
  InputGroup,
  Nav,
} from "react-bootstrap";

import { Link } from "react-router-dom";
const NavbarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownMe, setDropdownMe] = useState(false);
  const [dropdownAz, setDropdownAz] = useState(false);
  return (
    <div className=" bg-white position-fixed top-0 z-1 w-100 bordinoGames">
      <Container className=" ">
        <Row className=" justify-content-center">
          <Col xs={2} lg={3} className=" d-flex pe-md-0 ps-md-0">
            {" "}
            <div className="d-flex align-items-center">
              <Navbar.Brand href="#home">
                <i className="bi bi-linkedin icon-linkedin me-2 iconaLinkedin "></i>
              </Navbar.Brand>
              <Button
                variant="link"
                className="d-lg-none p-0 me-2 ps-3 fs-5 text-secondary"
                onClick={() => setShowSearch(!showSearch)}
              >
                <i className="bi bi-search"></i>
              </Button>

              {showSearch && (
                <div className="position-absolute w-100 top-0 start-0 bg-white p-2 shadow-lg z-3">
                  <Form>
                    <div className="d-flex align-items-center">
                      {" "}
                      <i
                        className="bi bi-search me-1"
                        onClick={() => setShowSearch(!showSearch)}
                      ></i>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          placeholder=" Search..."
                          className="w-100"
                        />
                      </InputGroup>
                    </div>
                  </Form>
                </div>
              )}

              <Form className="d-none d-lg-flex">
                <InputGroup>
                  <InputGroup.Text className=" sfondoSearch border-0">
                    <i className="bi bi-search px-2"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" sfondoSearch border-0"
                  />
                </InputGroup>
              </Form>
            </div>
          </Col>
          <Col
            xs={8}
            md={7}
            lg={6}
            className="px-0 d-flex align-items-center justify-content-evenly"
          >
            <Link
              to={"/"}
              href="#action1"
              className=" nav-link d-flex flex-column align-items-center py-0 px-lg-2 px-xl-0"
            >
              <i className="IconeGrigeNav bi bi-house-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0 text-secondary d-none d-lg-block ">
                Home
              </p>
            </Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center py-0 px-lg-2 px-xl-0"
            >
              <i className="IconeGrigeNav bi bi-person-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0 text-secondary d-none d-lg-block ">
                Web
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action3"
              className="d-flex flex-column align-items-center py-0 px-lg-2 px-xl-0"
            >
              <i className="IconeGrigeNav bi bi-briefcase-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0  text-secondary d-none d-lg-block ">
                Jobs
              </p>
            </Nav.Link>{" "}
            <Nav.Link
              href="#action4"
              className="d-flex flex-column align-items-center py-0 "
            >
              <i className="IconeGrigeNav bi bi-chat-dots-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0 text-secondary d-none d-lg-block ">
                Messages
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action5"
              className=" d-flex flex-column align-items-center py-0"
            >
              <i className="IconeGrigeNav bi bi-bell-fill fs-4 px-xl-3"></i>
              <p className="IconText pb-0 text-secondary d-none d-lg-block ">
                Notifications
              </p>
            </Nav.Link>
            <div className=" position-relative px-lg-2 px-xl-0">
              <Button
                className=" bg-transparent border-0 px-0 py-0 d-flex flex-column align-items-center"
                onClick={() => {
                  setDropdownMe(!dropdownMe);
                }}
              >
                <img
                  src="/1719248792649.jpeg"
                  className="ImmagineProfilo"
                  alt="Descrizione immagine"
                />
                <p className="IconText text-secondary  d-none d-lg-block">
                  Me<i className="bi bi-caret-down-fill caretDown"></i>
                </p>
              </Button>
              {dropdownMe && (
                <div className="dropdown-menu-start d-flex align-items-center divDropPosition bg-white rounded-3 z-3">
                  <Container
                    style={{ width: "250px" }}
                    className="border border-muted rounded-2 pb-3"
                  >
                    <Row className="d-flex flex-column">
                      <Col>
                        <Row className="mt-3">
                          <Col xs={3} className="pe-1">
                            {" "}
                            <img
                              src="/1719248792649.jpeg"
                              className="ImmagineProfilo rounded-circle"
                              alt="Descrizione immagine"
                              style={{ width: "60px", height: "60px" }}
                            />
                          </Col>
                          <Col xs={9} className="ps-4">
                            <p className="fw-bold">Rachele Barberis</p>
                            <p>Recently Graduated</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row className="mt-3">
                          <Col xs={6} className="pe-0">
                            <div className="mb-2 d-flex justify-content-end pe-2">
                              {" "}
                              <Link
                                to={"/profile"}
                                className=" btn btn-sm bg-transparent border-1 border-primary text-primary p-2 rounded-3"
                              >
                                <p className="text-button p-0">View Profile</p>
                              </Link>
                            </div>
                          </Col>
                          <Col xs={6} className="ps-0">
                            <div className="mb-2 d-flex justify-content-start ps-2">
                              {" "}
                              <Button className=" btn btn-sm bg-primary border-1 border-primary text-white p-2 px-3 rounded-3">
                                <p className=" text-button p-0">Verify</p>
                              </Button>
                            </div>
                          </Col>
                          <hr></hr>
                        </Row>
                      </Col>
                      <Col>
                        <p className="fw-bold">Account</p>
                        <Row>
                          <Col xs={1}>
                            <img
                              src="/imgGiallina.svg"
                              style={{ width: "18px", height: "18px" }}
                            />
                          </Col>
                          <Col xs={10} className="pe-0">
                            <p className="small">
                              {" "}
                              Try 1 month of Premium for 0 EUR
                            </p>
                          </Col>
                        </Row>{" "}
                        <p className="text-secondary">Settigs & Privacy</p>
                        <p className="text-secondary">Help</p>
                        <p className="text-secondary mb-1">Language</p>
                        <hr></hr>
                        <p className="fw-bold">Manage</p>
                        <p className="text-secondary">Posts & Activity</p>
                        <p className="text-secondary pb-1">
                          Job Posting Account
                        </p>
                      </Col>
                    </Row>
                    <hr></hr>
                    <p className="text-secondary">Sign Out</p>
                  </Container>
                </div>
              )}
            </div>
          </Col>
          <Col
            xs={2}
            md={3}
            lg={2}
            className=" ps-0 ps-lg-4 d-flex align-items-center justify-content-center pe-0 borderNav"
          >
            {" "}
            <div className=" position-relative">
              <Button
                className=" bg-transparent border-0 py-0"
                onClick={() => {
                  setDropdownAz(!dropdownAz);
                }}
              >
                <i className="bi bi-grid-3x3-gap text-secondary"></i>
                <p className="IconText text-secondary  d-none d-md-block">
                  For business
                  <i className="bi bi-caret-down-fill caretDown"></i>
                </p>
              </Button>
              {dropdownAz && (
                <div className="dropdown-menu-start d-flex align-items-center divDropPositionAz bg-white rounded-3 z-3">
                  <Container
                    fluid={true}
                    style={{
                      minWidth: "450px",
                      maxWidth: "700px",
                      maxHeight: "75vh",
                    }}
                    className="overflow-y-scroll border border-muted rounded-2"
                  >
                    <Row>
                      <Col lg={6} className="border">
                        <h5 className="p-4">My Apps</h5>
                        <ul className="list-unstyled">
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\trovaLed.svg"
                              alt="Icona"
                              className="ps-1 fs-2"
                            />
                            <span className="ps-2 fw-bold">Find Leads</span>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\gruppi.svg"
                              alt="Icona"
                              className="ps-1 fs-2"
                            />
                            <span className="ms-2 fw-bold">Groups</span>
                          </li>
                          <li className="mt-4">
                            <p className="ms-2 text-secondary">Talent</p>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Talent.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">
                              Talent Insights
                            </span>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Lavoro.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">Post a job</span>
                          </li>
                          <li className="mt-4">
                            <p className="ms-2 text-secondary">Sales</p>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Vendite.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">
                              Services Marketplace
                            </span>
                          </li>
                          <li className="mt-4">
                            <p className="ms-2 text-secondary">Marketing</p>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Pubblicizza.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">Advertise</span>
                          </li>
                          <li className="mt-4">
                            <p className="ms-2 text-secondary">Learning</p>
                          </li>
                          <li className="d-flex align-items-center mb-3 ms-2">
                            <img
                              src="\Learning.svg"
                              alt="Icona"
                              className="fs-2 ps-1"
                            />
                            <span className="ms-2 fw-bold">Learning</span>
                          </li>
                        </ul>
                      </Col>

                      <Col lg={6}>
                        <h5 className="p-4">Explore more for business</h5>
                        <ul className="list-unstyled px-4">
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Hire on LinkedIn
                            </strong>
                            <p className="text-muted   pb-3">
                              Find, attract and recruit talent
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Sell with LinkedIn
                            </strong>
                            <p className="text-muted   pb-3">
                              Unlock sales opportunities
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Post a job for free
                            </strong>
                            <p className="text-muted   pb-3">
                              Get qualified applicants quickly
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Advertise on LinkedIn
                            </strong>
                            <p className="text-muted   pb-3">
                              Acquire customers and grow your business
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Get started with Premium
                            </strong>
                            <p className="text-muted   pb-3">
                              Expand and leverage your network
                            </p>
                          </li>
                          <li className="mb-3">
                            <strong className=" small w-100">
                              Learn with LinkedIn
                            </strong>
                            <p className="text-muted   pb-3">
                              Courses to develop your employees
                            </p>
                          </li>
                          <li>
                            <strong className="mb-3 small w-100">
                              Admin Center
                            </strong>
                            <p className="text-muted   pb-3">
                              Manage billing and account details
                            </p>
                          </li>
                          <li className="py-4 text-center">
                            <strong className=" small w-100 pb-3 mb-4">
                              Create a Company Page +
                            </strong>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </Container>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default NavbarComponent;
