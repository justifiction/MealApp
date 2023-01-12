import axios from "../../Axios";
import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { MyContext } from "../../context";
import {useNavigate} from 'react-router-dom';

function Login() {
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(MyContext);
  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill out the fields");
    }
    axios
    .post("/login", { email, password })
    .then(({ data }) =>{ 
      localStorage.setItem('token',data.token);
      setUser(data);
      navigate("/", { replace: true });
  })
      .catch((err) => console.log(err));
  }
  return (
    <Form onSubmit={handleLogin}>
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

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;
