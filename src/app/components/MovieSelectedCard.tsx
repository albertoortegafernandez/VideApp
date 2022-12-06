import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Movie } from "../interface/movie.interface";
interface Props {
  movie: Movie;
}
export const MovieSelectedCard = ({ movie }: Props) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card sx={{ maxWidth: 350, mb: 1, mt: 2 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            >
              {movie.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" align="center">
              Popularity: {movie.vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
