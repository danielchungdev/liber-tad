import { FC } from "react"
import Link from "next/link"
interface LogoProps {
    size?: "sm" | "lg",
    className?: string,
}

export const Logo: FC<LogoProps> = ({ size = "lg", className }) => {

    const determineSize = (size: string) => {
        switch (size) {
            case "sm":
                return "text-[48px]"
            case "lg":
                return "text-[90px]"
        }
    }

    return (
        <Link href="/" className={`font-libre italic ${determineSize(size)} ${className}`}><span className="text-primary ">Liber</span>-tad</Link>
    )
}