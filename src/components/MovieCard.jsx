function MovieCard({ movie }) {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl shadow-md hover:shadow-xl transition duration-300 
                    w-[16%] mx-[1%] my-6 flex-shrink-0">
      <img
        src={movie.image}
        alt={movie.title}
        className="rounded-t-lg h-64 w-full  transition-transform duration-300 hover:scale-105"
      />
      <div className="p-3">
      <h3 className="text-lg font-semibold tracking-wide mb-1 leading-tight text-white">
          {movie.title}
        </h3>
          <p className="text-sm font-medium text-yellow-400"> {movie.rating} / 10</p>
      </div>
    </div>
  );
}

export default MovieCard;