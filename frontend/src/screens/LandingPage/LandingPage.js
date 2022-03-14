import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./landingpage.css";
const LandingPage = () => {
  const history = useHistory();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro_text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="button_container">
              <Link to="/login">
                <Button size="lg" className="landing_button">
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button
                  size="lg"
                  className="landing_button"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
