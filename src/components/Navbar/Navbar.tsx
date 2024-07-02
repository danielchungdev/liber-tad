"use client"
import { FC, useState } from "react"
import { Logo } from "../Logo"
import { SearchBar } from "../SearchBar"

interface NavbarProps {
    type?: "landing" | "general",
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ type = "landing", className }) => {

    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'

        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'

        }
    }

    const landing = (
        <div className={`flex ${className} text-small-body`}>
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