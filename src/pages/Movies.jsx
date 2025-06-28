import React from 'react'
import MovieCard from '../components/MovieCard'
import {  sciFiMovies,
  comedyMovies,
  horrorMovies,
  actionMovies, } from '../data/allMoviesData'

function Movies() {
  return (

    <div className="  pt-40 px-6 py-10 animate-fade-in-up bg-black text-5xl">
  <h2 className=" font-bold ml-10">Sci fi Movies </h2>
  <div className="flex flex-wrap gap-6">
    {sciFiMovies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>




  <h2 className=" font-bold mb-6 ml-10 mt-20">Comdey Movies </h2>
  <div className="flex flex-wrap gap-6">
    {comedyMovies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>



<h2 className=" font-bold mb-6 ml-10 mt-20"> Horror Movies </h2>
  <div className="flex flex-wrap gap-6">
    {horrorMovies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>

  <h2 className=" font-bold mb-6 ml-10 mt-20"> Action Movies </h2>
  <div className="flex flex-wrap gap-6">
    {actionMovies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>


</div>
  )
}

export default Movies
