import { FC } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
    width?: string
}

export const SearchBar: FC<SearchBarProps> = ({ width = "600px" }) => {
    return (
        <div className={`flex items-center w-[${width}] border border-solid border-text p-2 rounded-full px-4`}>
            <IoSearchOutline className="h-5 w-5 mr-2" />
            <input className="outline-none flex-grow font-source" type="text" placeholder="Enter your books name and hit enter!" />
        </div>
    )
}