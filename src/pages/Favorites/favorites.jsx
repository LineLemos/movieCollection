import { useState, useEffect } from "react";
import NavbarItem from "../../components/Navbar/navbarIndex";
import styles from "../../components/services/service.module.css";
import { FormatFloat } from "../../utils/format";

import FavoriteAction from "../../components/services/favorite";

import { useNavigate } from "react-router-dom";

const MyFavorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || []
  );

  function Details(movieId) {
    navigate(`/movie/${movieId}`);
  }

  return (
    <>
      <NavbarItem />

      <div className={styles.appContainer}>
        <div className={styles.favTitle}>
          <h1>Meus Filmes Favoritos</h1>
        </div>
        {favorites.length > 0 ? (
          <div className={styles.movieContainer}>
            {favorites.map((movie) => (
              <div key={movie.id} className={styles.movies}>
                <div className={styles.movieTitle}>
                  <h2>{movie.title}</h2>
                </div>
                <p>
                  {" "}
                  <img
                    className={styles.starIcon}
                    src="https://cdn-icons-png.freepik.com/512/2107/2107957.png"
                    alt=""
                  />{" "}
                  {FormatFloat(movie.vote_average || 0.5)}
                </p>

                  <p className={styles.movieDate}>
                    {(movie.release_date)}
                  </p>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <button
                    className={styles.detailsbtn}
                    type="submit"
                    onClick={() => Details(movie.id)}
                  >
                    {" "}
                    Acessar Detalhes{" "}
                  </button>
              <p>
                <FavoriteAction movie={movie} />
              </p>
                </div>
                
                
                
              ))}
            </div>
          ) : (
            <p>Sem filmes favoritos.</p>
          )}
        </div>
        
      </>
    );
  };

export default MyFavorites;
