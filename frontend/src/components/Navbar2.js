import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Navbar2() {
  const auth = localStorage.getItem('user');
  const navigate =useNavigate();
  const logout =()=>{
    console.log(auth._id)
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">La-Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {auth?<Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href={`/profile/${JSON.parse(auth)._id}`}>Profile</Nav.Link>
            <Nav.Link href="/Signup" onClick={logout}>Logout ({JSON.parse(auth).username})</Nav.Link>
            </Nav>:
            <Nav className="me-auto">
            <Nav.Link href="/Signup">Signup</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Seller/Login">Sell on Ecommercy</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbar2;