import React, { useState, useEffect } from "react";
import {
  Typography,
  CardContent,
  Card,
  CardMedia,
  CardActionArea,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import tmdb from "../api/tmdb";
import { getAllMovies } from "../store/reducers/movies/movieSlice";
import { MovieShow } from "../interface/movieShow.interface";

export const MovieDetail = () => {
  const { id } = useParams();
  const movies = useSelector(getAllMovies);
  const [movieSelected, setMovieSelected] = useState<MovieShow>();

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get(`/movie/${id}`);
      setMovieSelected(data);
    };
    fetchMovies();
  }, []);

  // const categoria= ["electricidad","gas"];
  // const categoria2 =["gas","luz"];
  
  //  const listTotal = [
  //      {category: "electricidad",date:"01/01/01"},
  //      {category: "gas",date:"01/01/01"},
  //      {category: "electricidad",date:"01/01/01"},
  //      {category: "luz",date:"01/01/01"} 
  //  ]
  
  // function filtra(array, filtro) {
  //  return array.filter(elem => filtro.includes(elem.category));
  // }
  
  // console.log("Filtrando electricidad y gas", filtra(listTotal, categoria));
  // console.log("Filtrando gas y luz", filtra(listTotal, categoria2));


  function filterCategory(array: any[], filter: number) {
    return array.filter(items => filter.includes(items.genre_ids));
  }

  console.log(filterCategory(movies,movieSelected?.genres))

  return (
    <>
      <Grid container
        direction="row"
        justifyContent="row"
        alignItems="left"
        sx={{ mt: 12 }}>
        <Typography
          className="text"
          component="a"
          href="/VideoApp/"
          variant="body1"
          align="left"
          sx={{ ml: 7, flexGrow: 1, textDecoration: "none" }}
        >
          Home
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 8 }}
      >
        <Card sx={{ maxWidth: 545 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="540"
              image={`https://image.tmdb.org/t/p/original/${movieSelected?.poster_path}`}
              alt={movieSelected?.title}
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h4"
                component="div"
              >
                {movieSelected?.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {movieSelected?.overview}
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2 }}
                color="text.secondary"
                align="right"
              >
                Date: {movieSelected?.release_date}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 6 }}
      >
        <Typography
          className="text"
          align="center"
          gutterBottom
          variant="h4"
          component="div"
        >
          Other similar movies:
        </Typography>
      </Grid>
    </>
  );
};
