import { useState } from "react";

export default function useForm<T = any>(initialData: T) {
    const [data, setData] = useState<T>(initialData)

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