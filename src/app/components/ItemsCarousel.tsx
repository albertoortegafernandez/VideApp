import * as React from "react";
import { Movie } from "../interface/movie.interface";
import Carousel from "react-material-ui-carousel";
import { Item } from "./Item";

interface Props {
  movies: Movie[];
}

export default function ItemsCarousel({ movies }: Props) {
  return (
    <Carousel sx={{ mt: 5 }}>
      {movies.map((item, i) => (
        <Item key={i} movie={item} />
      ))}
    </Carousel>
  );
}
