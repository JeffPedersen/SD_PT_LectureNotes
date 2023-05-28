import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export default function Logout({setToken}) {
    const navigate = useNavigate();

    // Build signout function
    const signout = () => {
        localStorage.removeItem('token') // clears out localstorage
        setToken('') // resets our state to an empty string
        navigate('/'); // routes us back to Auth
    }

    // Custom style object
    const style = {
        float: "right",
        margin: '.5em'
    }

  return (
    <>
    <Button 
        style={style}
        onClick={signout}
        color="danger"
        outline
    >
        Signout</Button>
    </>
  )
}
