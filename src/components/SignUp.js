import React, { useContext, useState } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "reactstrap";
import { UserContext } from "../context/UserContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { auth } from "../config/firebaseConfig";

const SignUp = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((err) => {
        toast(err.message, { type: "error" });
        setEmail("");
        setPassword("");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Navigate to="/" />;
  }
  return (
    <Container className="text-center m-auto">
      <Row className="justify-content-center align-items-center">
        <Col lg={6} md={9}>
          <Card className="shadow glass-card">
            <Form onSubmit={handleSubmit}>
              <CardHeader className="text-white fw-bold">SIGN UP</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" className="label-font text-white" xs={3}>
                    Email
                  </Label>
                  <Col xs={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label
                    for="password"
                    className="label-font text-white"
                    xs={3}
                  >
                    Password
                  </Label>
                  <Col xs={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button type="submit" block color="primary">
                  Sign Up
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
