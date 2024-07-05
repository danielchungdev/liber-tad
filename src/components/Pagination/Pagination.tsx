import { FC } from "react"
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import Link from "next/link";

interface PaginationProps {
    pageNumber: string,
    prev: string | null | undefined, 
    next: string | null | undefined
}

export const Pagination: FC<PaginationProps> = ({ pageNumber, prev, next }) => {

    const cleanPrev = (prev : string | null | undefined) => {
        if (prev){
            let splitPrev = prev.split("/")
            let query = splitPrev[splitPrev.length - 1]
            return query
        }
    }

    const cleanNext = (next: string | null | undefined) => {
        if (next){
            let splitNext = next.split("/")
            let query = splitNext[splitNext.length - 1]
            return query
        }
    }

    return (
        <div className="m-auto flex justify-center inset-x-0 bottom-0 my-5">
            {prev ?
                <a href={`/books${cleanPrev(prev)}`}>
                    <p className={`border-2 border-accent rounded-full m-auto text-accent hover:bg-accent hover:text-white h-10 w-10 grid place-content-center mr-5`}><IoArrowBackOutline /></p>
                </a> :
                <button disabled={true}>
                    <p className={`border-2 border-neutral-300 rounded-full text-neutral-300  h-10 w-10 grid place-content-center mr-5`}><IoArrowBackOutline /></p>
                </button>
            }
            <p className="text-center my-auto text-accent rounded-full ">{pageNumber}</p>
            {
                next ?
                    <a href={`/books${cleanNext(next)}`}>
                        <p className={`border-2 border-accent rounded-full m-auto text-accent hover:bg-accent hover:text-white h-10 w-10 grid place-content-center ml-5`}><IoArrowForward /></p>
                    </a> :
                    <button disabled={true}>
                        <p className={`border-2 border-neutral-300 rounded-full text-neutral-300  h-10 w-10 grid place-content-center ml-5`}><IoArrowForward /></p>

                    </button>
            }
        </div>
    )
}
