import { FC } from "react"
import { Logo } from "../Logo"
import { SearchBar } from "../SearchBar"

interface NavbarProps {
    type?: "landing" | "general"
}

export const Navbar: FC<NavbarProps> = ({ type = "landing" }) => {

    const landing = (
        <div className="flex">
            <p className="mr-3">About</p>
            <p>Favorites</p>
        </div>
    )

    const general = (
        <div className="flex justify-between">
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