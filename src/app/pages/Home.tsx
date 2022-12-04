import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tmdb from "../api/tmdb";
import ItemsCarousel from "../components/ItemsCarousel";
import { NavBar } from "../components/Navbar";
import { addMovies, getAllMovies } from "../store/reducers/movies/movieSlice";
import {
  addTvShows,
  getAllTvShows,
} from "../store/reducers/tvShows/tvShowSlice";

export const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get("/movie/popular");
      dispatch(addMovies(data.results));
    };
    fetchMovies();
    const fetchTvShows = async () => {
      const { data } = await tmdb.get("/tv/popular");
      dispatch(addTvShows(data.results));
    };
    fetchTvShows();
  }, []);
  
  const movies = useSelector(getAllMovies);
  const tvShows= useSelector(getAllTvShows);
  const [cinema, setCinema] = useState(movies);
 

  const handlerMovies = () => {
   setCinema(movies)
  };
  const handlerTvShows = () => {
    setCinema(tvShows)
  };

  return (
    <>
      <NavBar />
      <Container sx={{ mt: 12 }}>
        <Button onClick={handlerMovies} variant="contained">
          Movies
        </Button>
        <Button onClick={handlerTvShows} sx={{ ml: 10 }} variant="contained">
          Tv Shows
        </Button>
      </Container>
      <Container>
        <ItemsCarousel movies={cinema} />
      </Container>
    </>
  );
};

export default Home;
