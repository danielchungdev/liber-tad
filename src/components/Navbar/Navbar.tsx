"use client"
import { FC } from "react"
import { Logo } from "../Logo"
import { SearchBar } from "../SearchBar"
import Link from "next/link"

interface NavbarProps {
    type?: "landing" | "general",
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ type = "landing", className }) => {

    const defineSize = (type: string): string => {
        switch(type){
            case "landing":
                return "text-small-body"
            case "general":
                return "text-paragraph"
            default:
                return "text-small-body"
        }
    }

    const landing = (
        <div className={`flex ${className} ${defineSize(type)}`} data-testid="landing-navbar">
            <Link href="/about" className="mr-3">About</Link>
            <Link href="/favorites" className="mr-3">Favorites</Link>
            <Link href="/books">Browse</Link>
        </div>
    )

    const general = (
        <div className={`flex justify-between ${className}`} data-testid="general-navbar">
            <div className="flex">
                <Logo size="sm" />
                <div className="my-auto mx-10">
                    {landing}
                </div>
            </div>
            <div className="my-auto">
                <SearchBar width="sm" />
            </div>
        </div>
    )

    return (
        <>
            {type === "landing" ? landing : general}
        </>
    )
}