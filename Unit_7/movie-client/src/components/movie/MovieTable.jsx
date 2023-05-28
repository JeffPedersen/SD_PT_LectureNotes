import React from "react";
import { Table, Button } from "reactstrap";
import { useNavigate } from 'react-router-dom'


export default function MovieTable(props) {

    const navigate = useNavigate();
    
    // Building delete function and fetch in table(easy to access movie ids)
    async function deleteMovie(id) { // gets id
        const url = `http://localhost:4000/movies/${id}` // string interpolate the id
    
        const myHeaders = new Headers();
        myHeaders.append("Authorization", props.token);
    
        let requestOptions = {
            headers: myHeaders,
            method: 'DELETE'
        }
    
        try {
            let response = await fetch(url, requestOptions);
            let data = await response.json();
    
            if(data) { // if something is deleted refresh the table
                props.fetchMovies();
            }
    
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <>
      <h1>List of Movies</h1>
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Length</th>
            <th>Year Released</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
            {
                props.movies.map(movie => (
                    <tr key={movie._id}> {/*per movie id we make a new   */}
                        <th scope="row">
                            {movie.title}
                        </th>
                        <td>
                            {movie.genre}
                        </td>
                        <td>
                            {movie.rating}
                        </td>
                        <td>
                            {movie.length} mins
                        </td>
                        <td>
                            {movie.releaseYear}
                        </td>
                        <td>
                            <Button
                            onClick={() => navigate(`/movie/update/${movie._id}`)}
                            color="warning">Edit</Button>
                            <Button
                                onClick={() => deleteMovie(movie._id)} 
                                color="danger">Delete</Button>   
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </Table>
    </>
  );
}
