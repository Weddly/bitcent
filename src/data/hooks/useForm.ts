import { useCallback, useState } from "react";

export default function useForm<T = any>(initialData?: T) {
    const [data, setData] = useState<T>(initialData ?? {} as T)

    const changeValue = useCallback(function(value: string, fn?: Function) {
        return (newValue: any) => {
            const v = newValue?.target?.value ?? newValue
            setData({...data, [value]: fn?.(v) ?? v})
        }
    }, [data])

    return {
        data,
        setData,
        changeValue
    }
}