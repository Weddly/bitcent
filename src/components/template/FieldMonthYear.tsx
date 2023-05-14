import DateFormat from "@/logic/utils/Date"
import { Button, NumberInput, Popover } from "@mantine/core"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { useState } from "react"

export interface FieldMonthYearProps {
    date?: Date
    dateChanged?: (date: Date) => void
}

export default function FieldMonthYear(props: FieldMonthYearProps) {
    const today = new Date()

    const [date, setDate] = useState<Date>(new Date(
        props.date?.getFullYear() ?? today.getFullYear(),
        props.date?.getMonth() ?? today.getMonth(),
        1
    ))

    function changeYear(year: number) {
        if(!year) return
        const newDate = new Date(date)
        newDate.setFullYear(year)
        setDate(newDate)
        props.dateChanged?.(newDate)
    }

    function changeMonth(month: number) {
        const newDate = new Date(date)
        newDate.setMonth(month)
        setDate(newDate)
        props.dateChanged?.(newDate)
    }

    function increaseMonth() {
        const newDate = new Date(date)
        newDate.setMonth(newDate.getMonth() + 1)
        setDate(newDate)
        props.dateChanged?.(newDate)
    }

    function decreaseMonth() {
        const newDate = new Date(date)
        newDate.setMonth(newDate.getMonth() - 1)
        setDate(newDate)
        props.dateChanged?.(newDate)
    }

    return(
        <div className="flex items-center gap-2">
            <Button className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `} color="red" onClick={decreaseMonth}>
                <IconChevronLeft size={14} />
            </Button>
            <Popover withArrow>
                <Popover.Target>
                    <Button className={`
                        bg-gradient-to-r from-indigo-600 to-cyan-600
                        text-white cursor-pointer select-none
                        w-full sm:w-44 px-3
                    `}>
                        {DateFormat.mmyy.format(date)}
                    </Button>
                </Popover.Target>
                <Popover.Dropdown>
                    <div className="flex justify-center mb-5">
                        <NumberInput
                            value={date.getFullYear()}
                            onChange={changeYear}
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {DateFormat.months().map((month, i) => {
                            const selected = date.getMonth() === 1
                            return(
                                <Button
                                    key={i}
                                    color={selected ? 'red' : 'blue'}
                                    className={`${selected ? 'bg-red-500' : 'bg-blue-500'}`}
                                    onClick={() => changeMonth(i)}
                                >{month}</Button>
                            )
                        })}
                    </div>
                </Popover.Dropdown>
            </Popover>
            <Button className={`
                flex justify-center items-center bg-red-500
                text-white cursor-pointer p-1
            `} color="red" onClick={increaseMonth}>
                <IconChevronRight size={14} />
            </Button>
        </div>
    )
}