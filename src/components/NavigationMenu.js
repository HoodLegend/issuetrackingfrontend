import '../css/navbar.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../images/logo.jpeg';

const NavigationMenu = () => {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <img src={logo} 
            alt='logo' width='50px' height='50px' className='me-2' />
            <Navbar.Brand href="#home">Turing Foods</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#link">Sign Up</Nav.Link>
                <a href='/'><Button className='btn btn-primary'>Sign In</Button></a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
 
export default NavigationMenu;