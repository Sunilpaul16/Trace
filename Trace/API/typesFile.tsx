export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publishedDate: string;
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    averageRating?: number;
    categories?: string[];
    pageCount?: number;
  };
};

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  releaseDate: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  runtime: number;
  genres: { name: string }[];
};

export type Game = {
  id: number;
  name: string;
  cover?: {
    image_id: string;
  };
  aggregated_rating?: number;
  first_release_date?: number;
  summary?: string;
  storyline?: string;
  platforms?: { name: string }[];
  involved_companies?: { company: { name: string } }[];
  game_modes?: { name: string }[];
  rating_count?: number;
  total_rating_count?: number;
  screenshots?: { image_id: string }[];
  websites?: { category: number; url: string }[];
};
