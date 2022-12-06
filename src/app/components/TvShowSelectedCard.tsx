import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

import { TvShow } from "../interface/tvShow.interface";
interface Props {
  tvShow: TvShow;
}
export const TvShowSelectedCard = ({ tvShow }: Props) => {
  return (
    <Card sx={{ maxWidth: 350, mb: 1, mt: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/original/${tvShow.poster_path}`}
          alt={tvShow.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="center">
            {tvShow.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            Popularity: {tvShow.vote_average}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
