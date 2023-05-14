import Transaction from "@/logic/core/finances/Transaction"
import AuthContext from "../contexts/AuthContext"
import { useState, useContext, useEffect } from "react"
import services from "@/logic/core"

export default function useTransaction(){
    const { user } = useContext(AuthContext)
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [selectedtransaction, setSelectedTransaction] = useState<Transaction | null>(null)

    useEffect(() => {
        getTransactions()
    }, [])

    async function getTransactions() {
        if(!user) return
        const transactions = await services.transaction.get(user)
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
        saveTransaction,
        deleteTransaction,
        selectTransaction: setSelectedTransaction
    }
}