import mongoose from 'mongoose';
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1/my-app-db', {});

mongoose.connection.on('open', function () {
  console.log('connected to MongoDB');
});

const gameSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  cover: {
    image_id: { type: String }
  },
  aggregated_rating: { type: Number },
  first_release_date: { type: Number },
  summary: { type: String },
  storyline: { type: String },
  platforms: [{ name: { type: String } }],
  involved_companies: [
    {
      company: { name: { type: String } }
    }
  ],
  game_modes: [{ name: { type: String } }],
  rating_count: { type: Number },
  total_rating_count: { type: Number },
  websites: [
    {
      category: { type: Number },
      url: { type: String }
    }
  ],
  genres: [{ name: { type: String } }],
  themes: [{ name: { type: String } }],
  player_perspectives: [{ name: { type: String } }],
  total_rating: { type: Number },
  status: { type: Number },
  category: { type: Number },
  created_at: { type: Number },
  updated_at: { type: Number }
});

const bookSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  authors: [{ type: String }],
  publishedDate: { type: String },
  description: { type: String },
  imageLinks: {
    thumbnail: { type: String }
  }
});

const movieSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  release_date: { type: String },
  vote_average: { type: Number },
  overview: { type: String },
  poster_path: { type: String },
  backdrop_path: { type: String },
  runtime: { type: Number },
  releaseDate: { type: String }
});

const Game = mongoose.model('Game', gameSchema);
const Movie = mongoose.model('Movie', movieSchema);
const Book = mongoose.model('Book', bookSchema);

export { Movie, Book, Game };
