import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./service.module.css";
import FavoriteAction from './favorite';
import { useNavigate } from "react-router-dom";
import Details from "../../pages/MovieDetails/movieDetails";
import FormatFloat from "../../utils/format";


function AppMovies() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function details(movieId){
   navigate(`/movie/${movieId}`);
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = "8af66f0dcac558bd9578b48e0d1ad457";

      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [searchTerm]);

  return (
    <div className={styles.appContainer}>
      <div className={styles.homeTitle}>
        <h1>
          {" "}
          reactMovies <i className="ph ph-film-reel"></i>
        </h1>
      </div>
      <div className={styles.form}>
        <h2 className={styles.title}>Busca de Filmes</h2>
        <input
          id="search"
          className={styles.searchInput}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Digite o nome do filme"
        />
      </div>

      <div className={styles.movieContainer}>
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div className={styles.movies} key={movie.id}>
              <h2 className={styles.movieTitle}>{movie.title}</h2>
              <p> <img className={styles.starIcon} src="https://cdn-icons-png.freepik.com/512/2107/2107957.png" alt="" /> {FormatFloat (movie.vote_average)}</p>
              <p className={styles.movieDate}>{movie.release_date}</p>
              <img
                className={styles.movieImg}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              {/* <Button text='Adicionar aos favoritos' img /> */}
              
              <button className={styles.detailsbtn} type="submit" onClick={() => details(movie.id)}> Acessar Detalhes </button>
              <p><FavoriteAction movie={movie} /></p>
              
            </div>
          ))
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default AppMovies;

