import React from "react";
import { Paper, Typography } from "@mui/material";
import { Movie } from "../interface/movie.interface";
import { Link, Outlet } from "react-router-dom";

interface Props {
  movie: Movie;
}

export const Item = ({ movie }: Props) => {
  return (
    <Paper>
      {movie.title && (
        <Link to={`/movieDetail/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%", height: "105vh" }}
          />
          <div>
            <Typography align="center" variant="h3">
              {movie.title}
            </Typography>
            <Typography variant="h4" align="center">
              {movie.vote_average}
            </Typography>
          </div>
        </Link>
      )}
      {movie.name && (
        <Link to={`/tvShowDetail/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.name}
            style={{ width: "100%", height: "105vh" }}
          />
          <div>
            <Typography align="center" variant="h3">
              {movie.name}
            </Typography>
            <Typography variant="h4" align="center">
              {movie.vote_average}
            </Typography>
          </div>
        </Link>
      )}
      <Outlet />
    </Paper>
  );
};
