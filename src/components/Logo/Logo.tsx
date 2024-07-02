import { FC } from "react"

interface LogoProps {
    size?: "sm" | "lg"
}

export const Logo: FC<LogoProps> = ({ size = "lg" }) => {

    const determineSize = (size: string) => {
        switch (size) {
            case "sm":
                return "text-[48px]"
            case "lg":
                return "text-[64px]"
        }
    }

    return (
        <p className={`font-libre italic ${determineSize(size)}`}><span className="text-primary ">Liber</span>-tad</p>
    )
}