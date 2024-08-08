import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

const NavbarPanel = () => {

  const productsCarts = useSelector((state)=>state.cart)

  return (
    
    <Navbar expand="lg"  fixed="top" bg="dark" >
      <Container fluid>
        <Navbar.Brand href="#" style={{color:'yellow', fontWeight:'bolder'}}>Redux Toolkit</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link to="/" as={Link} style={{color:'#fff'}}>Products</Nav.Link>
          </Nav>
          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link} style={{color:'#fff'}}>My Cart {productsCarts.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPanel;