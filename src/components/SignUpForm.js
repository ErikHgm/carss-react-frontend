import React from "react";
import { Link } from "react-router-dom";

import {Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container>
          <h1>sign up</h1>


        </Container>
        <Container>
          <Link to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
      >
        <Image 
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;