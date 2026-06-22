import { useState} from "react";
import { Col, Row } from "react-bootstrap";
import { Alert } from "react-bootstrap";

export const Newsletter = ({onValidated, status, message}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && email.includes("@")) {
            onValidated({
                EMAIL: email,
            });

            setEmail("");
        }
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe to our newsletter</h3>
                        {status === 'sending' && <Alert>Sending...</Alert>}
                        {status === 'success' && <Alert variant="success">{message}</Alert>}
                        {status === 'error' && <Alert variant="danger">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}