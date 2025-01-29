/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
//import { QuestionCircleFill } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <Container as="footer" className="mt-5 mb-3">
      <Row>
        <Col xs={6}>
          <ul className="d-flex flex-wrap anchor-list justify-content-between">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Talent Solutions</a>
            </li>
            <li>
              <a href="#">Professional Community Policies</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Marketing Solutions</a>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  className="drop-list"
                  id="dropdown-basic"
                >
                  Privacy & Terms
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Privacy Policy
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    User Agreement
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Pages Terms</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Cookie Policy</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">
                    Copyright Policy
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-6">
                    Your California privacy choices
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <a href="#">Ad Choices</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Sales Solutions</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">Small Business</a>
            </li>
            <li>
              <a href="#">Safety Center</a>
            </li>
          </ul>
        </Col>
        <Col xs={6}>
          <div className="d-lg-flex">
            <ul className="list-unstyled">
              <li className="d-flex">
                <i className="bi bi-question-circle-fill d-inline-block fs-6 me-2"></i>
                <div>
                  <a className="fw-bold" href="#">
                    Questions?
                  </a>
                  <p>Visit our Help Center</p>
                </div>
              </li>
              <li className="d-flex">
                <i className="bi bi-gear-fill d-inline-block fs-6 me-2"></i>
                <div>
                  <a className="fw-bold" href="#">
                    Manage your account and privacy
                  </a>
                  <p>Go to your Settings</p>
                </div>
              </li>
              <li className="d-flex">
                <i className="bi bi-shield-shaded d-inline-block fs-6 me-2"></i>
                <div>
                  <a className="fw-bold" href="#">
                    Recommendation transparency
                  </a>
                  <p>Learn more about Recommended Content</p>
                </div>
              </li>
            </ul>
            <div className="ms-lg-3">
              <label>Select Language</label>
              <Form.Select
                size="sm"
                style={{ width: "260px" }}
                aria-label="Default select example"
              >
                <option>English(English)</option>
                <option>Italiano(Italian)</option>
                <option>Español(Spanish)</option>
                <option>Français(French)</option>
                <option>Deutsch(German)</option>
              </Form.Select>
            </div>
          </div>
        </Col>
      </Row>
      <p className="my-3 fw-lighter">LinkedIn Corporation &copy;2025</p>
    </Container>
  );
};
export default Footer;
