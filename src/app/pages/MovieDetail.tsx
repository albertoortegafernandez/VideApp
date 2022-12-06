import React, { useState, useEffect } from "react";
import {
  Typography,
  CardContent,
  Card,
  CardMedia,
  CardActionArea,
  Grid,
  Container,
} from "@mui/material";
import { useParams } from "react-router-dom";
import tmdb from "../api/tmdb";
import { MovieShow } from "../interface/movieShow.interface";
import { MovieSelectedCard } from "../components/MovieSelectedCard";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movieSelected, setMovieSelected] = useState<MovieShow>();
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await tmdb.get(`/movie/${id}`);
      setMovieSelected(data);
    };
    fetchMovie();
    const fetchSimilarMovies = async () => {
      const { data } = await tmdb.get(`/movie/${id}/similar`);
      setSimilarMovies(data.results);
    };
    fetchSimilarMovies();
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="row"
        alignItems="left"
        sx={{ mt: 12 }}
      >
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
      >
        <Card sx={{ maxWidth: 420, mt: 6 }}>
          <CardActionArea>
            <CardMedia
              style={{ objectFit: "cover" }}
              component="img"
              height="600"
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
      <Container>
        <Grid container spacing={1}>
          {similarMovies.map((item, index: number) => (
            <Grid key={index} xs={8} sm={6} md={4}>
              <MovieSelectedCard movie={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
