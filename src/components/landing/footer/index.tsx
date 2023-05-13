import Area from "../shared/Area";
import Logo from "../shared/Logo";
import SocialNetworks from "./SocialNetworks";

export default function Footer() {
    return(
        <Area className="bg-black py-20">
            <div className="flex flex-col items-center md:items-start ">
                <Logo />
                <div className="mt-3 text-zinc-400 text-center md:text-left">
                    <div>Financial platform </div>
                    <div className="flex gap-1.5">that <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">simplify</span> your life</div>
                </div>
            </div>   
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-14">
                <SocialNetworks />
                <p className="text-zinc-100 mt-7 md:mt-0 text-center">
                    <span className="font-bold">W<span className="text-red-500">3</span>DDLY</span> ® {new Date().getFullYear()} - All rights reserved
                </p>
            </div>
        </Area>
    )
}