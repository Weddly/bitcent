import Area from "../shared/Area";
import Slogan from "./Slogan";

export default function Highlight() {
    return(
        <Area id="home" className="pt-20">
            <div className={`
              flex items-center
              h-[500px]
            `}>
                <Slogan />
            </div>
        </Area>
    )
}