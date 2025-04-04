import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import axios from "axios";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const ClassicalPhotos = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("./Classical/classical.json")
      .then((res) => setImages(res.data))
      .catch((error) => console.error("Fetching data error", error));
  }, []);
  return (
    <div>
      <Container>
        <Row className="img-contain g-3">
          {images.length > 0 ? (
            images.map((img, index) => (
              <Col key={index + 1} xs={6} sm={4} md={3} lg={3} xl={2}>
                <div>
                  <Image className="img-size" src={img.image} />
                </div>
              </Col>
            ))
          ) : (
            <p>No Photos Found</p>
          )}
        </Row>
      </Container>
      <ul className="navbar-nav ms-auto">
        <button className="prev-btn" onClick={() => navigate("/")}>
          <i className="bi bi-arrow-left-circle pre-style"></i> Previous
        </button>
      </ul>
    </div>
  );
};

export default ClassicalPhotos;
