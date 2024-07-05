"use client"
import { Navbar } from "@/components/Navbar"
import { Loader } from "@/components/Loader"
import { BooksGrid } from "@/components/BooksGrid"
import { Pagination } from "@/components/Pagination"
import { useBookFilters } from "@/hooks/useBookFilters"
import { FilterComponent } from "@/components/FilterComponent"

export default function BooksPage() {

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
    } = useBookFilters();

    return (
        <main>
            <div className="mx-40">
                <Navbar type="general" />
                <div className="mt-10">
                    <p className="font-source text-header font-semibold mb-3">Books <span className="text-paragraph">(found {data?.count} books)</span></p>
                </div>
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
                {
                    loading ? <Loader /> : <BooksGrid data={fileteredResults} />
                }
                {!loading && <Pagination pageNumber={currentPage} prev={data?.previous} next={data?.next} />}
            </div>
        </main>
    )
}
