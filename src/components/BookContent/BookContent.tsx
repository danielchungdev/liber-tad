'use client'
import { useSearchParams } from 'next/navigation';
import { useBookFilters } from "@/hooks/useBookFilters"
import { FilterComponent } from "@/components/FilterComponent"
import { BooksGrid } from "@/components/BooksGrid"
import { Pagination } from "@/components/Pagination"
import { Loader } from "@/components/Loader"
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

export function BookContent() {
    const searchParams = useSearchParams();
    const {
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
        filter,
        handleFilter
    } = useBookFilters(searchParams);

    return (
        <>
            <div className="mt-10">
                <div className="font-source text-header font-semibold mb-3">
                    <p className="inline mr-2">Books</p>
                    <span className="text-paragraph">(found {data?.count} books)</span>
                    <button onClick={handleFilter}>
                        {
                            filter ?
                                <MdFilterAltOff className="h-7 w-7 inline ml-5" /> :
                                <MdFilterAlt className="h-7 w-7 inline ml-5" />
                        }
                    </button>
                </div>
            </div>
            {
                filter &&
                <FilterComponent
                    subjectFilters={subjectFilters}
                    authorFilters={authorFilters}
                    downloadFilter={downloadFilter}
                    applyFilters={applyFilters}
                    handleClearFilters={handleClearFilters}
                    subjects={subjects}
                    handleSubjectChange={handleSubjectChange}
                    handleAuthorLife={handleAuthorLife}
                    handleDownload={handleDownload}
                    setSubjectFilters={setSubjectFilters}
                    setAuthorFilters={setAuthorFilters}
                    setDownloadFilters={setDownloadFilters}
                />
            }
            {
                loading ? <Loader /> : <BooksGrid data={fileteredResults} />
            }
            {!loading && <Pagination pageNumber={currentPage} prev={data?.previous} next={data?.next} />}
        </>
    )
}