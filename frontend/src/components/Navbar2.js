import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Navbar2() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    console.log(auth._id)
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <img src="./images/final_logo.png" alt="" width='60px' style={{ "borderRadius": '50%', "cursor": "pointer" }} onClick={() => navigate('/')} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {auth ? <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href={`/profile/${JSON.parse(auth)._id}`}>Profile</Nav.Link>
              <Nav.Link href="/Signup" onClick={logout}>Logout ({JSON.parse(auth).username})</Nav.Link>
            </Nav> :
              <Nav className="mx-auto">
                <Nav.Link href="/Signup">Signup</Nav.Link>
                <Nav.Link style={{"paddingLeft": "15px"}} href="/Login">Login</Nav.Link>
                <Nav.Link style={{"paddingLeft": "15px"}} href="/Seller/Login">Sell on La-Tienda</Nav.Link>
                <Nav.Link style={{"paddingLeft": "15px"}} href="/Admin/Login">Admin</Nav.Link>
              </Nav>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar2;