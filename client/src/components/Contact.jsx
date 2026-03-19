import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [alert, setAlert] = useState({ show: false, variant: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setAlert({ show: false, variant: '', message: '' })

    try {
      const response = await axios.post('/api/contact', formData)
      setAlert({
        show: true,
        variant: 'success',
        message: response.data.message || 'Message sent successfully!'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setAlert({
        show: true,
        variant: 'danger',
        message: error.response?.data?.message || 'Failed to send message. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact">
      <Container>
        <h2 className="section-title">Get In Touch</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="card shadow-sm">
              <div className="card-body p-4">
                {alert.show && (
                  <Alert variant={alert.variant} dismissible onClose={() => setAlert({ show: false })}>
                    {alert.message}
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Your message here..."
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                      disabled={loading}
                      className="btn-custom"
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
            <div className="text-center mt-5">
              <h5 className="mb-4">Or reach me at</h5>
              <div className="d-flex justify-content-center gap-4">
                {/* <a href="mailto:whygourav@gmail.com" className="text-decoration-none">
                  <i className="bi bi-envelope-fill fs-3 text-primary"></i> */}
                {/* </a> */}
                <a href="https://github.com/gourav009x" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <i className="bi bi-github fs-3 text-dark"></i>
                </a>
                <a href="https://www.linkedin.com/in/gourav-05-saini/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <i className="bi bi-linkedin fs-3 text-primary"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
