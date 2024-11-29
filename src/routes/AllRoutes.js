import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <main>
        <Routes>
          <Route path="" element={<MovieList api="movie/now_playing"/>} />
          <Route path="/movie/:id" element={<MovieDetails api="movie/" />} />
          <Route path="/movies/popular" element={<MovieList api="movie/popular"  title="popular"/>} />
          <Route path="/movies/top" element={<MovieList api="movie/top_rated" title="title"/>} />
          <Route path="/movies/upcoming" element={<MovieList api="movie/upcoming" title="upcoming"/>} />
          <Route path="/search/movie" element={<Search api="search/movie"/>} />
          <Route path="*" element={<PageNotFound api="movie/now_playing"/>} />
        </Routes>
      </main>
    </div>
  );
};
