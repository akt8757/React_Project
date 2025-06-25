import React, { useState } from "react";
import Ratting from "./Ratting";
import { GetMoviImg } from "../utils/movie-utils";
import MovieModal from "./MovieModal";

export default function MovieCard({ movie }) {
  const [isModal, setIsModal] = useState(false);
  const getSingleMovie = (e) => {
    console.log("kabir");
  };
  const handleAddCart = (e) => {
    e.stopPropagation();
    console.log("kabir");
  };
  return (
    <>
      {isModal ? (
        <MovieModal
          getSingleMovie={getSingleMovie}
          movie={movie}
          onCloseModal={() => setIsModal(false)}
        />
      ) : (
        <a href="#" onClick={() => setIsModal(true)}>
          <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <img
              className="w-full object-cover"
              src={GetMoviImg(movie.cover)}
              alt={movie.title}
            />
            <figcaption className="pt-4">
              <h3 className="text-xl mb-1">{movie.title}</h3>
              <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
              <div className="flex items-center space-x-1 mb-5">
                {/* <img src={star} width="14" height="14" alt="" /> */}

                <Ratting value={movie.rating} />
              </div>
              <button
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                onClick={(e) => handleAddCart(e)}
              >
                <img src="./assets/tag.svg" alt="" />
                <span>${movie.price} | Add to Cart</span>
              </button>
            </figcaption>
          </figure>
        </a>
      )}
    </>
  );
}
