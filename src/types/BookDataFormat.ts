import { Book } from "./Book"

export type BookDataFormat = {
    count: number, 
    next: string | null,
    previous: string | null,
    results: Book[]
}