import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Movie } from "../interface/movie.interface";
import { Link, Outlet } from "react-router-dom";

interface Props {
  movie: Movie;
}

export const Item = ({ movie }: Props) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Paper>
        {movie.title && (
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/movieDetail/${movie.id}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", height: "100vh" }}
            />
            <div>
              <Typography align="center" variant="h4">
                {movie.title}
              </Typography>
              <Typography variant="h6" align="center">
                Popularity: {movie.vote_average}
              </Typography>
            </div>
          </Link>
        )}
        {movie.name && (
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/tvShowDetail/${movie.id}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.name}
              style={{ width: "100%", height: "100vh" }}
            />
            <div>
              <Typography align="center" variant="h4">
                {movie.name}
              </Typography>
              <Typography variant="h6" align="center">
                Popularity: {movie.vote_average}
              </Typography>
            </div>
          </Link>
        )}
        <Outlet />
      </Paper>
    </Grid>
  );
};
