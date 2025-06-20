
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <Container fluid style={{ height : '100%'}}>
      <Row style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Col>
          <Link to="/people">People</Link>
        </Col>
        <Col>Planets</Col>
      </Row>
    </Container>
  )

};

export default Home;