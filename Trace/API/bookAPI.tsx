import { BACKEND_URL } from '../config';
import { Book } from './typesFile';

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/books/popular`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export const fetchBookDetail = async (id: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/books/detail/${id}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('Failed to fetch book details:', error);
    throw error;
  }
};

export const getMyBooks = async (): Promise<Book[] | undefined> => {
  try {
    const response = await fetch(`${BACKEND_URL}/books`);
    return await response.json();
  } catch (error) {
    console.log('Error getting Books', error);
    throw error;
  }
};

export const postMyBook = async (book: Book): Promise<Book> => {
  try {
    const response = await fetch(`${BACKEND_URL}/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log('Error creating Book', error);
    throw error;
  }
};

export const deleteBookFromMyBooks = async (id: any): Promise<void> => {
  try {
    const response = await fetch(`${BACKEND_URL}/books/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
  } catch (error) {
    console.log('Error deleting Book', error);
    throw error;
  }
};
