import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container>
        <Row className="py-4">
          <Col md={4} className="text-center text-md-left">
            <h5>About Us</h5>
            <p className="small">
              We are Burger-King, committed to delivering the best burgers in town.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <a href="#facebook" className="text-white mx-2">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://x.com/SaiAdusumilli1" className="text-white mx-2">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/sai_adusumilli/?next=%2F" className="text-white mx-2">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5>Contact Us</h5>
            <p className="small">Email: saimanikanta482@gmail.com</p>
            <p className="small">Phone: +91-8919321632</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p className="small mb-0">&copy; 2024 Burger-King(Sai_Adusumilli). All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
