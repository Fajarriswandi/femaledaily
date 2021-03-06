import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import adsReview from '../theme/images/adsReview.png';
import { IoChevronForwardOutline, IoStar, IoStarHalf } from "react-icons/io5";
import ArticleImage from '../theme/images/article.png';
import profile from '../theme/images/avatar2.png';

function LatesReview() {

    const [posts, setPosts] = useState([]);
    const [carouselNumber, setCarouselNumber] = useState(0);

    const fetchPosts = async () => {
        const response = await fetch('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp');
        const postsData = await response.json();
        setPosts(postsData["latest review"]);

        const length = Math.ceil(postsData['latest review'].length / 2);
        setCarouselNumber(length);
    };


    useEffect(() => {
        fetchPosts();
    }, []);

    console.log(carouselNumber);

    const usePosts = posts.map((post, index) => {
        return (
            <Col md={4} sm="12" key={index}>
                <div className="card">
                    <img src={post.image} alt={post.title} onError={(e) => e.target.src = ArticleImage} className="img-fluid" />
                    <span className="badge sponsored">Sponsored</span>
                    <div className="card-body p-4">
                        <h4>{post.title}</h4>
                        <div className="info">
                            <div>{post.author}</div>
                            <div>{post.published_at}</div>
                        </div>
                    </div>
                </div>
            </Col>
        );
    })

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
                        {Array(carouselNumber).fill("").map((val, index) =>
                            <Carousel.Item className={`carousel${index}`} key={index}>
                                <Row>
                                    {posts.slice(2 * index, (2 * index) + 2).map((v, idx) =>
                                        <Col md={6} sm={12} className={2 * index + idx} key={idx}>
                                            <div className="card">
                                                <div className="card-image">
                                                    <div><img src={v.product.image} className="smallImage" /></div>
                                                    <div>
                                                        <h4>{v.product.name}</h4>
                                                        <p>{v.product.desc}</p>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="reviewGroup">
                                                        <div className="ratingCardItem">
                                                            <strong>{v.star}</strong>
                                                            <span className="stars">
                                                                {Array(v.star).fill("").map((vl, i) =>
                                                                    <IoStar key={i} />
                                                                )}
                                                            </span>
                                                            <span>{v.star}</span>
                                                        </div>
                                                        <small>1 Day ago</small>
                                                    </div>
                                                    <p>{v.comment}</p>
                                                    <div className="profile">
                                                        <img src={profile} className="avatar" />
                                                        <h5>{v.user}</h5>
                                                        <p>{v.profile.join(" - ")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )}
                                </Row>
                            </Carousel.Item>
                        )}
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