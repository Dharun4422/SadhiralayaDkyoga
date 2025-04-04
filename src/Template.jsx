import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Template = () => {
    const navigate = useNavigate();
  return (
    <Container className="card-container">
      <Row>
        <Col xs={12} sm={6} md={6} lg={6} className="col-card">
          <Card className="card"> 
          {/* style={{ width: "18rem", gap: '20px' }} */}
            <Card.Img variant="top" src="./images/classical.jpg" />
            <Card.Body>
              <Card.Title className="blink-text">Sadhiralaya Naatiya KalaiKoodam</Card.Title>
              <Card.Text>
              Celebrating Two Glorious Years of Excellence Classical Dance Photos for our Student's
              </Card.Text>
              <Card.Text className="quotes">
              "Classical dance is poetry in motion, where rhythm meets devotion."
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/classicalphotos')}>View Gallery</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="col-card">
          <Card className="card">
            <Card.Img variant="top" src="./images/yoga.jpg" />
            <Card.Body>
              <Card.Title className="blink-text">DK Yoga</Card.Title>
              <Card.Text>
              Celebrating Two Glorious Years of Excellence Yoga Photos for our Student's. A Journey of Strength & Flexiblities 
              </Card.Text>
              <Card.Text className="quotes">
              "Inhale the future, exhale the past."
              </Card.Text>
              <Button variant="primary" onClick={() => navigate('/yogaphotos')}>View Gallery</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Template;
