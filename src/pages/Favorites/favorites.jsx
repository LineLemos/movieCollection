import { useState, useEffect } from "react";
import NavbarItem from '../../components/Navbar/navbarIndex';
import styles from "../../components/services/service.module.css";


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
        <div className={styles.movieContainer}>
            <h1>Meus Filmes Favoritos</h1>
            {favorites.length > 0 ? (
                <div className={styles.movies}>
                    {favorites.map((movie) => (
                        <div key={movie.id} className="favorite-item">
                            <h2>{movie.title}</h2>
                            <p>{movie.release_date}</p>
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
        </div>
      </div>
    );
  };

  export default MyFavorites;