import { IconArrowRight, IconVideo } from "@tabler/icons-react"

export default function Slogan(){
    
    function renderPhrase() {
        return (
            <div className={`
                flex flex-col items-center md:items-start text-4xl lg:text-6xl
                text-white font-light
            `}>
                <div className="flex gap-2.5">
                    <div className="relative">
                        <span className={`
                            absolute bottom-1 left-0 w-full
                            border-b-8 border-purple-500
                            -rotate-2`}></span>
                        <span className="relative">Best</span>
                    </div>
                    <div>way</div>
                </div>
                <div className="flex gap-2.5">
                    <span>to</span>
                    <span>organize</span>
                </div>
                <div className="flex gap-2.5">
                    <span>your</span>
                    <span className={`
                        flex items-center p-1
                        relative text-black
                    `}>
                    <span className="absolute -rotate-1 top-0.5 left-0 w-full h-5/6 bg-yellow-300 rounded-sm"></span>
                    <span className="relative rotate-2 z-20">money</span>
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col justify-center gap-5">
            {renderPhrase()}
            <div className="text-sm lg:text-lg font-thin text-zinc-500">
                The financial plataform that makes your life easier
            </div>
            <div className="flex justify-center sm:justify-start items-center">
                <div className={`
                    flex items-center gap-2 cursor-pointer
                    bg-gradient-to-r from-indigo-600 to-cyan-600
                    text-white px-5 py-2.5
                `}>
                    <span className="font-thin md:text-sm text-base">
                        Start <span className="hidden sm:inline">Now</span>
                    </span>
                    <IconArrowRight className="hidden lg:inline" stroke={1}/>
                </div>
                <div className={`
                    flex items-center gap-2 cursor-pointer
                    text-zinc-300 px-5 py-2.5
                `}>
                    <IconVideo stroke={1}/>
                    <span className="font-thin md:text-sm text-base">
                        <span className="hidden sm:inline">Watch the</span> video
                    </span>
                </div>
            </div>
        </div>
    )

}