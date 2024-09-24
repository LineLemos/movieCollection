import Details from "../pages/MovieDetails/movieDetails";
import HomeItem from "../pages/Home/homeindex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyFavorites from "../pages/Favorites/favorites";
import MainDetails from "../pages/MovieDetails/details";

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeItem />} />
        <Route path="movie/:id" element={<MainDetails />} />
        <Route path="/details" element={<MainDetails />} />
        <Route path="/favorites" element={<MyFavorites />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;
