import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import avatar1 from '../theme/images/avatar1.png';
import productImage from '../theme/images/product.png';
import { IoStar, IoStarHalf } from "react-icons/io5";
// import axios from 'axios';

export default function EditorChoice() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp');
            const postsData = await response.json();
            setPosts(postsData["editor's choice"]);
            // console.log(postsData);
            
        };
        fetchPosts();
    }, []);

    // console.log(posts);
    const usePosts = posts.slice(0,4).map((post, index) => {
        return (
            <Col className="item" md={3} key={index}>
                <div className="card">
                    <div className="profile">
                        <div className="avatar"><img src={avatar1} className="img-fluid" /></div>
                        <div className="desc">
                            <strong>{post.editor}</strong>
                            <small>{post.role}</small>
                        </div>
                    </div>
                    <div className="card-body">
                        <img src={post.product.image} className="img-fluid featuerImage" />
                        <div className="ratingCardItem">
                            <strong>{post.product.rating}</strong>
                            <span className="stars">
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStar />
                                <IoStarHalf />
                            </span>
                            <span>(7)</span>
                        </div>
                        <h4>{post.product.name}</h4>
                        <p>{post.product.description}</p>
                        <span className="badge badge-link">Rossy beight</span>
                    </div>
                </div>
            </Col>
        );
    })

    return (

        <Container className="mb-5">
            <h2 className="titleSection">Editor's Choice</h2>

            <Row className="editorChoice">
                {posts && usePosts}
            </Row>
        </Container>
    );
}