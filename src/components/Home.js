import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import Axios from "axios";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";
import { UserContext } from "../context/UserContext";
import UserCard from "./UserCard";
import Repos from "./Repos";
import { Navigate } from "react-router-dom";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
    } catch (err) {
      toast("Not able to locate user", { type: "error" });
    }
  };

  if (!context.user?.uid) {
    return <Navigate to="signin" />;
  }

  return (
    <Container fluid="lg">
      <Row className=" mt-3 mb-3">
        <Col md={6} lg={5}>
          <InputGroup className="shadow">
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please provide the username"
            />
            <Button onClick={fetchDetails} color="primary">
              Fetch User
            </Button>
          </InputGroup>
          {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md={6} lg={7}>
          {user ? <Repos repos_url={user.repos_url} /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
