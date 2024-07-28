import {
  MY_BOOK_API_KEY,
  BOOK_BASE_URL,
  POPULAR_BOOKS_API_URL,
  PORT_BOOKS
} from '../config';

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
      `${BOOK_BASE_URL}${id}?key=${MY_BOOK_API_KEY}`
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
export interface Book {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  description: string;
  imageLinks: {
    thumbnail: string;
  };
}
export const getMyBooks = async () => {
  try {
    const response = await fetch(PORT_BOOKS);
    return await response.json();
  } catch (error) {
    console.log('Error getting Books', error);
  }
};

export const postMyBook = async (book: Book): Promise<Book> => {
  try {
    console.log('Sending book data:', book); // Add this log

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
