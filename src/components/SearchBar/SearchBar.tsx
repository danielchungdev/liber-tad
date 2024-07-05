"use client"
import { ChangeEvent, FC, KeyboardEvent, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface SearchBarProps {
    width?: "sm" | "lg",
    className?: string
}

export const SearchBar: FC<SearchBarProps> = ({ width = "lg", className }) => {

    const [value, setValue] = useState<string>("");
    const router = useRouter()
    
    const determineWidth = (width: string) => {
        switch (width) {
            case "sm":
                return "w-[400px]"
            case "lg":
                return "w-[560px]"
        }
    }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setValue(value)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            router.push(`/books?search=${value}`)
        }
    }

    return (
        <div className={`flex items-center ${determineWidth(width)} border border-solid border-text rounded-full px-5 ${className}`} data-testid="searchbar">
            <IoSearchOutline className="h-5 w-5 mr-2" />
            <input
                className="outline-none flex-grow font-source py-3 bg-background"
                type="text"
                placeholder="Enter your books name and hit enter!"
                value={value}
                onKeyDown={handleKeyDown}
                onChange={handleInput}
            />
        </div>
    )
}