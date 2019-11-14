import React, { useState } from 'react';

import { Route} from 'react-router-dom';


import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'
import "./index.css";


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie]);
  }

  return (
    <div className= "App">
      <SavedList list={SavedList} />
      <Route exact path ='/' component={MovieList}/>
      <Route exact path= "/movies/:movieID"
      render = {(props) => {return <Movie {...props} addToSavedList={addToSavedList}/>}} 
      />
    </div>
  );
};

export default App;


