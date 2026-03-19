import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'bi-laptop',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Vite', 'Redux']
    },
    {
      title: 'Backend',
      icon: 'bi-server',
      skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Mongoose', 'JWT']
    },
    {
      title: 'Programming Languages',
      icon: 'bi-server',
      skills: ['Python', 'Java', 'C++', 'C', 'JavaScript']
    },
    {
      title: 'Tools & Others',
      icon: 'bi-tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'npm', 'MongoDB Atlas']
    }
  ]

  return (
    <section id="skills">
      <Container>
        <h2 className="section-title">Skills & Technologies</h2>
        <Row>
          {skillCategories.map((category, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className={`bi ${category.icon} text-primary`} style={{ fontSize: '3rem' }}></i>
                  <h4 className="mt-3 mb-4">{category.title}</h4>
                  <div>
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills
