import { Container, Row, Col, Form, FormControl, Button, Carousel } from 'react-bootstrap';
import adsReview from '../theme/images/adsReview.png';
import { IoChevronForwardOutline, IoStar, IoStarHalf } from "react-icons/io5";
import ArticleImage from '../theme/images/article.png';
import profile from '../theme/images/avatar1.png';

function LatesReview() {
    return (
        <Container className="mb-5">
            <Row>
                <Col md={8}>
                    <div class="titleSectionGroup">
                        <div className="item">
                            <h3>Lates Review</h3>
                            <p>So you can make better purchase decision</p>
                        </div>
                        <div className="item"> <Button className="btn btn-link">See more <IoChevronForwardOutline /> </Button> </div>
                    </div>

                    <Carousel className="reviewCarousel">
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <div className="card">
                                        <div className="card-image">
                                            <div><img src={ArticleImage} className="smallImage" /></div>
                                            <div>
                                                <h4>So you can make better purchase decision</h4>
                                                <p>CE Fuluric</p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="reviewGroup">
                                                <div className="ratingCardItem">
                                                    <strong>4.6</strong>
                                                    <span className="stars">
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStarHalf />
                                                    </span>
                                                    <span>(7)</span>
                                                </div>
                                                <small>1 Day ago</small>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nunc sit amet, pellentesque. In at in ullamcorper lectus consequat...</p>
                                            <div className="profile">
                                                <img src={profile} className="avatar" />
                                                <h5>Putri Fajar</h5>
                                                <p>Combination Skin, 25-29</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-image">
                                            <div><img src={ArticleImage} className="smallImage" /></div>
                                            <div>
                                                <h4>So you can make better purchase decision</h4>
                                                <p>CE Fuluric</p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="reviewGroup">
                                                <div className="ratingCardItem">
                                                    <strong>4.6</strong>
                                                    <span className="stars">
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStarHalf />
                                                    </span>
                                                    <span>(7)</span>
                                                </div>
                                                <small>1 Day ago</small>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nunc sit amet, pellentesque. In at in ullamcorper lectus consequat...</p>
                                            <div className="profile">
                                                <img src={profile} className="avatar" />
                                                <h5>Putri Fajar</h5>
                                                <p>Combination Skin, 25-29</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <div className="card">
                                        <div className="card-image">
                                            <div><img src={ArticleImage} className="smallImage" /></div>
                                            <div>
                                                <h4>So you can make better purchase decision</h4>
                                                <p>CE Fuluric</p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="reviewGroup">
                                                <div className="ratingCardItem">
                                                    <strong>4.6</strong>
                                                    <span className="stars">
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStarHalf />
                                                    </span>
                                                    <span>(7)</span>
                                                </div>
                                                <small>1 Day ago</small>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nunc sit amet, pellentesque. In at in ullamcorper lectus consequat...</p>
                                            <div className="profile">
                                                <img src={profile} className="avatar" />
                                                <h5>Putri Fajar</h5>
                                                <p>Combination Skin, 25-29</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-image">
                                            <div><img src={ArticleImage} className="smallImage" /></div>
                                            <div>
                                                <h4>So you can make better purchase decision</h4>
                                                <p>CE Fuluric</p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="reviewGroup">
                                                <div className="ratingCardItem">
                                                    <strong>4.6</strong>
                                                    <span className="stars">
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStarHalf />
                                                    </span>
                                                    <span>(7)</span>
                                                </div>
                                                <small>1 Day ago</small>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nunc sit amet, pellentesque. In at in ullamcorper lectus consequat...</p>
                                            <div className="profile">
                                                <img src={profile} className="avatar" />
                                                <h5>Putri Fajar</h5>
                                                <p>Combination Skin, 25-29</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col>
                                    <div className="card">
                                        <div className="card-image">
                                            <div><img src={ArticleImage} className="smallImage" /></div>
                                            <div>
                                                <h4>So you can make better purchase decision</h4>
                                                <p>CE Fuluric</p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="reviewGroup">
                                                <div className="ratingCardItem">
                                                    <strong>4.6</strong>
                                                    <span className="stars">
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStarHalf />
                                                    </span>
                                                    <span>(7)</span>
                                                </div>
                                                <small>1 Day ago</small>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nunc sit amet, pellentesque. In at in ullamcorper lectus consequat...</p>
                                            <div className="profile">
                                                <img src={profile} className="avatar" />
                                                <h5>Putri Fajar</h5>
                                                <p>Combination Skin, 25-29</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="card">
                                        <div className="card-image">
                                            <div><img src={ArticleImage} className="smallImage" /></div>
                                            <div>
                                                <h4>So you can make better purchase decision</h4>
                                                <p>CE Fuluric</p>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="reviewGroup">
                                                <div className="ratingCardItem">
                                                    <strong>4.6</strong>
                                                    <span className="stars">
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStar />
                                                        <IoStarHalf />
                                                    </span>
                                                    <span>(7)</span>
                                                </div>
                                                <small>1 Day ago</small>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra nunc sit amet, pellentesque. In at in ullamcorper lectus consequat...</p>
                                            <div className="profile">
                                                <img src={profile} className="avatar" />
                                                <h5>Putri Fajar</h5>
                                                <p>Combination Skin, 25-29</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col md={4} className="pt-5">
                    <img src={adsReview} className="img-fluid mt-5" />
                </Col>
            </Row>
        </Container>
    );
}

export default LatesReview;