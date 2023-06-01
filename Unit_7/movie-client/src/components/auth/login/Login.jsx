import { useRef } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import FullButton from '../../buttons/FullButton';

export default function Login({updateToken}) {
    // Building our refs
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    // Start base handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(emailRef.current.value)
        
        // Build body obj (request body)
        let body = JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
        })

        // Declare and init our url
        const url = 'http://localhost:4000/user/login'

        // Build our try catch = fetch
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: body
            })
            const data = await res.json()

            // Pass the data token value to my updateToken
            // If the server send a success message we can update token and route to movie, if not we will get an alert
            if(data.message === 'Login success') {
                updateToken(data.token)
                navigate('/movie');
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <>
        <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        placeholder='Email'
                        innerRef={emailRef}
                        type="email"
                        autoComplete="off"
                        />
                </FormGroup>
                <FormGroup>
                    <Input
                        placeholder='Password'
                        innerRef={passwordRef}
                        type="password"
                        autoComplete="off"
                        />
                </FormGroup>
                <FullButton>
                    <Button type='submit'>Login</Button>
                </FullButton>
            </Form>
    </>
  )
}
