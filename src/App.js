import React, { useState, useEffect } from 'react';
import './theme/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
// Images
import FeatherIcon from 'feather-icons-react';
import logo from './theme/images/femaleLogo.png';
import adsTopFrame from './theme/images/adsTopFrame.png';
import adsBillboard from './theme/images/adsBillboard.png';
import adsBigOffer from './theme/images/adsBigOffer.png';
import apologize from './theme/images/apologize.jpg';

// Components
import EditorChoice from './components/EditorChoice';
import MyMatch from './components/MyMatch';
import LatesArticles from './components/LatesArticles';
import LatesReview from './components/LatesReview';

function App() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="app">
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal id="myModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sory...</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pl-5 pr-5 pb-5">
          <img src={apologize} alt="Sory" className="d-table ml-auto mr-auto img-fluid" />
          <p className="text-center">Maaf, saya blm bisa selesaikan semua section, karena saya hanya punya waktu 4 hari, dan itu juga tidak fulltime untuk menyelesaikan tes ini.</p>
        </Modal.Body>
      </Modal>

      {/* Header Navigation */}
      <div className="headerNavigation">
        <Container fluid className="p-0">
          <div className="section1">
            <Row>
              <Col md={2} sm={12}>
                <div className="logoSection">
                  <div><Button className="btnMenuTrigger"><FeatherIcon icon="align-justify"></FeatherIcon></Button></div>
                  <div><a href="#" className="logoImage"><img src={logo} className="img-fluid" /></a></div>
                  <div className="d-lg-none d-md-none d-block">
                    <Button className="btnMenuTrigger btn-primary"><FeatherIcon icon="log-in"></FeatherIcon></Button>
                  </div>
                </div>
              </Col>
              <Col md={7} className="lg-block d-md-block d-none">
                <div className="inputSearch">
                  <FeatherIcon icon="search" className="iconSearch"></FeatherIcon>
                  <Form.Control type="email" placeholder="Search Product, Articles, Topics, Brands, etc" />
                </div>
              </Col>
              <Col md={3} className="lg-block d-md-block d-none">
                <Button className="btnLoginRegister">
                  <FeatherIcon icon="user"></FeatherIcon>
                  <span>Login / Signup</span>
                </Button>
              </Col>
            </Row>
          </div>
          <div className="section2 lg-block d-md-block d-none">
            <Row>
              <Col>
                <ul className="mainMenuLink">
                  <li><a href="#">Skincare</a></li>
                  <li><a href="#">mackup</a></li>
                  <li><a href="#">body</a></li>
                  <li><a href="#">hair</a></li>
                  <li><a href="#">fragrance</a></li>
                  <li><a href="#">nails</a></li>
                  <li><a href="#">tools</a></li>
                  <li><a href="#">Brands</a></li>
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* Header Navigation */}

      {/* Ads sections */}
      <Container>
        <div className="mb-3">
          <img src={adsTopFrame} className="img-fluid" />
        </div>
        <div className="mb-5">
          <img src={adsBillboard} className="img-fluid" />
        </div>
      </Container>
      {/* Ads sections */}

      {/* Edit Choices */}
      <EditorChoice />
      {/* Edit Choices */}

      {/* My Match */}
      <MyMatch />
      {/* My Match */}

      {/* Ads Big Offer */}
      <Container className="pt-5 pb-5 mt-5 mb-5">
        <img src={adsBigOffer} className="img-fluid" />
      </Container>
      {/* Ads Big Offer */}

      {/* Lates Article */}
      <LatesArticles />
      {/* Lates Article */}

      {/* Lates Reviews */}
      <LatesReview />
      {/* Lates Reviews */}

    </div>
  );
}

export default App;
