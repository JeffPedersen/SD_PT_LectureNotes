// Signup is child of Auth.jsx, import below
import Signup from './signup/Signup';
import Login from './login/Login';
// Container is Reactstrap's resizing div w/ grid rows and columns
// https://getbootstrap.com/docs/5.3/layout/grid/

import { Col, Container, Row, Button } from 'reactstrap';
import { useState } from 'react';
import FullButton from '../buttons/FullButton';

export default function Auth(props) {
    // useState to hold button's state login/signup
    const [ button, setButton ] = useState('Signup');

    // function to switch button from login to signup with setButton
    const swapForm = () => {
        button === "Login" ?
            setButton("Signup") :
            setButton("Login")
    }

    // function that changes the display, swap the forms 
    // ternary checks if button is set to Login, if true see signup if false see login

    // return will hold button that controls swapping


    const displayForm = () => {
        return(
            button === "Login" ?
                <Container >
                    <Row>
                        <Col md="6">
                            <Signup
                                updateToken={props.updateToken}
                            />
                        </Col>
                    </Row>
                </Container> :
                <Container >
                    <Row>
                        <Col md="6">
                            <Login
                                updateToken={props.updateToken} 
                            />
                        </Col>
                    </Row>
                </Container>
                
        )
    }


  return (
    <>
        <FullButton>
            <Button onClick={swapForm} color="dark"></Button>
            {displayForm()}
        </FullButton>
    </>
  )
}
