import { useRef } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

export default function Login() {
    // Building our refs
    const emailRef = useRef();
    const passwordRef = useRef();

    // Start base handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(emailRef.current.value)
    }

  return (
    <><h2>Login</h2>
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
                <Button type='submit'>Login</Button>
            </Form>
    </>
  )
}
