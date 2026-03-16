import React, { useState } from 'react'
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap'

const Navbar = ({ scrollY }) => {
  const [expanded, setExpanded] = useState(false)

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setExpanded(false)
  }

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={scrollY > 50 ? 'navbar scrolled bg-white' : 'navbar bg-transparent'}
      variant={scrollY > 50 ? 'light' : 'dark'}
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" onClick={(e) => handleNavClick(e, '#home')} className="fw-bold">
          Portfolio
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="mx-2"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
