import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Col,
  Container,
  Input,
  Row,
  Form,
  FormGroup,
  Label,
  Button,
} from "reactstrap";
import FullButton from "../buttons/FullButton";

export default function MovieEdit(props) {
  const { id } = useParams();
  const [movieTitle, setMovieTitle] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieLength, setMovieLength] = useState("");
  const [movieReleased, setMovieReleased] = useState("");

  const navigate = useNavigate();

  // Code for form inputs (form data)
  let ratings = [null, "G", "PG", "PG-13", "NC-17", "R"];
  let genre = [
    null,
    "Comedy",
    "Drama",
    "Action",
    "Horror",
    "Thriller",
    "Family",
    "Documentary",
  ];

  const yearRange = () => {
    let years = [null];
    const thisYear = new Date().getFullYear();

    for (let i = thisYear; i >= 1892; i--) years.push(i);

    return (
      <>
        <Input type="select">
          {years.map((year, index) => {
            return (
              <option key={index} value={year}>
                {year}
              </option>
            );
          })}
        </Input>
      </>
    );
  };



  // Declare url outside fetches, same endpoint but different method
  const url = `http://localhost:4000/movies/${id}`;

  // Build a fetch to our GET movie by id endpoint
  // Get movie details so we know what we need to change
  const fetchMovies = async () => {
    const requestOptions = {
      method: "GET",
      headers: new Headers({
        Authorization: props.token,
      }),
    };

    try {
      const res = await fetch(url, requestOptions);
      const data = await res.json();
      //console.log(data);
      //Dive into data from the fetch with object deconstruction
      const { title, genre, length, rating, releaseYear } = data.getMovie;

      // Set the base state movie values with that data, movie data pre-patching
      setMovieTitle(title);
      setMovieGenre(genre);
      setMovieLength(length);
      setMovieRating(rating);
      setMovieReleased(releaseYear);
    } catch (error) {
      console.error(error);
    }
  };
  // Use useEffect to make sure if the program reloads, we still get a movie
  useEffect(() => {
    if (props.token) {
      fetchMovies();
    }
  }, [props.token]);

  // handle submit: fetch to our PATCH endpoint
  async function handleSubmit(e) {
    e.preventDefault();

    let bodyObj = JSON.stringify({
      title: movieTitle, 
      genre: movieGenre, 
      length: movieLength, 
      rating: movieRating, 
      releaseYear: movieReleased
  });
  // Sending our token auth through headers, our bodyOjb, and the method PATCH
  const requestOptions = {
      headers: new Headers({
          "Authorization": props.token,
          "Content-Type": "application/json"
      }),
      body: bodyObj,
      method: 'PATCH'
  }

  try {

      const res = await fetch(url, requestOptions);
      const data = await res.json();
      console.log(data);
      
  } catch (error) {
      console.error(error);
  }
  }

  return (
    <>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Edit Movie
      </h1>
      <Container>
        <Row>
          <Col md="4">
            <p>
              <b>{movieTitle}</b>:
              <br />A {movieGenre} rated {movieRating} that runs {movieLength}
              minutes was released in {movieReleased}.
              <br /> What needs to be changed?
            </p>
            <FullButton>
              <Button 
              color='info' 
              outline
              onClick={() => navigate(`/movie`)}>
              Back to Table</Button>
            </FullButton>
          </Col>
          <Col md="8">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Title</Label>
                <Input
                  value={movieTitle}
                  onChange={(e) => setMovieTitle(e.target.value)}
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup>
                <Label>Genre</Label>
                <Input
                  value={movieGenre}
                  onChange={(e) => setMovieGenre(e.target.value)}
                  type="select"
                  autoComplete="off"
                >
                  {genre.map((g, i) => (
                    <option key={i} value={g}>
                      {g}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Rating</Label>
                <Input
                  value={movieRating}
                  onChange={(e) => setMovieRating(e.target.value)}
                  type="select"
                  autoComplete="off"
                >
                  {ratings.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Length</Label>
                <Input
                  value={movieLength}
                  onChange={(e) => setMovieLength(e.target.value)}
                  type="number"
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup>
                <Label>Release Year</Label>
                {yearRange()}
              </FormGroup>
              <FullButton>
                <Button color="success">update Movie</Button>
              </FullButton>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
