"use client"
import { BooksGrid } from "@/components/BooksGrid";
import { Navbar } from "@/components/Navbar";
import { useFavoriteContext } from "@/contexts/FavoriteContext";

export default function FavoriteHome() {

    const { books } = useFavoriteContext()

    console.log(books)

    return (
        <main>
            <div className="mx-40">
                <Navbar type="general" />
                <BooksGrid data={books} />
            </div>
        </main>
    );
}