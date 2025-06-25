import React from "react";
import MovieCard from "./MovieCard";
import { getAllMovies } from "../Data/data";

export default function Content() {
  const Movies = getAllMovies();

  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {Movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
