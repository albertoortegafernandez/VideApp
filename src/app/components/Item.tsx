import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import { Movie } from "../interface/movie.interface";
import { Container } from "@mui/system";

interface Props {
  movie: Movie;
}

export const Item = ({ movie }: Props) => {
  return (
    <Paper>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        style={{ width: "100%", height: "110vh" }}
      />
      <div>
        <Typography align="center" variant="h3">
          {movie.title}
        </Typography>
        <Typography variant="h4" align="center">
          {movie.vote_average}
        </Typography>
        <Button sx={{ml:67, mb:3, mt:1}}variant="contained"> +Info</Button>
      </div>
    </Paper>
  );
};
