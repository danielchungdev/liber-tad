"use client"
import useFetch from "@/hooks/useFetch"
import { Navbar } from "@/components/Navbar"
import {Loader} from "@/components/Loader"
import { BooksGrid } from "@/components/BooksGrid"
import { BookDataFormat } from "@/types/BookDataFormat"
import { useEffect, useState } from "react"
import { Pagination } from "@/components/Pagination"
import { useSearchParams } from 'next/navigation'

export default function BooksPage() {

    const {data, loading, error, fetchData} = useFetch<BookDataFormat>();
    const [currentPage, setCurrentPage] = useState<string>("1")
    const searchParams = useSearchParams()

    useEffect( () => {
        const page = searchParams.get("page") ?? "1"
        setCurrentPage(page)

        const setup = async () => {
            await fetchData(`https://gutendex.com/books/?page=${page}`)
        }

        setup()
        
    }, [])

    return (
        <main>
            <div className="mx-40">
                <Navbar type="general" />
                <div className="mt-10">
                    <p className="font-source text-header font-semibold mb-3">Books <span className="text-paragraph">({data?.results.length} in page)</span></p>
                </div>
                {
                    loading ? <Loader/> : <BooksGrid data={data?.results}/>
                }
                {!loading && <Pagination pageNumber={currentPage}/>}
            </div>
        </main>
    )
}