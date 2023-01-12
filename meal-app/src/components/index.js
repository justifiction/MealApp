import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MyContext } from "../context";
import {useNavigate} from 'react-router-dom';
import axios from "../Axios";

function AppNavbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(MyContext);
  const handleLogout = () => {
     axios.post('/logout')
     .then(res => {
       localStorage.removeItem("token");
       setUser(null);
       navigate("/", { replace: true });   //history.replace("/");
     })
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Meals</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!user && (
            <Nav className="me-auto">
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
          {user && (
          <> 
            <LinkContainer to="/my-favorites">
              <Nav.Link>Favorites</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick ={handleLogout}>Logout</Nav.Link>
          </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
