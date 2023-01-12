import axios from "../../Axios";
import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import {useNavigate} from 'react-router-dom';

function Signup() {
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(MyContext);
  function handleSignup(e) {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill out the fields");
    }
    axios
      .post("/users", { email, password })
      .then(({ data }) => {
      setUser(data);
      localStorage.setItem('token',data.token);
      navigate("/", { replace: true });
    })
      .catch((err) => console.log(err));
  }
  return (
    <Form onSubmit={handleSignup}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
