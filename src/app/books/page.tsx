import { Suspense } from "react"
import { Navbar } from "@/components/Navbar"
import { BookContent } from "@/components/BookContent"  // Assuming you save the above component in this file

export default function BooksPage() {
    return (
        <main>
            <div className="mx-40">
                <Navbar type="general" />
                <Suspense fallback={<div>Loading...</div>}>
                    <BookContent />
                </Suspense>
            </div>
        </main>
    )
}