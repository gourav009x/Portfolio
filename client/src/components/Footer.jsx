import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © {currentYear} Portfolio. Built with MERN Stack, Vite & Bootstrap
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-5">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-5">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
              <i className="bi bi-twitter"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
