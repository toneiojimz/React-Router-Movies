import React, { useState } from 'react';
import {Route} from 'react-router-dom'

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie'
import MovieList from './Movies/MovieList'


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path ='/' component={MovieList}></Route>
      <Route path ='/Movie/:id' render ={(props => (
        <MovieList{...props} items={Movie}/>
      ))}   />
    
    </div>
  );
};

export default App;
