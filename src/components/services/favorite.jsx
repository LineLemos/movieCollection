import { useState, useEffect } from "react";
import styles from "./service.module.css";

const FavoriteAction = ({ movie }) => {
    const [favorites, setFavorites] = useState ([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const operationFavorite = () => {
        const isFavorite = favorites.some(fav => fav.id === movie.id);
        let updateFavorites;

        if (isFavorite) {
            updateFavorites = favorites.filter(fav => fav.id !== movie.id);
        } else {
            updateFavorites = [...favorites, movie];
        }

        setFavorites(updateFavorites);
        localStorage.setItem('favorites', JSON.stringify(updateFavorites));
    };

    const isFavorite = favorites.some(fav => fav.id === movie.id);

    return (
      <div className={styles.favbutton}>
        <button
          onClick={operationFavorite}
          style={{
            backgroundColor: isFavorite ? "#ff6b6b" : "rgb(236, 223, 99)",
          }}
        >
          {isFavorite ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        </button>
      </div>
    );
};

export default FavoriteAction;