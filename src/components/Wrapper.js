// import React, { useState, useEffect } from 'react';
// import MovieCard from './MovieCard';
// const Wrapper = () => {
//     const [movies, setMovies] = useState([]);
//     const [search, setSearch] = useState();
//     const getMovies=async()=>{
//         const url1="http://www.omdbapi.com/?s=avengers&apikey=b21338b7";
//         const url2=`http://www.omdbapi.com/?s=${search}&apikey=b21338b7`;
//         const response=await fetch(url1);
//         const respJson=await response.json();
//         console.log((respJson.Search));
//         setMovies(respJson.Search);
//     }
//     useEffect(()=>{
//         getMovies();
//     },[]);
//     return (
//         <div className="row text-center">
//             {movies.map((movie)=>(
//                 <MovieCard key={movie.imdbID} {...movie}/>
//             ))}
//         </div>
//     )
// }

// export default Wrapper;
