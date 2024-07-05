import Link from "next/link"

export const Footer = () => {
    return(
        <div className="bg-accent fixed inset-x-0 bottom-0" data-testid="footer">
            <p className="text-center text-white py-2 text-small-body">Want to see more? Check out <Link className="hover:text-text transition duration-700 ease-in-out" href="https://www.danielchung.dev" target="_blank">www.danielchung.dev</Link></p>
        </div>
    )
}