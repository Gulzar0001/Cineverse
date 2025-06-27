import ipb from "../assets/ipb.jpg"
import MovieCard from "../components/MovieCard"
import { featuredMovies } from "../data/featuredmovies"
import { trendingMovies } from "../data/featuredmovies"

function Home() {
  return (
    
    <div className="  bg-black text-white min-h-screen w-full  ">
      <img
        src={ipb}
        alt="Interstellar Banner"
        className="w-full h-full object-cover"
      />

      {/* Floating Text on Left Side */}
      <div className="absolute left-12 top-1/3 text-white z-10 max-w-xl">
        <h1 className="text-9xl font-bold mb-4">Interstellar</h1>
        <p className="text-2xl mb-4">A team of explorers travel through a wormhole in space</p>
        <div className="flex gap-4">
          <button className="bg-red-600 px-6 py-2 rounded text-white">Watch Now</button>
          <button className="bg-white px-6 py-2 rounded text-black">Watch Later</button>
        </div>
      </div>
      




      {/* Featured Movies Section */}
<div className="px-6 py-10 animate-fade-in-up">
  <h2 className="text-3xl font-bold mb-6">Featured Movies</h2>
  <div className="flex flex-wrap gap-6">
    {featuredMovies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
</div>


      {/* Trending Movies Section */}
<div className="px-6 py-10 animate-fade-in-up">
  <h2 className="text-3xl font-bold mb-6">Trending </h2>
  <div className="flex flex-wrap gap-6">
    {trendingMovies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
</div>
    </div>
  )
}

export default Home
