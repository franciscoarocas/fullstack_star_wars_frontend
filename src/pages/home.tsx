
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import background_people from '../assets/darth_vader.jpg';
import background_planets from '../assets/death_star.jpg';

import Button from '../components/button/button';

import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <Container fluid style={{ height : '100%'}}>
      <Row style={{ 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
      }}>
        <Col style={{
          backgroundImage: `url(${background_people})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Link to="/people">
            <Button>
              People
            </Button>
          </Link>
        </Col>
        <Col style={{
          backgroundImage: `url(${background_planets})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Button>
            Planets
          </Button>
        </Col>
      </Row>
    </Container>
  )

};

export default Home;