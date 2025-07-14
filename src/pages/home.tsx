
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import background_people from '../assets/darth_vader.jpg';
import background_planets from '../assets/death_star.jpg';

import Button from '../components/button/button';

import { Link } from 'react-router-dom'

import Logo from '../components/logo/logo';

import './home.css';

const Home = () => {
  /*
    The Home component serves as the landing page of the application.
    It provides links to navigate to the People and Planets pages,
    as well as a link to the IA Prompt page.
  */

  return (
    <Container fluid className="home-container">
      <div className="home">
        <Logo type='home'/>
          <div className='button-link'>
            <Link to="/prompt">
              <Button>
                Go to IA Prompt
              </Button>
            </Link>
          </div>
      </div>
      <Row className='home-row'>
        <Col className='people-col' style={{ backgroundImage: `url(${background_people})` }}>
          <Link to="/people">
            <Button>
              People
            </Button>
          </Link>
        </Col>
        <Col className='planets-col' style={{backgroundImage: `url(${background_planets})`}}>
          <Link to="/planets">
            <Button>
              Planets
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )

};

export default Home;