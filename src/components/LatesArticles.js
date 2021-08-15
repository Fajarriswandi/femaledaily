import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import ArticleImage from '../theme/images/article.png';
import { IoChevronForwardOutline } from "react-icons/io5";

function LatesArticles() {
    return (
        <Container>
            <div class="titleSectionGroup">
                <div className="item">
                    <h3>Lates Articles</h3>
                    <p>So you can make better purchase decision</p>
                </div>
                <div className="item"> <Button className="btn btn-link">See more <IoChevronForwardOutline /> </Button> </div>
            </div>

            <Row className="listArticles">
                <Col md={4} sm="12">
                    <div className="card">
                        <img src={ArticleImage} className="img-fluid" />
                        <span className="badge sponsored">Sponsored</span>
                        <div className="card-body">
                            <h4>So you can make better purchase decision</h4>
                            <div className="info">
                                <div>Username</div>
                                <div>11 Hour ago</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm="12">
                    <div className="card">
                        <img src={ArticleImage} className="img-fluid" />
                        <span className="badge sponsored">Sponsored</span>
                        <div className="card-body">
                            <h4>So you can make better purchase decision</h4>
                            <div className="info">
                                <div>Username</div>
                                <div>11 Hour ago</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm="12">
                    <div className="card">
                        <img src={ArticleImage} className="img-fluid" />
                        <span className="badge sponsored">Sponsored</span>
                        <div className="card-body">
                            <h4>So you can make better purchase decision</h4>
                            <div className="info">
                                <div>Username</div>
                                <div>11 Hour ago</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm="12">
                    <div className="card">
                        <img src={ArticleImage} className="img-fluid" />
                        <span className="badge sponsored">Sponsored</span>
                        <div className="card-body">
                            <h4>So you can make better purchase decision</h4>
                            <div className="info">
                                <div>Username</div>
                                <div>11 Hour ago</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm="12">
                    <div className="card">
                        <img src={ArticleImage} className="img-fluid" />
                        <span className="badge sponsored">Sponsored</span>
                        <div className="card-body">
                            <h4>So you can make better purchase decision</h4>
                            <div className="info">
                                <div>Username</div>
                                <div>11 Hour ago</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} sm="12">
                    <div className="card">
                        <img src={ArticleImage} className="img-fluid" />
                        <span className="badge sponsored">Sponsored</span>
                        <div className="card-body">
                            <h4>So you can make better purchase decision</h4>
                            <div className="info">
                                <div>Username</div>
                                <div>11 Hour ago</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LatesArticles;