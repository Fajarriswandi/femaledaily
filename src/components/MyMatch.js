import { Container, Row, Col, Button } from 'react-bootstrap';
import BgMyMatch from '../theme/images/bgMyMatch.png';
import { IoStar, IoStarHalf } from "react-icons/io5";

function MyMatch() {
    return (
        <Container className="myMatch" fluid>
            {/* <img src={BgMyMatch} className='img-fluid bg'  /> */}
            <Row className="content">
                <Col md={{ offset: 2 }} sm={12}>
                    <div className="contentLeft mb-3">
                        <h4>Looking for products that are just simply perfect for you?</h4>
                        <p>Here are some product that we believe match your skin, hair and body! have we mentioned that they solve your concerns too?</p>
                        <Button className="btn btn-primary btn-lg">See My Match</Button>
                    </div>
                </Col>
                <Col md={7} sm={12}>
                    <Row className="listProduct">
                        <Col md={4} sm={12}>
                            <div className="card">
                                <img src={BgMyMatch} className='img-fluid' />
                                <div className="card-body">
                                    <span className="badge badge-danger">Match Skin Type</span>
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
                                    <h4>LoreVal by vallerie thomas</h4>
                                    <p>Phyto-pighment flawles serum and wather</p>
                                    <span className="badge badge-link">Rossy beight</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="card">
                                <img src={BgMyMatch} className='img-fluid' />
                                <div className="card-body">
                                    <span className="badge badge-danger">Match Skin Type</span>
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
                                    <h4>LoreVal by vallerie thomas</h4>
                                    <p>Phyto-pighment flawles serum and wather</p>
                                    <span className="badge badge-link">Rossy beight</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={12}>
                            <div className="card">
                                <img src={BgMyMatch} className='img-fluid' />
                                <div className="card-body">
                                    <span className="badge badge-danger">Match Skin Type</span>
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
                                    <h4>LoreVal by vallerie thomas</h4>
                                    <p>Phyto-pighment flawles serum and wather</p>
                                    <span className="badge badge-link">Rossy beight</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default MyMatch;