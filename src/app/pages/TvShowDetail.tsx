import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import tmdb from "../api/tmdb";
import { TvShow } from "../interface/tvShow.interface";
import { getAllTvShows } from "../store/reducers/tvShows/tvShowSlice";

export const TvShowDetail = () => {
  const { id } = useParams();
  const tvShows = useSelector(getAllTvShows);
  const [tvSelected, setTvSelected] = useState<TvShow>();

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdb.get(`/tv/${id}`);
      setTvSelected(data);
    };
    fetchMovies();
  }, []);

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
              image={`https://image.tmdb.org/t/p/original/${tvSelected?.poster_path}`}
              alt={tvSelected?.name}
            />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h4"
                component="div"
              >
                {tvSelected?.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {tvSelected?.overview}
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2 }}
                color="text.secondary"
                align="right"
              >
                Date: {tvSelected?.last_air_date}
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
