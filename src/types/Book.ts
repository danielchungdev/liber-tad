import { Person } from "./Person"
import { Format } from "./Format"

export type Book = {
    id: number,
    title: string,
    subjects: string[],
    authors: Person[],
    translators: Person[],
    bookshelves: string[],
    languages: string[],
    copyright: boolean | null,
    media_type: string,
    formats: Format,
    download_count: number,
}