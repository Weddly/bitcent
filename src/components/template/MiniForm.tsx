import { Button } from "@mantine/core"

interface MiniFormProps{
    title: string
    description: string
    footerMsg: string
    btnText: string
    save: () => void
    canSave: boolean
    children: any
}

export default function MiniForm(props: MiniFormProps) {
    return(
        <div className={`
            flex flex-col overflow-hidden
            border border-zinc-800 rounded-l
        `}>
            <div className="flex flex-col p-7">
                <div className="text-3xl font-black">{props.title}</div>
                <div className="mt-4 text-zinc-400">{props.description}</div>
                <div className="mt-3">
                    {props.children}
                </div>
                <div className={`
                    flex justify-end sm:justify-between items-center
                    bg-black px-7 py-5
                `}>
                    <span className="hidden sm:inline text-zinc-400">{props.footerMsg}</span>
                    <Button 
                        className={props.canSave? "bg-green-500 hover:bg-green-600" : "bg-gray-800"}
                        color={props.canSave? "green" : "gray"}
                        onClick={() => props.canSave ? props.save() : null}
                    >
                        {props.btnText}
                    </Button>
                </div>
            </div>
        </div>
    )
}