import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import TvShows from './pages/TvShows'
import Dashboard from './pages/Dashboard'
import MovieDetail from './pages/MovieDetail'

const MainStack = () => {
  return (
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/movies" element={<Movies />} />
  <Route path="/tv" element={<TvShows />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/movie/:id" element={<MovieDetail />} />
</Routes>
  )
}

export default MainStack
