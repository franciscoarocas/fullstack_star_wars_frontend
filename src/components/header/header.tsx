
import Logo from '../logo/logo';

import type { HeaderProps } from '../../types/header';

import { Row, Col, Container } from 'react-bootstrap';

const Header = ({pageTitle = ""} : HeaderProps) => {

  return (
    <Container style={{marginTop : '25px'}}>
      <Row>
        <Col>
          <div style={{maxWidth: '200px'}}>
            <Logo/>
          </div>
        </Col>
        <Col>
          {pageTitle}
        </Col>
      </Row>
    </Container>
  )

};

export default Header;