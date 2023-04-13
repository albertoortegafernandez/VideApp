import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tmdb from "../api/tmdb";
import ItemsCarousel from "../components/ItemsCarousel";
import { addMovies, getAllMovies } from "../store/reducers/movies/movieSlice";
import {
  addTvShows,
  getAllTvShows,
} from "../store/reducers/tvShows/tvShowSlice";
export const Home = () => {
  const dispatch = useDispatch();
  const [descriptionVideoApp, setDescriptionVideoApp] = useState(
    "Welcome to VideoApp; the app where you will find a lot of movies and tv shows. If you want to know the most popular movies and tv shows of the moment click on the corresponding button."
  );
  const [titleVideos, setTitleVideos] = useState("");

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
  const tvShows = useSelector(getAllTvShows);
  const [videos, setVideos] = useState(movies);

  const handlerMovies = () => {
    setVideos(movies);
    setDescriptionVideoApp("");
    setTitleVideos("Popular Movies");
  };
  const handlerTvShows = () => {
    setVideos(tvShows);
    setDescriptionVideoApp("");
    setTitleVideos("Popular Tv SHows");
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 12 }}
      >
        <Button onClick={handlerMovies} variant="contained">
          Movies
        </Button>
        <Button onClick={handlerTvShows} sx={{ ml: 10 }} variant="contained">
          Tv Shows
        </Button>
      </Grid>
      <Typography className="text" sx={{ mt: 5 }} variant="h4" align="center">
        {descriptionVideoApp}
      </Typography>
      <Container>
        <Typography
          className="text"
          sx={{ mt: 5, mb: 5 }}
          variant="h3"
          align="center"
        >
          {titleVideos}
        </Typography>
        <ItemsCarousel movies={videos} />
      </Container>
    </>
  );
};

export default Home;
