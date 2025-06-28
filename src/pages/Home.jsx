
import MovieCard from "../components/MovieCard"
import { featuredMovies } from "../data/featuredmovies"
import { trendingMovies } from "../data/featuredmovies"
import HeroSlider from "../components/HeroSlider"
function Home() {
  return (

    <div className=" text-white min-h-screen w-full  ">
      
      


   <HeroSlider />

      {/* Featured Movies Section */}
<div className="px-6 py-10 animate-fade-in-up">
  <h1 className="text-3xl mt-28 font-bold mb-6">Featured Movies</h1>
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


<div className="px-6 py-10 animate-fade-in-up">
  <h2 className="text-3xl font-bold mb-6">Favourites </h2>
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
