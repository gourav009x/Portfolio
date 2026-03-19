import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'
import axios from 'axios'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  const getDefaultProjects = () => [
    {
      _id: '1',
      title: 'Gym-managment-Project',
      description: 'A full-stack gym management application that allows administrators to manage members, membership plans, and gym records efficiently through a centralized dashboard..',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      githubUrl: 'https://github.com/gourav009x/Gym-managment-Project',
      // liveUrl: 'https://example.com',
      featured: true
    },
    {
      _id: '2',
      title: 'Vision AI',
      description: 'AI-powered computer vision application for image analysis and recognition.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/vision-ai',
      liveUrl: '',
      featured: true
    }
    // {
    //   _id: '3',
    //   title: 'Social Media Dashboard',
    //   description: 'A comprehensive dashboard for managing social media accounts with analytics and scheduling features.',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    //   githubUrl: 'https://github.com',
    //   liveUrl: 'https://example.com',
    //   featured: true
    // }
  ]

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects')
      setProjects(response.data)
    } catch (error) {
      console.error('Error fetching projects:', error)
      // Fallback to default projects if API fails
      setProjects(getDefaultProjects())
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="bg-light">
        
        <Container>
          <h2 className="section-title">My Projects</h2>
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="projects" className="bg-light">
      <Container>
        <h2 className="section-title">My Projects</h2>
        <Row>
          {projects.length === 0 ? (
            <Col className="text-center">
              <p className="lead">No projects available at the moment.</p>
            </Col>
          ) : (
            projects.map((project) => (
              <Col lg={4} md={6} className="mb-4" key={project._id}>
                <Card className="h-100 shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <h4 className="mb-3">{project.title}</h4>
                    <p className="text-muted flex-grow-1">{project.description}</p>
                    <div className="mb-3">
                      {project.technologies && project.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-secondary me-1 mb-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      {project.githubUrl && (
                        <Button
                          variant="outline-dark"
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-grow-1"
                        >
                          <i className="bi bi-github me-2"></i>
                          GitHub
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-grow-1"
                        >
                          <i className="bi bi-box-arrow-up-right me-2"></i>
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  )
}

export default Projects
