"use client"
import { FC, useState } from "react"
import { Logo } from "../Logo"
import { SearchBar } from "../SearchBar"

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
        <div className={`flex ${className} ${defineSize(type)}`}>
            <p className="mr-3">About</p>
            <p>Favorites</p>
        </div>
    )

    const general = (
        <div className={`flex justify-between ${className}`}>
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