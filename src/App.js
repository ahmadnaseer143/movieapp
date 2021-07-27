import React, { useState, useEffect } from 'react';
// import Header from "./components/Header";
// import Wrapper from "./components/Wrapper";
import SearchBox from "./components/SearchBox";
import MovieCard from './components/MovieCard';
import "./components/app.css";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState();
  const getMovies=async(search)=>{
    if(!search){
      setSearch("infinity");
    }
    const url=`http://www.omdbapi.com/?s=${search}&apikey=b21338b7`;
    const resp=await fetch(url);
    const respJson=await resp.json();
    if(respJson.Search){
      setMovies(respJson.Search);
    }
  }
  useEffect(() => {
    getMovies(search);
  }, [search]);
  return (
    <>
      <div className="container-fluid">
            <div className="row align-items-center text-white py-3">
                <div className="col-8">
                    <h2 className="display-4">Nassy Movie App</h2>
                </div>
                <div className="col-4">
                    <SearchBox search={search} setSearch={setSearch}/>
                </div>
            </div>
        </div>
      <div className="row text-center mx-auto">
          {movies.map((movie)=>(
              <MovieCard key={movie.imdbID} {...movie}/>
          ))}
      </div>
    </>
  )
}

export default App;
