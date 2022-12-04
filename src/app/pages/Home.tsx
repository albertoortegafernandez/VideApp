import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import tmdb from "../api/tmdb";
import ItemsCarousel from "../components/ItemsCarousel";
import { NavBar } from "../components/Navbar";
import { addMovies, getAllMovies } from "../store/reducers/movies/movieSlice";
import { addTvShows } from "../store/reducers/tvShows/tvShowSlice";

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
  

  return (
    <>
      <NavBar />
      <Container sx={{ml:80 ,mt:12}}>
          <Button variant="contained"> Movies</Button>
          <Button sx={{ml:30 }}variant="contained"> Tv Shows</Button>
      </Container>
      <Container>
        <ItemsCarousel movies={movies} />
      </Container>
    </>
  );
};

export default Home;
