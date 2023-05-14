import "dayjs/locale/pt-br"
import Transaction from "@/logic/core/finances/Transaction";
import Money from "@/logic/utils/Money";
import { Button, Group, Radio, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { TransactionType } from "@/logic/core/finances/TransactionType";
import useForm from "@/data/hooks/useForm";

interface FormProps{
    transaction: Transaction
    save?: (transaction: Transaction) => void
    delete?: (transaction: Transaction) => void
    back?: () => void
}

export default function Form(props: FormProps) {
    const{data, setData, changeValue} = useForm(props.transaction)

    return(
        <div className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}>
            <div className="bg-black py-7 px-7 text-zinc-400">Form</div>
            <div className="flex flex-col gap-4 p-4 sm:p-7">
                <TextInput 
                    label="Description"
                    value={data.description}
                    onChange={changeValue('description')}
                />
                <TextInput 
                    label="Value"
                    value={Money.format(data.value)}
                    onChange={changeValue('value', Money.unformat)}
                />
                <DatePickerInput 
                    label="Date"
                    value={data.date}
                    locale="pt-BR"
                    valueFormat="DD/MM/YYYY"
                    onChange={changeValue('date')}
                />
                <Radio.Group 
                    value={data.type}
                    onChange={changeValue('type')}
                >
                    <Group>
                        <Radio value={TransactionType.INCOME} label="Income" />
                        <Radio value={TransactionType.EXPENSE} label="Expense" />
                    </Group>
                </Radio.Group>
            </div>
            <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
                
                <Button className="bg-green-500" color="green"
                    onClick={() => props.save?.(data)}
                >
                    Save
                </Button>
                <Button className="bg-zinc-500" color="gray"
                    onClick={props.back}
                >
                    Back
                </Button>
                <div className="flex-1"></div>
                {props.transaction.id && (
                    <Button className="bg-red-500" color="red"
                    onClick={() => props.delete?.(props.transaction)}
                    >
                        Delete
                    </Button>
                )}
            </div>
        </div>
    )

}