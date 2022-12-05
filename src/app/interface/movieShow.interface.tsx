export interface MovieShow {
  id: number;
  title?: string;
  poster_path: string;
  vote_average: number;
  genres: [
    {
      id: number;
    }
  ];
  overview: string;
  release_date: string;
}
