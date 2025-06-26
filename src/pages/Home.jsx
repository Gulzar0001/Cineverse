import ipb from "../assets/ipb.jpg"

function Home() {
  return (
    
    <div className="  relative w-full h-full  ">
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
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />
    </div>
  )
}

export default Home
