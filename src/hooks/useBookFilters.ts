import { useState, useEffect, ChangeEvent } from "react";
import { Book } from "@/types/Book";
import { BookDataFormat } from "@/types/BookDataFormat";
import useFetch from "@/hooks/useFetch";
import { useSearchParams } from 'next/navigation';

export const useBookFilters = () => {
    const { data, loading, fetchData } = useFetch<BookDataFormat>();
    const [currentPage, setCurrentPage] = useState<string>("1")
    const [fileteredResults, setFilteredResults] = useState<Book[] | undefined>();
    const [subjects, setSubjects] = useState<Set<string>>(new Set())
    const [subjectFilters, setSubjectFilters] = useState<string[]>([])
    const [authorFilters, setAuthorFilters] = useState<{ start: number, end: number }>({ start: 0, end: 0 })
    const [downloadFilter, setDownloadFilters] = useState<{ start: number, end: number }>({ start: 0, end: 0 })

    const searchParams = useSearchParams()

    useEffect(() => {
        const page = searchParams.get("page") ?? "1"
        const search = searchParams.get("search")
        setCurrentPage(page)

        const setup = async () => {
            let query = `https://gutendex.com/books/?page=${page}`
            if (search) {
                query += `&search=${search}`
            }
            let results = await fetchData(query)
            let subjectSet = new Set<string>()
            results?.results.forEach((result) => {
                result.subjects.forEach((subject) => {
                    subjectSet.add(subject)
                })
            })
            setSubjects(subjectSet)
            setFilteredResults(results?.results)
        }
        setup()
    }, [searchParams])

    const handleSubjectChange = (e: { target: { value: string } }) => {
        const value = e.target.value;
        if (!subjectFilters.includes(value)) {
            setSubjectFilters([...subjectFilters, value]);
        }
    }

    const handleAuthorLife = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setAuthorFilters({
            ...authorFilters,
            [name]: value
        });
    }

    const handleDownload = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;
        setDownloadFilters({
            ...downloadFilter,
            [name]: value
        });
    }

    const applyFilters = () => {
        const subjectResults: Book[] | undefined = fileteredResults?.filter((book) => {
            return book.subjects.some((subject) => subjectFilters.includes(subject))
        })
        const authorLifeResults: Book[] | undefined = fileteredResults?.filter((book) => {
            return book.authors.some((author) =>
                author.birth_year !== null &&
                author.death_year !== null &&
                author.birth_year >= authorFilters.start &&
                author.death_year <= authorFilters.end
            )
        })
        const downloadResults: Book[] | undefined = fileteredResults?.filter((book) =>
            book.download_count >= downloadFilter.start && book.download_count <= downloadFilter.end
        )

        // Combine all results and remove duplicates
        const combinedResults = [...(subjectResults || []), ...(authorLifeResults || []), ...(downloadResults || [])];
        const uniqueBooksMap = new Map();

        combinedResults.forEach(book => {
            if (!uniqueBooksMap.has(book.id)) {
                uniqueBooksMap.set(book.id, book);
            }
        });

        const uniqueResults = Array.from(uniqueBooksMap.values());
        setFilteredResults(uniqueResults)
    }

    const handleClearFilters = () => {
        setFilteredResults(data?.results)
        setAuthorFilters({ start: 0, end: 0 })
        setDownloadFilters({ start: 0, end: 0 })
        setSubjectFilters([])
    }

    return {
        currentPage,
        fileteredResults,
        subjects,
        subjectFilters,
        authorFilters,
        downloadFilter,
        loading,
        data,
        setSubjectFilters,
        setAuthorFilters,
        setDownloadFilters,
        handleSubjectChange,
        handleAuthorLife,
        handleDownload,
        applyFilters,
        handleClearFilters,
    }
}
