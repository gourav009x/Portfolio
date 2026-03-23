import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Certificates = () => {
  // TODO: Replace these with your real certificates + links
  const certificates = [
    {
      id: 'cert-1',
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: '2025',
      credentialUrl: 'https://drive.google.com/file/d/1Jop49wmgveYls7dEvMl6KhDuc2gohFyS/view?usp=sharing',
      skills: ['Cloud architecture',' Service models (IaaS, PaaS, SaaS)','virtualization']
    },
    {
      id: 'cert-2',
      title: 'Fundamentals of Network Communication',
      issuer: 'Coursera',
      date: '2024',
      credentialUrl: 'https://coursera.org/share/5f7a405255e481461cedf1d3fbbe12ea',
      skills: ['Network Routing', 'Network Protocols', 'Network Planning And Design','TCP/IP']
    },
    {
      id: 'cert-3',
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2023',
      credentialUrl: 'https://example.comhttps://drive.google.com/file/d/1BXRi4zd-7BYIG4VrawXS2GPz17h7-l8S/view?usp=sharing',
      skills: ['HTML', 'CSS', 'Javascript']
    }
  ]

  return (
    <section id="certificates" className="bg-light">
      <Container>
        <h2 className="section-title">Certificates</h2>
        <Row>
          {certificates.map((cert) => (
            <Col lg={4} md={6} className="mb-4" key={cert.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <h4 className="mb-2">{cert.title}</h4>
                  <div className="text-muted mb-3">
                    {cert.issuer} {cert.date ? `• ${cert.date}` : ''}
                  </div>
                  <div className="mb-3">
                    {cert.skills?.map((skill, index) => (
                      <span key={index} className="badge bg-secondary me-1 mb-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    {cert.credentialUrl && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-100"
                      >
                        <i className="bi bi-patch-check me-2"></i>
                        View Credential
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Certificates

