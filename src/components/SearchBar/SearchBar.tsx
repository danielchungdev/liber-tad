import { FC } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
    width?: "sm" | "lg",
    className?: string
}

export const SearchBar: FC<SearchBarProps> = ({ width = "lg", className }) => {

    const determineWidth = (width: string) => {
        switch(width){
            case "sm":
                return "w-[400px]"
            case "lg":
                return "w-[560px]"
        }
    }

    return (
        <div className={`flex items-center ${determineWidth(width)} border border-solid border-text p-2 rounded-full px-4 ${className}`}>
            <IoSearchOutline className="h-5 w-5 mr-2" />
            <input className="outline-none flex-grow font-source py-1 bg-background" type="text" placeholder="Enter your books name and hit enter!" />
        </div>
    )
}