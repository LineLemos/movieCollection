import { useState, useEffect } from "react";
import NavbarItem from '../../components/Navbar/navbarIndex';
import styles from "../../components/services/service.module.css";
// import {Details} from '../MovieDetails/movieDetails';
import {FormatFloat} from '../../utils/format';
import {FormatDate} from '../../utils/format';
import FavoriteAction from "../../components/services/favorite";
import Details from "../MovieDetails/movieDetails";
import { useNavigate } from "react-router-dom";


const MyFavorites = () => {
    const [favorites, setFavorites] = useState([]);
  
    function Details(movieId){
      navigate(`/movie/${movieId}`);
     }

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);
    
    
  
    return (
      <div>
        <div>
          <NavbarItem />
        </div>
        <div className={styles.appContainer}>
          <div className={styles.favTitle}>
            <h1>Meus Filmes Favoritos</h1>
          </div>
          {favorites.length > 0 ? (
            <div className={styles.movieContainer}>
              {favorites.map((movie) => (
                <div key={movie.id} className="favorite-item">
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
                    {FormatFloat(movie.vote_average)}
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
        
      </div>
    );
  };

 export default MyFavorites
