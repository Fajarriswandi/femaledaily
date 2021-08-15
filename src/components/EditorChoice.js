import { Container, Row, Col, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import avatar1 from '../theme/images/avatar1.png';
import productImage from '../theme/images/product.png';
import { IoStar, IoStarHalf } from "react-icons/io5";


function EditorChoice() {
    return (
        <Container className="mb-5">
            <h2 className="titleSection">Editor's Choice</h2>
            <Row className="editorChoice">
                <Col className="item" md={3}>
                    <div className="card">
                        <div className="profile">
                            <div className="avatar"><img src={avatar1} className="img-fluid" /></div>
                            <div className="desc">
                                <strong>Arinda</strong>
                                <small>Senior Editor</small>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={productImage} className="img-fluid featuerImage" />
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
                <Col className="item" md={3}>
                    <div className="card">
                        <div className="profile">
                            <div className="avatar"><img src={avatar1} className="img-fluid" /></div>
                            <div className="desc">
                                <strong>Arinda</strong>
                                <small>Senior Editor</small>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={productImage} className="img-fluid featuerImage" />
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
                <Col className="item" md={3}>
                    <div className="card">
                        <div className="profile">
                            <div className="avatar"><img src={avatar1} className="img-fluid" /></div>
                            <div className="desc">
                                <strong>Arinda</strong>
                                <small>Senior Editor</small>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={productImage} className="img-fluid featuerImage" />
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
                <Col className="item" md={3}>
                    <div className="card">
                        <div className="profile">
                            <div className="avatar"><img src={avatar1} className="img-fluid" /></div>
                            <div className="desc">
                                <strong>Arinda</strong>
                                <small>Senior Editor</small>
                            </div>
                        </div>
                        <div className="card-body">
                            <img src={productImage} className="img-fluid featuerImage" />
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
        </Container>
    );
}

export default EditorChoice;