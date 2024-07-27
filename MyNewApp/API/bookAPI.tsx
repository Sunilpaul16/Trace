import { MY_BOOK_API_KEY } from '../config';

const API_KEY = MY_BOOK_API_KEY;
const POPULAR_BOOKS_API_URL = `https://www.googleapis.com/books/v1/volumes?q=bestsellers&maxResults=10&orderBy=relevance&key=${API_KEY}`;

export const fetchBooks = async () => {
  try {
    const response = await fetch(POPULAR_BOOKS_API_URL);
    const result = await response.json();
    return result.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchBookDetail = async (id: any) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
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
  id: string;
  releaseDate: string;
  overview: string;
  title: string;
  publishedDate: string;
  description: string;
}

export const postMyBook = async (book: Book): Promise<Book> => {
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
