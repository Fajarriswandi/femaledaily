import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Avatar from '../theme/images/avatar2.png';
import { IoChevronForwardOutline, IoPersonOutline, IoListOutline, IoChatboxEllipsesOutline } from "react-icons/io5";

export default function PopularGroups() {
    return (
        <Container>
            <div className="titleSectionGroup">
                <div className="item">
                    <h3>Popular Groups</h3>
                    <p>So you can make better purchase decision</p>
                </div>
                <div className="item"> <Button className="btn btn-link">See more <IoChevronForwardOutline /> </Button> </div>
            </div>
            <Row className="popularGroups">
                <Col md={3} sm={12}>
                    <Card>
                        <Card.Body>
                            <img src={Avatar} alt="Avatar" className="img-fluid" />
                            <h3>Embrace the Curl</h3>
                            <div className="listIcon">
                                <div><IoPersonOutline/> <span>-</span></div>
                                <div><IoListOutline/> <span>-</span></div>
                                <div><IoChatboxEllipsesOutline/> <span>-</span></div>
                            </div>
                            <p>My our curls pop and never stop!</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card>
                        <Card.Body>
                            <img src={Avatar} alt="Avatar" className="img-fluid" />
                            <h3>Embrace the Curl</h3>
                            <div className="listIcon">
                                <div><IoPersonOutline/> <span>-</span></div>
                                <div><IoListOutline/> <span>-</span></div>
                                <div><IoChatboxEllipsesOutline/> <span>-</span></div>
                            </div>
                            <p>My our curls pop and never stop!</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card>
                        <Card.Body>
                            <img src={Avatar} alt="Avatar" className="img-fluid" />
                            <h3>Embrace the Curl</h3>
                            <div className="listIcon">
                                <div><IoPersonOutline/> <span>-</span></div>
                                <div><IoListOutline/> <span>-</span></div>
                                <div><IoChatboxEllipsesOutline/> <span>-</span></div>
                            </div>
                            <p>My our curls pop and never stop!</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} sm={12}>
                    <Card>
                        <Card.Body>
                            <img src={Avatar} alt="Avatar" className="img-fluid" />
                            <h3>Embrace the Curl</h3>
                            <div className="listIcon">
                                <div><IoPersonOutline/> <span>-</span></div>
                                <div><IoListOutline/> <span>-</span></div>
                                <div><IoChatboxEllipsesOutline/> <span>-</span></div>
                            </div>
                            <p>My our curls pop and never stop!</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
