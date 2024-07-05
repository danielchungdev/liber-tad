import { Book } from "@/types/Book"

export const isBookInArray = (books: Book[], id: number): boolean => {
    return books.some(book => book.id === id);
  }