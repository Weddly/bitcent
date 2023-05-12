import Area from "../shared/Area";
import ResponsiveImage from "../shared/ResponsiveImage";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg"

export default function Highlight() {
    return(
        <Area id="home" className="pt-20">
            <div className={`
              flex items-center justify-around
              h-[500px]
            `}>
                <Slogan />
                <ResponsiveImage 
                    image={principal} 
                    className="rotate-3 hidden md:inline"
                />
            </div>
        </Area>
    )
}