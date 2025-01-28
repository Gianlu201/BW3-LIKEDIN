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
const NavbarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownMe, setDropdownMe] = useState(false);
  const [dropdownAz, setDropdownAz] = useState(false);
  return (
    <Container>
      <Row>
        <Col xs={2} lg={4} className="pt-md-2">
          {" "}
          <div className="d-flex align-items-center">
            <Navbar.Brand href="#home">
              <i className="bi bi-linkedin icon-linkedin me-2 fs-3 "></i>
            </Navbar.Brand>
            <Button
              variant="link"
              className="d-lg-none p-0 me-2"
              onClick={() => setShowSearch(!showSearch)}
            >
              <i className="bi bi-search"></i>
            </Button>

            {showSearch && (
              <div className="position-absolute w-100 top-0 start-0 bg-white p-2 shadow-lg z-3">
                <Form>
                  <div className="d-flex">
                    {" "}
                    <i className="bi bi-search mt-1 me-1"></i>
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
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Cerca..." />
              </InputGroup>
            </Form>
          </div>
        </Col>
        <Col xs={8} lg={6} className="pe-0">
          <Nav className=" justify-content-between">
            <Nav.Link
              href="#action1"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-house-fill fs-4"></i>
              <p className="IconText text-secondary d-none d-md-block ">Home</p>
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-person-fill fs-4"></i>
              <p className="IconText text-secondary d-none d-md-block ">Web</p>
            </Nav.Link>
            <Nav.Link
              href="#action3"
              className="d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-briefcase-fill fs-4"></i>
              <p className="IconText  text-secondary d-none d-md-block ">
                Work
              </p>
            </Nav.Link>{" "}
            <Nav.Link
              href="#action4"
              className="d-flex flex-column align-items-center "
            >
              <i className="IconeGrigeNav bi bi-chat-dots-fill fs-4"></i>
              <p className="IconText text-secondary d-none d-md-block ">
                Messages
              </p>
            </Nav.Link>
            <Nav.Link
              href="#action5"
              className=" d-flex flex-column align-items-center"
            >
              <i className="IconeGrigeNav bi bi-bell-fill fs-4"></i>
              <p className="IconText text-secondary d-none d-md-block ">
                Notifications
              </p>
            </Nav.Link>
            <div className=" position-relative">
              <Button
                className=" bg-transparent border-0"
                onClick={() => {
                  setDropdownMe(!dropdownMe);
                }}
              >
                <img
                  src="/1719248792649.jpeg"
                  className="ImmagineProfilo"
                  alt="Descrizione immagine"
                />
                <p className="IconText text-secondary  d-none d-md-block">
                  Tu<i className="bi bi-caret-down-fill"></i>
                </p>
              </Button>
              {dropdownMe && (
                <div className="dropdown-menu-start d-flex align-items-center divDropPosition">
                  <Container style={{ width: "250px" }} className=" border-1">
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
                          <Col xs={7} className="pe-0">
                            <div className="mb-2">
                              {" "}
                              <Button className=" btn btn-sm bg-transparent border-1 border-primary text-primary p-2 rounded-3">
                                <p className="text-button p-0">View Profile</p>
                              </Button>
                            </div>
                          </Col>
                          <Col xs={5} className="ps-0">
                            <div className="mb-2">
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
                          <Col xs={2}>
                            <img
                              src="/imgGiallina.svg"
                              style={{ width: "20px", height: "20px" }}
                            />
                          </Col>
                          <Col xs={10} className="pe-0">
                            <p className="small">
                              {" "}
                              Try 1 month of Premium for 0 EUR
                            </p>
                          </Col>
                          <p className="text-secondary">Settigs & Privacy</p>
                          <p className="text-secondary">Help</p>
                          <p className="text-secondary mb-1">Language</p>
                        </Row>
                        <hr></hr>
                      </Col>
                      <p className="fw-bold">Manage</p>
                      <p className="text-secondary">Posts & Activity</p>
                      <p className="text-secondary mb-1">Job Posting Account</p>
                    </Row>
                    <hr></hr>
                    <p className="text-secondary">Sign Out</p>
                  </Container>
                </div>
              )}
            </div>
          </Nav>
        </Col>
        <Col xs={2} lg={2} className=" ps-0 ps-lg-4">
          {" "}
          <div className=" position-relative">
            <Button
              className=" bg-transparent border-0"
              onClick={() => {
                setDropdownAz(!dropdownAz);
              }}
            >
              <i className="bi bi-grid-3x3-gap fs-5 text-secondary"></i>
              <p className="IconText text-secondary  d-none d-md-block">
                Per le Aziende<i className="bi bi-caret-down-fill"></i>
              </p>
            </Button>
            {dropdownAz && (
              <div className="dropdown-menu-start d-flex align-items-center divDropPositionAz">
                <Container
                  fluid={true}
                  style={{ width: "500px", maxHeight: "75vh" }}
                  className="overflow-y-scroll"
                >
                  <Row>
                    <Col lg={6}>
                      <h5>My Apps</h5>
                      <ul className="list-unstyled">
                        <li className="d-flex align-items-center mb-3">
                          <img
                            src="\trovaLed.svg"
                            alt="Icona"
                            className="icon"
                          />
                          <span className="ms-2">Find Leads</span>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <img src="\gruppi.svg" alt="Icona" className="icon" />
                          <span className="ms-2">Groups</span>
                        </li>
                        <li className="mt-4">
                          <strong>Talent</strong>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <img src="\Talent.svg" alt="Icona" className="icon" />
                          <span className="ms-2">Talent Insights</span>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <img src="\Lavoro.svg" alt="Icona" className="icon" />
                          <span className="ms-2">Post a job</span>
                        </li>
                        <li className="mt-4">
                          <strong>Sales</strong>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <img
                            src="\Vendite.svg"
                            alt="Icona"
                            className="icon"
                          />
                          <span className="ms-2">Services Marketplace</span>
                        </li>
                        <li className="mt-4">
                          <strong>Marketing</strong>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <img
                            src="\Pubblicizza.svg"
                            alt="Icona"
                            className="icon"
                          />
                          <span className="ms-2">Advertise</span>
                        </li>
                        <li className="mt-4">
                          <strong>Learning</strong>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                          <img
                            src="\Learning.svg"
                            alt="Icona"
                            className="icon"
                          />
                          <span className="ms-2">Learning</span>
                        </li>
                      </ul>
                    </Col>

                    <Col lg={6}>
                      <h5>Explore more for business</h5>
                      <ul className="list-unstyled">
                        <li className="mb-3">
                          <strong>Hire on LinkedIn</strong>
                          <p className="text-muted">
                            Find, attract and recruit talent
                          </p>
                        </li>
                        <li className="mb-3">
                          <strong>Sell with LinkedIn</strong>
                          <p className="text-muted">
                            Unlock sales opportunities
                          </p>
                        </li>
                        <li className="mb-3">
                          <strong>Post a job for free</strong>
                          <p className="text-muted">
                            Get qualified applicants quickly
                          </p>
                        </li>
                        <li className="mb-3">
                          <strong>Advertise on LinkedIn</strong>
                          <p className="text-muted">
                            Acquire customers and grow your business
                          </p>
                        </li>
                        <li className="mb-3">
                          <strong>Get started with Premium</strong>
                          <p className="text-muted">
                            Expand and leverage your network
                          </p>
                        </li>
                        <li className="mb-3">
                          <strong>Learn with LinkedIn</strong>
                          <p className="text-muted">
                            Courses to develop your employees
                          </p>
                        </li>
                        <li className="mb-5">
                          <strong>Admin Center</strong>
                          <p className="text-muted">
                            Manage billing and account details
                          </p>
                        </li>
                        <li className="mb-3">
                          <strong>Create a Company Page +</strong>
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
  );
};
export default NavbarComponent;
