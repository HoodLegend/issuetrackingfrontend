import "../css/navbar.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo from "../assets/images/logo.jpeg";
import about from "../assets/images/about.jpeg";
import AddIssue from "./AddIssue";

const NavigationMenu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            src={logo}
            alt="logo"
            width="50px"
            height="50px"
            className="me-2"
          />
          <Navbar.Brand href="#home">Turing Foods</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <a href="/signin">
                <Button className="btn btn-primary">Sign In</Button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section
        id="hero"
        style={{ display: "flex", alignItems: "center", marginTop: "50px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>Fixing Issues 😉</h2>
              <p>
                Here you ll find all the issues concerning the packaging,
                processing
                <br />
                and cleaning machinery. Engineers can Upload current issues in
                various departments of the company,
                <br /> and can also indicate whether they have been resolved or
                still pending to be fixed. <br />
                Supervisors can also monitor the current status of the issues
                that have been previously raised.
              </p>
              <button type="button" className="btn btn-dark btn-large">
                Learn more
              </button>
            </div>

            <div className="col img-col">
              <img src={about} className="img-fluid" alt="about" />
            </div>
            
          </div>
        </div>
      </section>
    </div>

    
  );
};

export default NavigationMenu;
