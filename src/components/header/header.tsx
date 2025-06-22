
import Logo from '../logo/logo';

import type { HeaderProps } from '../../types/header';

import { Row, Col, Container } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Button from '../button/button';


const Header = ({pageTitle = ""} : HeaderProps) => {

  return (
    <Container style={{marginTop : '25px'}}>
      <Row>
        <Col>
          <div style={{maxWidth: '200px'}}>
            <Logo/>
          </div>
        </Col>
        <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h3 style={{marginRight : '1rem', marginBottom : '0'}}>{pageTitle}</h3>
          <Link to="/">
            <Button variant='dark'>
              Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )

};

export default Header;