import { useEffect, useState, React } from 'react';
import MovieCreate from './MovieCreate';
import { Col, Container, Row } from 'reactstrap';
import MovieTable from './MovieTable';


export default function MovieIndex(props) {
    // State to house movie data
    const [ movies, setMovies ] = useState([]);  // starts as empty

    // Build the movie git fetch in index so movies can be passed to any child component
    const fetchMovies = async () => {
        const url = "http://localhost:4000/movies/"

        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                "Authorization": props.token
            })
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json(); 
            //console.log(data);
            setMovies(data.getAllMovies);

        } catch (err) {
            console.log(err);
        }
    }

    // Use useEffect to run the fetch function to check for and maintain our token
    useEffect(() => {
        if (props.token) { // if they have a token, go ahead and get those movies
            fetchMovies();
        }
    }, [props.token]); // if refresh/new input/close tab it fires off this use effect to check the token again

  return (
    <>
        <Container>
            <Row>
                <Col md="4">
                    <MovieCreate token={props.token} fetchMovies={fetchMovies}/>
                </Col>
                <Col md="8">
                    <MovieTable movies={movies} token={props.token} fetchMovies={fetchMovies}/> 
                    {/* Curly bracket above over movies tell us its javascript */}
                </Col>
            </Row>
        </Container>
    </>
  )
}
