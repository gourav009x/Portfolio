import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const About = () => {
  return (
    <section id="about" className="bg-light">
      <Container>
        <h2 className="section-title">About Me</h2>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <Card className="h-100 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="mb-4">Who I Am</h3>
                <p className="lead">
                  I'm a passionate Full Stack Developer with expertise in the MERN stack. 
                  I love building scalable web applications and solving complex problems with elegant solutions.
                </p>
                <p>
                  With a strong foundation in both frontend and backend development, I create 
                  seamless user experiences while ensuring robust server-side functionality. 
                  I'm always eager to learn new technologies and improve my skills.
                </p>
                <p>
                  When I'm not coding, I enjoy contributing to open-source projects, writing 
                  technical blogs, and exploring the latest trends in web development.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Row>
              <Col md={6} className="mb-4">
                <Card className="text-center h-100 shadow-sm">
                  <Card.Body>
                    <i className="bi bi-code-slash text-primary" style={{ fontSize: '3rem' }}></i>
                    <h4 className="mt-3">Clean Code</h4>
                    <p>Writing maintainable and scalable code</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="text-center h-100 shadow-sm">
                  <Card.Body>
                    <i className="bi bi-lightning-charge text-warning" style={{ fontSize: '3rem' }}></i>
                    <h4 className="mt-3">Fast Development</h4>
                    <p>Delivering projects on time</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="text-center h-100 shadow-sm">
                  <Card.Body>
                    <i className="bi bi-phone text-success" style={{ fontSize: '3rem' }}></i>
                    <h4 className="mt-3">Responsive Design</h4>
                    <p>Mobile-first approach</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="text-center h-100 shadow-sm">
                  <Card.Body>
                    <i className="bi bi-shield-check text-danger" style={{ fontSize: '3rem' }}></i>
                    <h4 className="mt-3">Secure</h4>
                    <p>Following best practices</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
