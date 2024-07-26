const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1/my-app-db', {});

mongoose.connection.on('open', function () {
  console.log('connected to MongoDB');
});

const gameSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  vote_average: { type: Number },
  description: { type: String },
  thumbnail: { type: String },
  age_ratings: { type: Number },
  cover: { type: String },
  first_release_date: { type: Date },
  release_dates: { type: String },
  storyline: { type: String },
  summary: { type: String },
  videos: { type: String },
  platforms: { type: String }
});

const bookSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  vote_average: { type: Number },
  description: { type: String },
  thumbnail: { type: String },
  author: { type: String },
  publishedDate: { type: Date },
  pageCount: { type: Number },
  printedPageCount: { type: Number }
});

const movieSchema = new Schema({
  id: { type: Number },
  title: { type: String },
  release_date: { type: Date },
  vote_average: { type: Number },
  overview: { type: String },
  poster_path: { type: String },
  backdrop_path: { type: String },
  runtime: { type: Number }
});

const Game = mongoose.model('Game', gameSchema);
const Movie = mongoose.model('Movie', movieSchema);
const Book = mongoose.model('Book', bookSchema);

module.exports = {
  Game,
  Movie,
  Book
};
