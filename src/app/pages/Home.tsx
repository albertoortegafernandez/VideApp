import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import tmdb from "../api/tmdb";
import { NavBar } from "../components/NavBar";
import { addMovies } from "../store/reducers/movies/movieSlice";
import { addTvShows } from "../store/reducers/tvShows/tvShowSlice";

function Home() {
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

  return (
    <>
      <Typography>Video App</Typography>
      <Link to="detail">Detail</Link>
    </>
  );
}

export default Home;
