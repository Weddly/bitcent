import Transaction from "@/logic/core/finances/Transaction";
import { useState } from "react";

export default function useForm(initialData: Transaction) {
    const [data, setData] = useState(initialData)

    function changeValue (value: string, fn?: Function) {
        return (newValue: any) => {
            const v = newValue?.target?.value ?? newValue
            setData({...data, [value]: fn?.(v) ?? v})
        }
    }

    return {
        data,
        setData,
        changeValue
    }
}