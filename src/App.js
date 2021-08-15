import './theme/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FormControl, Button, Carousel } from 'react-bootstrap';
// Images
import FeatherIcon from 'feather-icons-react';
import logo from './theme/images/femaleLogo.png';
import adsTopFrame from './theme/images/adsTopFrame.png';
import adsBillboard from './theme/images/adsBillboard.png';
import adsBigOffer from './theme/images/adsBigOffer.png';

// Components
import EditorChoice from './components/EditorChoice';
import MyMatch from './components/MyMatch';
import LatesArticles from './components/LatesArticles';
import LatesReview from './components/LatesReview';

function App() {
  return (
    <div id="app">

      {/* Header Navigation */}
      <div className="headerNavigation">
        <Container fluid className="p-0">
          <div className="section1">
            <Row>
              <Col md={2}>
                <div className="logoSection">
                  <div><Button className="btnMenuTrigger"><FeatherIcon icon="align-justify"></FeatherIcon></Button></div>
                  <div><a href="#" className="logoImage"><img src={logo} className="img-fluid" /></a></div>
                </div>
              </Col>
              <Col md={7}>
                <div className="inputSearch">
                  <FeatherIcon icon="search" className="iconSearch"></FeatherIcon>
                  <Form.Control type="email" placeholder="Search Product, Articles, Topics, Brands, etc" />
                </div>
              </Col>
              <Col md={3}>
                <Button className="btnLoginRegister">
                  <FeatherIcon icon="user"></FeatherIcon>
                  <span>Login / Signup</span>
                </Button>
              </Col>
            </Row>
          </div>
          <div className="section2">
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
      <LatesReview/>
      {/* Lates Reviews */}

    </div>
  );
}

export default App;
