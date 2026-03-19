import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Resume = () => {
  // TODO: Replace with your actual resume URL (PDF link preferred)
  const resumeUrl = 'https://drive.google.com/file/d/1KPVaaferXh2NKs5BhwwlxKcIPnjy0tu3/view?usp=drive_link'

  return (
    <section id="resume" className="bg-white">
      <Container>
        <h2 className="section-title">Resume</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow-sm">
              <Card.Body className="p-4 text-center">
                <p className="lead mb-4">
                  View my latest resume to learn more about my
                  experience, skills, and projects.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button
                    variant="primary"
                    size="lg"
                    className="btn-custom"
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-file-earmark-text me-2"></i>
                    View Resume
                  </Button>
                  {/* <a
                    href={resumeUrl}
                    download="Gourav_Saini_Resume.pdf"
                    className="btn btn-outline-primary btn-lg btn-custom"
                  >
                    <i className="bi bi-download me-2"></i>
                    Download Resume
                  </a> */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Resume

