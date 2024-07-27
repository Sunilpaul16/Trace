import { MY_Book_API_KEY } from '../config';

const API_KEY = MY_Book_API_KEY;
const POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export const fetchBooks = async () => {
  try {
    const response = await fetch(POPULAR_API_URL);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const fetchBookDetail = async (id: any) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch book details:', error);
    throw error;
  }
};
const API = `http://10.0.2.2:3000/books`;

export const getMyBooks = async () => {
  try {
    const response = await fetch(API);
    return await response.json();
  } catch (error) {
    console.log('Error getting Books', error);
  }
};

export interface Book {
  id: number;
  title: string;
  releaseDate: string;
  overview: string;
}

export const postMyBook = async (book: Book) => {
  try {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.log('Error creating Book', error);
    throw error;
  }
};
