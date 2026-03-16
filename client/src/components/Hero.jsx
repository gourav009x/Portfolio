import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Hero = () => {

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero-gradient text-white" style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="fade-in">
            <h1 className="display-3 fw-bold mb-4">
              Hi, I'm <span className="text-warning">Gourav Saini</span>
            </h1>
            <h2 className="display-5 mb-4">Full Stack Web Developer</h2>
            <p className="lead mb-4">
              I specialize in building modern web applications using the MERN stack. 
              Passionate about creating elegant solutions to complex problems.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Button 
                variant="warning" 
                size="lg" 
                className="btn-custom"
                onClick={scrollToContact}
              >
                <i className="bi bi-envelope me-2"></i>
                Get In Touch
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="btn-custom"
                href="#projects"
              >
                <i className="bi bi-briefcase me-2"></i>
                View My Work
              </Button>
            </div>
            <div className="mt-5">
              <a href="https://github.com/gourav009x" target="_blank" rel="noopener noreferrer" className="text-white me-4 fs-3">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/gourav-05-saini/" target="_blank" rel="noopener noreferrer" className="text-white me-4 fs-3">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
          <Col lg={6} className="text-center fade-in">
            <div className="mt-5 mt-lg-0">
              <div 
                style={{
                  width: '400px',
                  height: '400px',
                  margin: '0 auto',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                  onError={(e) => {
                    // If image fails to load, show placeholder or hide
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
