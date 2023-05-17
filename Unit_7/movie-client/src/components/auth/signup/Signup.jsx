// To use and access ReactStrap components we need to import them: 
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useState } from 'react';

export default function Signup() {
    // useState() to capture our firstName value and be able to update it with setFirstname(<-- state function)
    const [ firstName, setFirstName ] = useState('');

    // We need to build out the handle submit function 
    function handleSubmit(e) {
        e.preventDefault(); // stops refresh on submit
        console.log("firstName:", firstName);
    }

  return (
    <>
        <h2>Signup</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>First Name:</Label>
                        <Input 
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            autoComplete={"off"}
                        />
                    </FormGroup>
                    <Button type='submit'>Signup</Button>
                </Form>
    </>
  )
}
