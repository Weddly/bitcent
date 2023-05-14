import React from "react"

interface PageTitleProps{
    icon?: any
    primary: string
    secondary?: string
    className?: string
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <div className={`flex items-center gap-2 ${props.className ?? ''}`}>
            {props.icon && (
                <div className="text-zinc-500">
                    {React.cloneElement(props.icon, {
                        stroke: 1,
                        size: props.secondary? 50: 24
                    })}
                </div>
            )}
            <div>
                <h1 className="text-zinc-500 text-2xl font-black">
                    {props.primary}
                </h1>
                {props.secondary &&
                    (<h2 className="text-zinc-500 text-sm font-thin -mt-1">
                    Info of {props.secondary}
                </h2>)}
            </div>
        </div>
    )
}