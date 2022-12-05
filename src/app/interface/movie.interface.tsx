export interface Movie {
  id: number;
  title?: string;
  movie?: string;
  poster_path: string;
  vote_average: number;
  genre_ids: [];
}

export interface Movies {
  movies: Movie[];
}
