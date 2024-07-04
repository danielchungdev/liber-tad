import { FC } from "react"
import { Book } from "@/types/Book"

interface BooksGridProps {
    data: Book[] | undefined
}

export const BooksGrid: FC<BooksGridProps> = ({ data }) => {
    return (
        <>
            {
                data && (
                    <div className="grid grid-cols-8 gap-4">
                        {
                            data.map( (book) => (
                                <div key={book.id} className="text-center my-1 font-libre text-paragraph grid bg-secondary shadow-md p-2 rounded-lg">
                                    <img src={book.formats["image/jpeg"]} className="h-[200px] m-auto" alt={`${book.title}'s cover image`}/>
                                    <p>{book.title}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}