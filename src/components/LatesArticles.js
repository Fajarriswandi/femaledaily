import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import ArticleImage from '../theme/images/imgnotfound.png';
import { IoChevronForwardOutline } from "react-icons/io5";

function LatesArticles() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp');
            const postsData = await response.json();
            setPosts(postsData["latest articles"]);
            // console.log(postsData);

        };
        fetchPosts();
    }, []);

    const usePosts = posts.map((post, index) => {
        return (
            <Col md={4} sm="12" key={index}>
                <div className="card">
                    <img src={post.image} alt={post.title} onError={(e) => e.target.src = ArticleImage} className="img-fluid" />
                    <span className="badge sponsored">Sponsored</span>
                    <div className="card-body">
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
        <Container>
            <div className="titleSectionGroup">
                <div className="item">
                    <h3>Lates Articles</h3>
                    <p>So you can make better purchase decision</p>
                </div>
                <div className="item"> <Button className="btn btn-link">See more <IoChevronForwardOutline /> </Button> </div>
            </div>

            <Row className="listArticles">
                {posts && usePosts}
            </Row>
        </Container>
    );
}

export default LatesArticles;