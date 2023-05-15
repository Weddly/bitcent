import Transaction from "@/logic/core/finances/Transaction"
import AuthContext from "../contexts/AuthContext"
import { useState, useContext, useEffect } from "react"
import services from "@/logic/core"

export type ViewType = "list" | 'grid'

export default function useTransaction(){
    const { user } = useContext(AuthContext)
    const [date, setDate] = useState<Date>(new Date)
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [viewType, setViewType] = useState<ViewType>('list')
    const [selectedtransaction, setSelectedTransaction] = useState<Transaction | null>(null)

    useEffect(() => {
        getTransactions()
    }, [date])

    async function getTransactions() {
        if(!user) return
        const transactions = await services.transaction.getByMonth(user, date)
        setTransactions(transactions)
    }
    
    async function saveTransaction(transaction: Transaction) {
        if(!user) return
        // new TransactionServices().save(transaction, user!)
        services.transaction.save(transaction, user)
        setSelectedTransaction(null)
        await getTransactions()
    }

    async function deleteTransaction(transaction: Transaction) {
        if(!user) return
        await services.transaction.delete(transaction, user)
        setSelectedTransaction(null)
        await getTransactions()
    }

    return {
        transactions,
        selectedtransaction,
        date,
        viewType,
        saveTransaction,
        deleteTransaction,
        selectTransaction: setSelectedTransaction,
        changeDate: setDate,
        alternateViewType: setViewType
    }
}