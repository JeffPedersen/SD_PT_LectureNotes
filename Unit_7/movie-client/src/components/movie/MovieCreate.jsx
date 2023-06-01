import React, { useRef } from "react";
// import the needed elements from reactstrap
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import FullButton from "../buttons/FullButton";

export default function MovieCreate(props) {
  // Use useRef to get values from inputs!
  const titleRef = useRef();
  const genreRef = useRef();
  const ratingRef = useRef();
  const lengthRef = useRef();
  const releasedRef = useRef();

  // Have an array of movie ratings
  let ratings = [null, "G", "PG", "PG-13", "NC-17", "R"];

  // Create a function to make a year span logically happen and then return a JSX input mapping it
  const yearRange = () => {
    // init a years array
    let years = [null];

    // init a var for the current year
    const thisYear = new Date().getFullYear();

    // For loop to push years from 1892 to present to the array
    for (let i = thisYear; i >= 1892; i--) years.push(i);

    return (
      <>
        <Input innerRef={releasedRef} type="select">
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

  // Build our handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(titleRef.current.value)

    // Create vars for our input values
    const title = titleRef.current.value;
    const genre = genreRef.current.value;
    const rating = ratingRef.current.value;
    const length = lengthRef.current.value;
    const releaseYear = releasedRef.current.value;

    // Build url variable
    let url = `http://localhost:4000/movies/`;

    // Construct the body object & JSON stringify it
    let bodyObj = JSON.stringify({
      title,
      genre,
      rating,
      length,
      releaseYear,
    }); // JSON-ifying our data to be passed.

    // Headers
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // setting our content to be passed
    myHeaders.append("Authorization", props.token);
    // token to evaluate.

    // Request Options object
    const requestOption = {
      headers: myHeaders,
      body: bodyObj,
      method: "POST",
    }; // packaging up all our options in an object

    // Build the try/catch with our fetch
    try {
      const res = await fetch(url, requestOption);
      const data = await res.json();
``
      // console.log(data);
      // Call the fetchMovie function via props to refresh our table after movie is added
      props.fetchMovies();

    } catch (err) {
      console.error(err);
    }
  };

  // Build out the form
  return (
    <>
      <h1>Add Movie</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input innerRef={titleRef} autoComplete="off" type="text" required />
        </FormGroup>
        <FormGroup>
          <Label>Genre</Label>
          <Input innerRef={genreRef} type="select">
            <option value={""}></option>
            <option value={"Comedy"}>Comedy</option>
            <option value={"Drama"}>Drama</option>
            <option value={"Action"}>Action</option>
            <option value={"Horror"}>Horror</option>
            <option value={"Thriller"}>Thriller</option>
            <option value={"Family"}>Family</option>
            <option value={"Documentary"}>Documentary</option>
            <option value={"Romance"}>Romance</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Rating</Label>
          <Input innerRef={ratingRef} type="select">
            {ratings.map((r, i) => (
              <option key={i} value={r}>
                {r}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Length (in minutes)</Label>
          <Input innerRef={lengthRef} type="number" autoComplete="off" />
        </FormGroup>
        <FormGroup>
          <Label>Year Released</Label>
          {yearRange()}
        </FormGroup>
        <FullButton>
          <Button color="success">Add Movie</Button>
        </FullButton>
      </Form>
    </>
  );
}