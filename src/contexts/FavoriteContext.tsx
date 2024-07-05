"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Book } from '@/types/Book';

// Define a type for the context value
interface FavoriteContextType {
    books: Book[];
    addBook: (book: Book) => void;
    removeBook: (bookId: number) => void;
}

interface FavoriteProviderProps {
    children: ReactNode; // ReactNode allows any valid JSX
}

// Create the context with initial values
const FavoriteContext = createContext<FavoriteContextType>({
    books: [],
    addBook: () => {},
    removeBook: () => {},
});

// Custom hook to use the BookContext
export const useFavoriteContext = () => useContext(FavoriteContext);

// Provider component to wrap your app with
export const FavoriteProvider: React.FC<FavoriteProviderProps> = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect( () => {
        const favoritesJSON = localStorage.getItem("liber-tad-favorites")
        if (favoritesJSON){
            setBooks(JSON.parse(localStorage.getItem("liber-tad-favorites")!))
        }
    }, [])

    const addBook = (book: Book) => {
        setBooks(prevBooks => [...prevBooks, book]);
        const pastArr = [...books, book]
        localStorage.setItem("liber-tad-favorites", JSON.stringify(pastArr))
    };

    const removeBook = (bookId: number) => {
        setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
        const newArr = books.filter(book => book.id !== bookId)
        localStorage.setItem("liber-tad-favorites", JSON.stringify(newArr))
    };

    return (
        <FavoriteContext.Provider value={{ books, addBook, removeBook }}>
            {children}
        </FavoriteContext.Provider>
    );
};
