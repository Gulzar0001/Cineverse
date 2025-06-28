import React from 'react'
import MovieCard from '../components/MovieCard'
import {
  mysteryShows,
  comedyShows,
  sciFiShows,
  dramaShows,
  satireShows,
} from '../data/tvShowsData'

function TvShows() {
  return (
    <div className="pt-40 px-6 py-10 animate-fade-in-up bg-black text-5xl">
      <h2 className="font-bold ml-10">Mystery Shows</h2>
      <div className="flex flex-wrap gap-6">
        {mysteryShows.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>

      <h2 className="font-bold mb-6 ml-10 mt-20">Comedy Shows</h2>
      <div className="flex flex-wrap gap-6">
        {comedyShows.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>

      <h2 className="font-bold mb-6 ml-10 mt-20">Sci-Fi Shows</h2>
      <div className="flex flex-wrap gap-6">
        {sciFiShows.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>

      <h2 className="font-bold mb-6 ml-10 mt-20">Drama Shows</h2>
      <div className="flex flex-wrap gap-6">
        {dramaShows.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>

      <h2 className="font-bold mb-6 ml-10 mt-20">Satire Shows</h2>
      <div className="flex flex-wrap gap-6">
        {satireShows.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>
    </div>
  )
}

export default TvShows
