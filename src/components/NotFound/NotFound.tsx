import { Navbar } from "../Navbar"

export const NotFound = () => {
    return (
        <div className="mx-40">
            <Navbar type="general" />
            <div className="grid h-[70vh] place-content-center">
                <p className="text-center text-4xl">404</p>
                <p className="text-3xl">Page not found :(</p>
            </div>
        </div>
    )
}