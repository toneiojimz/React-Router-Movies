import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = props => {

  console.log("movie list", props)
  // searchTerm will save the data from the search input on every occurance of the change event.

  const [searchTerm, setSearchTerm] = useState("")

  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([])
  
  const [movies, setMovies] = useState([])
  // The 2 useEffects will race each other
  // We only want the useEffect to do something if the movies are in a certain state
  useEffect(() => {

    //  when this is called is less relevant than what is being saved
    //  if(movies.length === 0) {
      const getMovies = () => {
        axios
          .get('http://localhost:5000/api/movies')
          .then(response => {
            setMovies(response.data);
            // setSearchResults(response.data)
            // searching here so the search works when you type text backwards
            // and forwards
            const results = response.data.filter(movie => 
              movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
            setSearchResults(results)
  
            // console.log("setup", searchResults)
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getMovies();
    //   moviesLoaded = true
    // }
    
  }, [searchTerm]);


  const handleChange = event => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className="movie-list">

      {searchResults.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  // console.log(movie)
  // const { title, director, metascore, stars } = movie;
  return (
    <Link to={`/movies/${movie.id}`}>

      <MovieCard key = {movie.id} movie = {movie}/>
      
    </Link>

  );
}

export default MovieList;
