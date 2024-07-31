import {
  MY_BOOK_API_KEY,
  BOOK_BASE_URL,
  POPULAR_BOOKS_API_URL,
  PORT_BOOKS
} from '../config';
import { Book } from './typesFile';

export const fetchBooks = async () => {
  try {
    const response = await fetch(POPULAR_BOOKS_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.items;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const fetchBookDetail = async (id: string) => {
  try {
    const response = await fetch(
      `${BOOK_BASE_URL}${id}?key=${MY_BOOK_API_KEY}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.log('Failed to fetch book details:', error);
    throw error;
  }
};

export const getMyBooks = async (): Promise<Book[] | undefined> => {
  try {
    const response = await fetch(PORT_BOOKS);
    const data = await response.json();
    console.log('getMyBooks: success');
    return data;
  } catch (error) {
    console.log('Error getting Books', error);
    throw error;
  }
};

export const postMyBook = async (book: Book): Promise<Book> => {
  try {
    const response = await fetch(PORT_BOOKS, {
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

export const deleteBookFromMyBooks = async (id: any): Promise<void> => {
  try {
    const response = await fetch(`${PORT_BOOKS}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.log('Error deleting Book', error);
    throw error;
  }
};
