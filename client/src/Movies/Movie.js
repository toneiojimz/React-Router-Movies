import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard";
import { Link, NavLink } from "react-router-dom";

const Movie = (props) => {
  const [movie, setMovie] = useState();

const id = props.match.params.movieID;

  useEffect(() => {
   

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
 
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    
    addToSavedList(<NavLink activeClassName='active' to={`/movies/${movie.id}`}>
      {movie.title}
      </NavLink>)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

 
  return (
    <div className="save-wrapper">

      <MovieCard key = {movie.id} movie = {movie}/>

      <div className="save-button" onClick={() => saveMovie()}>Save</div>

    </div>

  );
}

export default Movie;
