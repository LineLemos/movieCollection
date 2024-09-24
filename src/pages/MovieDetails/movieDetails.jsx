import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppMovies from "../../components/services/service";
import styles from "../../components/services/service.module.css";
import {FormatFloat}  from "../../utils/format";
import {FormatDate} from "../../utils/format";
import NavbarItem from "../../components/Navbar/navbarIndex";

const Details = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", { style: "currency", currency: "USD"})
  }


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
      <div className={styles.navDet}>
        <NavbarItem />
      </div>
      <div className={styles.detContainer}>
        {movie && (
          <>
            {/* <AppMovies movie={movie} /> */}
            <div className={styles.movies} key={movie.id}>
              <h2 className={styles.movieTitle}>{movie.title}</h2>
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
                className={styles.movieImg}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <div className={styles.detailsInfo}>
                <h3>Duração: </h3>
                <p>{movie.runtime} min</p>
                <h3>Orçamento: </h3>
                <p>{formatCurrency(movie.budget)}</p>
                <h3>Receita: </h3>
                <p>{formatCurrency(movie.revenue)}</p>
                <h3>País: </h3>
                <p>{movie.production_countries[0].name}</p>
                <h3>Gêneros:</h3>
                <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
                <h3>Sinopse:</h3>
                <p> {movie.overview}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
