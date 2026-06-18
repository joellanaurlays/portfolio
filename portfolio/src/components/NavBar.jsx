import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedinIn,
    faGithub,
    faFacebookF
} from '@fortawesome/free-brands-svg-icons'

import { faCode } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" variant="dark" className={scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand href="#home">
                    <FontAwesomeIcon icon={faCode} size="2x" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link
                        href="#home"
                        className={activeLink === 'home'
                            ? 'active navbar-link'
                            : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('home')}
                        >
                        Home
                        </Nav.Link>

                        <Nav.Link
                        href="#skills"
                        className={activeLink === 'skills'
                            ? 'active navbar-link'
                            : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('skills')}
                        >
                        Skills
                        </Nav.Link>

                        <Nav.Link
                        href="#projects"
                        className={activeLink === 'projects'
                            ? 'active navbar-link'
                            : 'navbar-link'}
                        onClick={() => onUpdateActiveLink('projects')}
                        >
                        Projects
                        </Nav.Link>
                    </Nav>

                    <div className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/takely-joella-sendranirina-3b4ab52bb" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>

                            <a href="https://github.com/joellanaurlays" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                            <a href="https://web.facebook.com/takely.joella.sendranirina" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>

                        <button className="vvd">
                            <span>Let's Connect</span>
                        </button>
                    </div>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}