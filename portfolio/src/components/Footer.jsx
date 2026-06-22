import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import logo from "../assets/img/logo.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col md={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
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
                        <p>Copyright &copy; 2022 Takely Joella. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}