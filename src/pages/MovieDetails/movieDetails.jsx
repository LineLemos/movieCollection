import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppMovies from "../../components/services/service";
import styles from "../../components/services/service.module.css";

const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(
        `${import.meta.env.VITE_API}/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const data = await result.json();

      setMovie(data);
    };

    getMovie();
  }, [id]);

  return (
    <div>
      {/* {movie && (
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            )} */}
      <div className={styles.movieContainer}>
        {movie && (
          <>
            {/* <AppMovies movie={movie} /> */}
            <div className={styles.movies} key={movie.id}>
              <h2 className={styles.movieTitle}>{movie.title}</h2>
              <p className={styles.movieDate}>{movie.release_date}</p>
              <img
                className={styles.movieImg}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
