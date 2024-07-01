import { FC } from "react"

interface LogoProps {
    size?: "sm" | "lg"
}

export const Logo: FC<LogoProps> = ({ size="lg" }) => {

    const determineSize = (size: string) => {
        switch(size){
            case "sm":
                return "48px"
            case "lg":
                return "64px"
        }
    }
    
    return (
        <div className={`font-libre italic text-[${determineSize(size)}]`}>
            <p><span className="text-primary ">Liber</span>-tad</p>
        </div>
    )
}