// Signup is child of Auth.jsx, import below
import Signup from './signup/Signup';
import Login from './login/Login';
// Container is Reactstrap's resizing div w/ grid rows and columns
// https://getbootstrap.com/docs/5.3/layout/grid/

import { Col, Container, Row } from 'reactstrap';

export default function Auth() {
  return (
    <>
        <Container >
                <Row>
                    <Col md="6">
                        <Signup />
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Login />
                    </Col>
                </Row>
            </Container>
    </>
  )
}
