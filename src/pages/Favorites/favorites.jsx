import { useState, useEffect } from "react";
import NavbarItem from '../../components/Navbar/navbarIndex';
import styles from "../../components/services/service.module.css";
// import {Details} from '../MovieDetails/movieDetails';
import {FormatFloat} from '../../utils/format';
import {FormatDate} from '../../utils/format';




const MyFavorites = () => {
    const [favorites, setFavorites] = useState([]);
  
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
                  <h2>{movie.title}</h2>

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
                    {FormatDate(movie.release_date)}
                  </p>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>Sem filmes favoritos.</p>
          )}

          {/* <div>
            <Details />
          </div> */}
        </div>
      </div>
    );
  };

  export default MyFavorites;