import { FC } from "react"
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import Link from "next/link";

interface PaginationProps {
    pageNumber: string,
}

export const Pagination: FC<PaginationProps> = ({ pageNumber }) => {

    return (
        <div className="m-auto flex justify-center inset-x-0 bottom-0 my-5">
            {parseInt(pageNumber) > 1 ?
                <a href={`/books?page=${parseInt(pageNumber) - 1}`}>
                    <p className={`border-2 border-accent rounded-full m-auto text-accent hover:bg-accent hover:text-white h-10 w-10 grid place-content-center mr-5`}><IoArrowBackOutline /></p>
                </a> :
                <button disabled={true}>
                    <p className={`border-2 border-neutral-300 rounded-full text-neutral-300  h-10 w-10 grid place-content-center mr-5`}><IoArrowBackOutline /></p>
                </button>
            }
            <p className="text-center my-auto text-accent rounded-full ">{pageNumber}</p>
            {
                parseInt(pageNumber) < 2309 ?
                    <a href={`/books?page=${parseInt(pageNumber) + 1}`}>
                        <p className={`border-2 border-accent rounded-full m-auto text-accent hover:bg-accent hover:text-white h-10 w-10 grid place-content-center ml-5`}><IoArrowForward /></p>
                    </a> :
                    <button disabled={true}>
                        <p className={`border-2 border-neutral-300 rounded-full text-neutral-300  h-10 w-10 grid place-content-center ml-5`}><IoArrowForward /></p>

                    </button>
            }
        </div>
    )
}
